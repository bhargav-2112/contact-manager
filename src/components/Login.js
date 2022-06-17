import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'
import "./login.css"
import {Link} from 'react-router-dom'
import api from "../api/contacts";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined
    });

    const {loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const loginData = setCredentials((prev) => ( 
            {
            ...prev,
            [e.target.id]: e.target.value
        })//this will assign value to the id of the input
        )
        console.log("loginData",loginData);
    }
    const retrieveContacts = async () => {
        const response = await api.get("/contacts");
        const {data} = response;
        data.forEach(contact => {
            console.log(contact);
            const checkUser = contact.username == credentials.username && contact.password == credentials.password
            if (checkUser) {
                dispatch({type:"LOGIN_SUCCESS", payload:contact})
                navigate('/');
            }
        })
        console.log("response",data);
        console.log("Credentials", credentials);
        // if (response.data) {
        //   setContacts(response.data);
        // } 
      };

      const handleClick = async(e) => {
        e.preventDefault();
        // dispatch({type: "LOGIN_START"});
        try {
            retrieveContacts();
            // dispatch({type:"LOGIN_SUCCESS", payload: res.data.details});
            
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
        }
        
    }

  return (
    <div className="login">
    <div className="lContainer">
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChange}
        className="lInput"
      />
      <button disabled={loading} onClick={handleClick} className="lButton">
        Login
      </button>
      <p>Don't have an account</p>
      <Link to="/register" >
          <span>Register here</span>
        </Link>
      {error && <span>{error.message}</span>}
    </div>
  </div>
  )
}

export default Login
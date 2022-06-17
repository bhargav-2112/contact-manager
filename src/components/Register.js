import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'
import { useContactsCrud } from '../context/ContactsCrudContext';
import "./login.css"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined
    });
    const {addContactHandler} = useContactsCrud();
    const {loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const registerData = setCredentials((prev) => ( 
            {
            ...prev,
            [e.target.id]: e.target.value
        })//this will assign value to the id of the input
        )
        console.log("registerData",registerData);
    }

    const handleClick = async(e) => {
        e.preventDefault();
        dispatch({type: "REGISTER_START"});
        try {
            // const res = await axios.post("/contacts", credentials)
            addContactHandler(credentials);
            // dispatch({type:"REGISTER_SUCCESS", payload: res.data.details});
            navigate('/');
        } catch (error) {
            dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
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
        type="text"
        placeholder="email"
        id="email"
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="text"
        placeholder="city"
        id="city"
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="text"
        placeholder="country"
        id="country"
        onChange={handleChange}
        className="lInput"
      />
      <input
        type="text"
        placeholder="phone"
        id="phone"
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
        Register
      </button>
      
      {error && <span>{error.message}</span>}
    </div>
  </div>
  )
}

export default Register
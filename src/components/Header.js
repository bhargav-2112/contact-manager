import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import {Navigate} from 'react-router-dom';

function Header() {
  const {user} = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload();
    <Navigate to ="/" />
  }
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <h2>Contact Manager</h2>
            {user && 
            <div style={{marginLeft: "450px", display:"inline-flex"}}>
              <h3>Welcome {user.username}</h3>
              <button onClick={handleLogout} className="ui button blue right" style={{marginLeft: "25px",}}>Logout</button>
            </div>
            }
        </div>
    </div>
  )
}

export default Header
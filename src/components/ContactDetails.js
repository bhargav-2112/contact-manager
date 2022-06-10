import React from 'react'
import { Link, useLocation } from "react-router-dom";
import user from '../images/user.png';

function ContactDetails(props) {  
    console.log("props",props);
    // const location = useLocation();
    // console.log("location",location);
    
    // const {name, email} = props.location.state.contact
    return (
    <div className='main'>
        <div className='ui card centered'>
            <div className='image'>
                <img src={user} alt="user"/>
            </div>
            {/* <div className='content'>
                <div className='header'>{name}</div>
                <div className='meta'>{email}</div>
            </div> */}
        </div>
        <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails
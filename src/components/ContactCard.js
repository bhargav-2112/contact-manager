import React from 'react'
import user from '../images/user.png';
import {Link} from 'react-router-dom';

function ContactCard(props) {  
    console.log("props.contact",props.contact); 
    const {name, email, id} = props.contact;  // destructuring
  return (
    <div className="card" key={id}> {/* key is used to identify each card */}
        <div className="image">
            <img src={user} alt="user"/>
        </div>
      <div className="content">
          <Link to={{pathname:`/contact/${id}`}} state={{contact:props.contact}}>  
            <div className="header">{name}</div>
            <div className="meta">{email}</div>
          </Link>
        <i className="trash alternate outline icon"
            style={{color:"red", marginTop:"7px", marginLeft:"10px"}}
            onClick={() => props.clickHandler(id)}
        ></i>
        <Link to={{pathname:`/edit`}} state={{contact:props.contact}}>
        <i className="edit alternate outline icon"
            style={{color:"blue", marginTop:"7px"}}
        ></i>
        </Link>
      </div>
    </div>
  );
}

export default ContactCard
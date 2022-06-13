import React from 'react'
import user from '../images/user.png';
import {Link} from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

function ContactCard(props) {  

    const {name, email, id} = props.contact;  // destructuring
    const {removeContactHandler} = useContactsCrud();

  const deleteContact = (id) => {
    removeContactHandler(id);
  }
  return (
    <div className="item" key={id}> {/* key is used to identify each card */}
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
            onClick={() =>deleteContact(id)}
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
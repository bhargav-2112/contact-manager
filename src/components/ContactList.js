import React,{useRef} from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom';

function ContactList(props) {
    console.log("contacts",props);
    const inputElement = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard
          contact={contact}
          clickHandler={deleteContactHandler}
          key={contact.id}
        />
      );
    });

    const getSearchTerm = (event) => {
        props.searchKeyword(inputElement.current.value);
    }

    return (
      <div className="main">
        <h2>
          Contact List
          <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
          </Link>
        </h2>
        <div  className='ui search'>
          <div className='ui icon input'>
            <input 
            ref={inputElement}
            type="text" placeholder='Search Contacts' className='prompt' value={props.term} onChange={getSearchTerm}/>
            <i className='search icon'></i>
          </div>
        </div>
        <div className="ui celled list">{renderContactList.length>0 ? renderContactList : "No contacts available"}</div>
      </div>
    );
}

export default ContactList
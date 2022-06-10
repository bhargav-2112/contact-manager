import React from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom';

function ContactList({contacts}) {
    console.log("contacts",contacts);

    const deleteContactHandler = (id) => {
        contacts.getContactId(id);
    };
  return (
    <div>
      <h2>Contact List</h2>
      <Link to="/add">
        <button className='ui button primary'>Add Contact</button>
      </Link>
      <div className="ui cards">    
        {contacts.map((contact) => (    // map through the contacts array
          <ContactCard 
          key={contact.id} 
          contact={contact} 
          clickHandler={deleteContactHandler}
          />  
        ))}
      </div>
    </div>
  );
}

export default ContactList
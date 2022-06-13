import React,{useRef, useEffect, useState} from 'react'
import ContactCard from './ContactCard'
import {Link} from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

function ContactList(props) {
    const {contacts, retrieveContacts, searchHandler, text, searchResults} = useContactsCrud();
    useEffect(() => {
      retrieveContacts();
    }, []);
    
    const renderContactList = (text.length < 1 ? contacts : searchResults).map((contact) => {
      return (
        <ContactCard
          contact={contact}
          key={contact.id}
        />
      );
    });

    const onUserSearch = (e) => {
      searchHandler(e.target.value);
    }

    return (
      <div className="main">
        <h2>
          Contact List
          <Link to="/add">
            <button className="ui button blue right" style={{marginLeft:"20px"}}>Add Contact</button>
          </Link>
        </h2>
        <div className="ui search">
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search Contacts"
              className="prompt"
              value={text}
              onChange={(e) => onUserSearch(e)}
            />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="ui celled list">
          {renderContactList.length > 0
            ? renderContactList
            : "No contacts available"}
        </div>
      </div>
    );
}

export default ContactList
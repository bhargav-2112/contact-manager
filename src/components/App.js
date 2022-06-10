import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactDetails from './ContactDetails';
import api from '../api/contacts';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([])
  // const contactList = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     email: 'jon@ymail.com'
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Doe',
  //     email: 'jane@ymail.com'
  //   },
  //   {
  //     id: 3,
  //     name: 'Jack Doe',
  //     email: 'jack@ymail.com'
  //   }
  // ]

  const retrieveAllContacts = async() => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async(contact) => {
    console.log("contact",contact);
    // setContacts([...contacts, {id: uuidv4(), ...contact}])
    const request = {
      id: uuidv4(), ...contact
    }

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
    
  }

  const removeContactHandler =  (id) => { 
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  useEffect(() => {
    const getAllContacts = async() => {
      const allContacts = await retrieveAllContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    if(contacts?.length) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }
}, [contacts])

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>} exact/>
        <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} exact/>
        <Route path='/contact/:id' element={<ContactDetails/>} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

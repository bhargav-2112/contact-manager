import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useContactsCrud } from '../context/ContactsCrudContext';


const EditContact = () => {
    const location = useLocation();    
    const navigate = useNavigate();
    const {id,name,email} = location.state.contact;
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);
    const {updateContactHandler} = useContactsCrud();

    const update = (e) => {
        e.preventDefault();
        if(newName === '' || newEmail === ''){
            alert('Please fill all the fields');
        }
       
       updateContactHandler({id,name:newName,email:newEmail});
        setNewName('');
        setNewEmail('');
        navigate('/');
    }

    return (
        <div className='ui main'>
            <h2>Update Contact </h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label>Name</label>
                    <input 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input 
                    type='text' 
                    name='email' 
                    placeholder='Email'
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)} 
                    />
                </div>
                <button className='ui button primary'>Update Contact</button>
            </form>    
        </div>
  )
}

export default EditContact
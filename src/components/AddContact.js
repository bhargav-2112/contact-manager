import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

const AddContact = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {addContactHandler} = useContactsCrud();

     const add = (e) => {
        e.preventDefault();
        if(name === '' || email === ''){
            alert('Please fill all the fields');
        }
       
        addContactHandler({name,email});

        setName('');
        setEmail('');
        navigate('/');
    }
 
    return (
        <div className='ui main'>
            <h2>Add Contact </h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input 
                    type='text' 
                    name='email' 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <button className='ui button primary'>Add Contact</button>
            </form>    
        </div>
  )}

export default AddContact
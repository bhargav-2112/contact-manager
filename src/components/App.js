import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";
import Login from './Login';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Register from './Register';

function App() {
  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log("user",user);
    if(!user){
      return <Navigate to='/login'/>
    }
    return children;
  }
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <ContactsCrudContextProvider>
        <Routes>
        <Route path='/' element={
        <ProtectedRoute>
          <ContactList/>
        </ProtectedRoute> 
        
        } exact/>
        <Route path='/add' element={
        <ProtectedRoute>
          <AddContact/>
        </ProtectedRoute>
        } exact/>
        <Route path='/edit' element={
        <ProtectedRoute>
          <EditContact/>
        </ProtectedRoute>
        } exact/>
        <Route path='/contact/:id' element={
        <ProtectedRoute>
          <ContactDetails/>
        </ProtectedRoute>
        } exact/>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} exact/>
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;

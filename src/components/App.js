import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <ContactsCrudContextProvider>
        <Routes>
        <Route path='/' element={<ContactList/>} exact/>
        <Route path='/add' element={<AddContact/>} exact/>
        <Route path='/edit' element={<EditContact/>} exact/>
        <Route path='/contact/:id' element={<ContactDetails/>} exact/>
        </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;

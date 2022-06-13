import React from 'react'

class EditContact extends React.Component {
    // const location = useLocation();    
    constructor(props){
        super(props);
        console.log("props on edit",props);
        const {id, name, email} = props.location.state.contact;
        this.state = {
            id,
            name,
            email
        }
    }
    update = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert('Please fill all the fields');
        }
       
        this.props.addContactHandler(this.state);
        console.log("this.state",this.state);
        console.log("this.props",this.props);
        this.setState({name: '', email: ''});
        // this.props.history.push('/');
    }
    render(){
    return (
        <div className='ui main'>
            <h2>Update Contact </h2>
            <form className='ui form' onSubmit={this.update}>
                <div className='field'>
                    <label>Name</label>
                    <input 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    // value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input 
                    type='text' 
                    name='email' 
                    placeholder='Email'
                    // value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})} 
                    />
                </div>
                <button className='ui button primary'>Update Contact</button>
            </form>    
        </div>
  )}
}

export default EditContact
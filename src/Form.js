import React from 'react';

export default class Form extends React.Component{
    state={
        firstName: '',
        lastName: '',
        username:'',
        email:'',
        password:''
    };
   
    change = e => {
        this.props.onChange({ [e.target.name]: e.target.vale });
        this.setState({
        [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
       // this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            username:'',
            email:'',
            password:''
        });
    }

    render(){
        return (
    <form>
    <input 
    name="firstName"
    placeholder="First name" 
    value = {this.state.firstName} 
    onChange = {e => this.change(e)} />
    <br />
    <input 
    name="lastName"
    placeholder="last name" 
    onChange = {e => this.change(e)}  
    value = {this.state.lastName} />

    <br />
    <input
    name="username"
    placeholder="Username" 
    onChange = {e => this.change(e) } 
    value = {this.state.username} />

    <br />
    <input 
    name = "email"
    placeholder="EmailID" 
    onChange = {e => this.change(e) } 
    value = {this.state.email} />
    
    <br />

   <input 
    name = "password"
    type = "password"
    placeholder="password" 
    onChange = {e => this.change(e) } 
    value = {this.state.password} />   
    
    <br />
    
    <button onClick = { e => {this.onSubmit(e)}}>Submit</button>
    </form>
        );
    }
}
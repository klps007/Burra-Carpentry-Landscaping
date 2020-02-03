

import React from "react";
import "react-widgets/dist/css/react-widgets.css";
import axios from 'axios'

class LoginForm extends React.Component {

  // Using a class based component here because we're accessing DOM refs

handleSubmit = async (e) => {
try{ 
    e.preventDefault();
	await axios.post("http://localhost:7070/admin/login", this.state)
    let username = this.label.username.value;
    let password = this.label.password.value;
    this.props.onSubmit(username, password);
	} catch(err) {
			console.log(err)
	}
  }
handleInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  render() {
    return (
      
 <form onSubmit={this.handleSubmit}>
        <h3>User Name</h3>
        <div>
          <label htmlFor="username">User Name</label>
          <input name="username" type="text" onChange={this.handleInputChange} />
        </div>
        <h3>Password</h3>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" onChange={this.handleInputChange} />
        </div>
        <button type="submit">Login</button>
      </form>
	)}}
 export default LoginForm


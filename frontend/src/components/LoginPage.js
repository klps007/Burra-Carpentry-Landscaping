import React from "react";
import "react-widgets/dist/css/react-widgets.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class LoginForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs

  handleSubmit = async e => {
    console.log("testing");
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:7070/admin/login",
        this.state
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      this.props.history.push("/admin");
    } catch (err) {
      console.log(err.message);
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      //   <div>
      //     <label htmlFor="username">User Name</label>
      //     <input
      //       name="username"
      //       type="text"
      //       onChange={this.handleInputChange}
      //     />
      //   </div>
      //   <div>
      //     <label htmlFor="password">Password</label>
      //     <input
      //       name="password"
      //       type="password"
      //       onChange={this.handleInputChange}
      //     />
      //   </div>
      //   <button type="submit">Login</button>
      // </form>

      <Form
        onSubmit={this.handleSubmit}
        className="container"
        style={{ width: "50%" }}
      >
        <Form.Group controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter user name"
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }
}
export default LoginForm;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export class NavbarComponent extends Component {
  render() {
    return (
      <div>
        {/* <div className="navbar-links">
          <Link to="/">Burra Carpentry Landscaping</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/getquote">Get Quote</Link>
          <h5>-----------------------------------------</h5>
        </div> */}

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Burra Carpentry Landscaping</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <Nav.Link href="/getquote">Get Quote</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarComponent;

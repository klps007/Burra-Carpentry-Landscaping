import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="navbar-links">
          <Link to="/">Burra Carpentry Landscaping</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/getquote">Get Quote</Link>
          <h5>-----------------------------------------</h5>
        </div>
      </div>
    );
  }
}

export default Navbar;

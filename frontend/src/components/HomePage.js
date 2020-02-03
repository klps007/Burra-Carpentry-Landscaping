import React, { Component } from "react";
import "../styles/HomePage.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import CarouselComponent from "./Carousel";
export class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron-class">
          <h1>Burra Carpentry Landscaping</h1>
          <p>We're here for all of your carpentry and landscaping needs.</p>
          <CarouselComponent />
          <Link to="/getquote" className="homebutton">
            <Button variant="primary">Get a quote</Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default HomePage;

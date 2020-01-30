import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";

export class CarouselComponent extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={home1} alt="First slide" />
            <Carousel.Caption>
              <h3>We can build anything that your backyard needs.</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={home2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={home3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;

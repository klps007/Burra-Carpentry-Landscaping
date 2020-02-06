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
              <p>Just use the 'get quote' form to contact us.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={home2} alt="Third slide" />

            <Carousel.Caption>
              <h3>We do anything from tree removal to fencing.</h3>
              <p>Contact us today to find out how we can help you.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={home3} alt="Third slide" />

            <Carousel.Caption>
              <h3>We also offer in home carpentry services</h3>
              <p>Feel free to contact us to get a quote.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;

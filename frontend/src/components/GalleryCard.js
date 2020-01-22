import React, { Component } from "react";
import "../styles/GalleryPage.css";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";

export class GalleryCard extends Component {
  render() {
    return (
      <div>
        <img className="gallery-images" src={gallery1} alt="work sample" />
        <p>Description of the image</p>
        <img className="gallery-images" src={gallery2} alt="work sample" />
        <p>Description of the image</p>
        <img className="gallery-images" src={gallery3} alt="work sample" />
        <p>Description of the image</p>
        <img className="gallery-images" src={gallery4} alt="work sample" />
        <p>Description of the image</p>
      </div>
    );
  }
}

export default GalleryCard;

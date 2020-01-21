import React, { Component } from "react";
import gallery1 from "../images/gallery1.jpg";

export class GalleryPage extends Component {
  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <img id="galleryimage" src={gallery1} alt="work sample" />
      </div>
    );
  }
}

export default GalleryPage;

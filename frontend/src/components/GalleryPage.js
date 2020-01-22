import React, { Component } from "react";
import GalleryCard from "./GalleryCard";

export class GalleryPage extends Component {
  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <GalleryCard />
      </div>
    );
  }
}

export default GalleryPage;

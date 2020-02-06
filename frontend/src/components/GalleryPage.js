import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import axios from "axios";

export class GalleryPage extends Component {
  state = {
    gallery: []
  };

  async componentDidMount() {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/gallery"
    );
    console.log(response.data);

    this.setState({
      gallery: response.data
    });
  }
  render() {
    if (this.state.gallery.length > 0) {
      return (
        <div>
          {this.state.gallery.map(image => {
            return <GalleryCard data={image} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GalleryPage;

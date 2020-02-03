import React, { Component } from "react";
import "../styles/GalleryPage.css";
import axios from "axios";
import Card from "react-bootstrap/Card";

export class GalleryCard extends Component {
  render() {
    console.log(this.props);
    const { fileLink } = this.props.data;

    return (
      <div className="gallery-body">
        <Card className="a-gallery-card" style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Img variant="top" src={fileLink} />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GalleryCard;

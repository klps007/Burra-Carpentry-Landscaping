import React, { Component } from "react";
import "../styles/GalleryPage.css";
// import gallery1 from '../images/gallery1.jpg';
// import gallery2 from '../images/gallery2.jpg';
// import gallery3 from '../images/gallery3.jpg';
// import gallery4 from '../images/gallery4.jpg';
import axios from "axios";

export class GalleryCard extends Component {
  // 1. make a request to the backend to get all the images stored in the gallery collection
  state = {};

  async componentDidMount() {
    const response = await axios.get("http://localhost:7070/gallery");
    this.setState({
      images: response.data
    });
  }

  render() {
    const { images } = this.state;
    if (images) {
      return (
        <div>
          {images.map((image, index) => {
            return (
              <div key={index}>
                <img
                  className="gallery-images"
                  src={image.fileLink}
                  alt="house"
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <h1>
          Loading images{" "}
          <span role="img" aria-label="loading screen">
            ✋
          </span>
        </h1>
      );
    }
  }
}

export default GalleryCard;

// import React, { Component } from "react";
// import "../styles/GalleryPage.css";
// import gallery1 from "../images/gallery1.jpg";
// import gallery2 from "../images/gallery2.jpg";
// import gallery3 from "../images/gallery3.jpg";
// import gallery4 from "../images/gallery4.jpg";
// import Card from "react-bootstrap/Card";

// export class GalleryCard extends Component {
//   render() {
//     return (
//       <div>

//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={gallery4} />
//           <Card.Body>
//             <Card.Title>Before Picture</Card.Title>
//             <Card.Text>Description of the image</Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//     );
//   }
// }

// export default GalleryCard;

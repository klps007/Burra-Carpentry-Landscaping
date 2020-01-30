import React, { Component } from 'react';
//import '../styles/ReviewsPage.css';
// import gallery1 from '../images/gallery1.jpg';
// import gallery2 from '../images/gallery2.jpg';
// import gallery3 from '../images/gallery3.jpg';
// import gallery4 from '../images/gallery4.jpg';
import axios from 'axios';

export class ReviewCard extends Component {
  // 1. make a request to the backend to get all the images stored in the gallery collection
  state = {};

  async componentDidMount() {
    const response = await axios.get('http://localhost:7070/reviews');
    this.setState({
      reviews: response.data
    });
  }

  render() {
    const { reviews } = this.state;
    if (reviews) {
      return (
        <div>
          {reviews.map((review, index) => {
            return (
              <div key={index}>
                <div review />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <h1>
          Loading reviews{' '}
          <span role='img' aria-label='loading screen'>
            ✋
          </span>
        </h1>
      );
    }
  }
}

export default ReviewCard;

import React, { Component } from "react";

import axios from "axios";

export class ReviewCard extends Component {
  // 1. make a request to the backend to get all the images stored in the gallery collection
  state = { reviews: [] };

  async componentDidMount() {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/reviews"
    );
    this.setState({
      reviews: response.data
    });
  }

  render() {
    const { reviews } = this.state;
    if (reviews.length > 0) {
      return (
        <div>
          {console.log(reviews)}
          {reviews.map((review, index) => {
            return (
              <div key={index}>
                <div>
                  {" "}
                  <p>{review.name}</p>
                  <p>{review.suburb}</p>
                  <p>{review.review}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <h1>
          Loading reviews{" "}
          <span role="img" aria-label="loading screen">
            ✋
          </span>
        </h1>
      );
    }
  }
}

export default ReviewCard;

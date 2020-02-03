import React, { Component } from "react";
// import ReviewCard from "./ReviewCard";
import ReviewCard2 from "./ReviewCard2";
import axios from "axios";

export class ReviewPage extends Component {
  state = {
    reviews: []
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:7070/reviews");
    this.setState({
      reviews: response.data
    });
  }

  render() {
    if (this.state.reviews.length > 0) {
      return (
        <div>
          {this.state.reviews.map(review => {
            return <ReviewCard2 data={review} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ReviewPage;

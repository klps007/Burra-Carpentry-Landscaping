import React, { Component } from "react";
import ReviewCard from "./ReviewCard";

export class ReviewPage extends Component {
  render() {
    return (
      <div>
        <h1>This is where the Reviews Page will be.</h1>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    );
  }
}

export default ReviewPage;

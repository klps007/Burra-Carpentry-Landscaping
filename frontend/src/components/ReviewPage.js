import React, { Component } from 'react';
import ReviewCard from './ReviewCard';

export class ReviewPage extends Component {
  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <ReviewCard />
      </div>
    );
  }
}

export default ReviewPage;

import React, { Component } from "react";
import "../styles/ReviewCard2.css";
import Card from "react-bootstrap/Card";

export class ReviewCard extends Component {
  render() {
    console.log(this.props);
    const { name, suburb, review } = this.props.data;

    return (
      <div className="review-body">
        <Card className="a-review-card" style={{ width: "50rem" }}>
          <Card.Body>
            <Card.Text>
              <h5>{review}</h5>
            </Card.Text>
            <Card.Title>
              <h6>{name}</h6>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <h6>{suburb}</h6>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ReviewCard;

import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export class SubmitMessage extends Component {
  render() {
    return (
      <div>
        <Card className="a-gallery-card" style={{ width: "50rem" }}>
          <Card.Body>
            <Alert variant="primary">
              You're form was sent off. We'll be in touch soon.
            </Alert>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SubmitMessage;

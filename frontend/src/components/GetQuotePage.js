import React, { Component } from "react";
import GetQuoteForm from "./GetQuoteForm.js";

export class GetQuotePage extends Component {
  handleSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Get quote page</h1>
        <GetQuoteForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default GetQuotePage;

import React, { Component } from "react";
import GetQuoteForm from "./GetQuoteForm.js";
import BootstrapForm from "./BootstrapForm";
import SubmitMessage from "./SubmitMessage";
import axios from "axios";

export class GetQuotePage extends Component {
  state = { submitMessage: false };

  handleSubmit = async data => {
    const response = await axios.post("http://localhost:7070/getquote", data);
    console.log(response);
    this.setState({
      submitMessage: true
    });
  };

  render() {
    if (this.state.submitMessage) {
      return <SubmitMessage />;
    } else {
      return (
        <div className="container">
          <h3>Request a quote</h3>
          <br></br>
          <BootstrapForm onSubmit={this.handleSubmit} />
        </div>
      );
    }
  }
}

export default GetQuotePage;

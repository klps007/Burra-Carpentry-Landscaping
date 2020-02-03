import React, { Component } from 'react';
import GetQuoteForm from './GetQuoteForm.js';
import BootstrapForm from './BootstrapForm';

export class GetQuotePage extends Component {
  handleSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div className='container'>
        <h3>Request a quote</h3>
        <br></br>
        {/* <GetQuoteForm onSubmit={this.handleSubmit} /> */}
        <BootstrapForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default GetQuotePage;

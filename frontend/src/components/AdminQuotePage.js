import React, { Component } from "react";
//import "../styles/ReviewCard2.css";
import axios from "axios";
//import ReviewCard2 from "./ReviewCard2"


export class AdminQuotesPage extends Component {
	state = {
	  quotes: []
	};
  
	async componentDidMount() {
		console.log("bye")
	  const response = await axios.get("http://localhost:7070/admin/quotes");
	  console.log("hi", response.data)
	  this.setState({
		quotes: response.data
	  });
	}

  render() {
    const { quotes } = this.state;
    if (quotes.length > 0) {
      return (
        <div>
          {console.log(quotes)}
          {quotes.map((quote, index) => {
            return (
              <div key={index}>
                <div>
                  {' '}
                  <p>{quote.name}</p>
                  <p>{quote.contact}</p>
                  <p>{quote.address}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <h1>
          Loading quotes{' '}
          <span role='img' aria-label='loading screen'>
            ✋
          </span>
        </h1>
      );
    }
  }
}

export default AdminQuotesPage;

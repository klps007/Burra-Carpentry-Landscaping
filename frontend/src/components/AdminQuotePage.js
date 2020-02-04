import React, { Component } from "react";
import "../styles/ReviewCard2.css";
import axios from "axios";
import AdminQuoteCard from "./AdminQuoteCard";


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
	  if (this.state.quotes.length > 0) {
		return (
		  <div>
			{this.state.quotes.map(quote => {
			  return <AdminQuoteCard data={quote} />;
			})}
		  </div>
		);
	  } else {
		return null;
	  }
	}
}


  export default AdminQuotesPage;
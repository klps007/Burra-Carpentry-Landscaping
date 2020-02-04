import React, { Component } from "react";
import "../styles/ReviewCard2.css";
import axios from "axios";
import ReviewCard2 from "./ReviewCard2"


export class AdminReviewsPage extends Component {
	state = {
	  reviews: []
	};
  
	async componentDidMount() {
		console.log("bye")
	  const response = await axios.get("http://localhost:7070/admin/reviews");
	  console.log("hi", response.data)
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


  export default AdminReviewsPage;
  
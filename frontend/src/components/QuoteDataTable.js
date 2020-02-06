import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import ModalForm from "./Modal";

import Axios from "axios";

export default class QuoteDataTable extends Component {
  deleteQuote = async id => {
    let confirmDelete = window.confirm("Delete item forever?");
    if (confirmDelete) {
      const res = await Axios.delete(
        process.env.REACT_APP_BACKEND_URL + `/admin/quote/${id}`
      );
      console.log("Delete quote response", res);
      this.props.deleteQuote(id);
    }
  };

  render() {
    console.log(this.props.items);

    return (
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Preferred</th>
            <th>Street Address</th>
            <th>Suburb</th>
            <th>Post Code</th>
            <th>NeedFinance</th>
            <th>Commercial / Residential</th>
            <th>Planning Only /Ready Now</th>
            <th>Approx Size SQM</th>
            <th>Budget</th>
            <th>Approx Start Date</th>
            <th>Service Required</th>
            <th>Additional Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map(item => {
            return (
              <tr key={item.id}>
                <th scope="coloumn">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.preferred}</td>
                <td>{item.streetAddress}</td>
                <td>{item.suburb}</td>
                <td>{item.postcode}</td>
                <td>{item.needFinance}</td>
                <td>{item.commercialOrResidential}</td>
                <td>{item.planningOnlyOrReadyNow}</td>
                <td>{item.approxsizeSQM}</td>
                <td>{item.budget}</td>
                <td>{item.approxStartDate}</td>
                <td>
                  {item.serviceRequired.map((service, index) => {
                    return (
                      <div key={index}>
                        <p>{service}</p>
                      </div>
                    );
                  })}
                </td>
                <td>{item.additionalDetails}</td>

                <td>
                  <div style={{ width: "110px" }}>
                    <ModalForm
                      buttonLabel="Edit"
                      item={item}
                      updateState={this.props.updateState}
                    />{" "}
                    <Button
                      color="danger"
                      onClick={() => this.deleteQuote(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

//   {serviceRequired.map( (service, index) =>
// 	{ return(
// 		key={index},
// 			{service}

//   		)})}

// >

// 		 	/* {(state, filteredData) => {
// 				this.ReactTable = state.pageRows.map(quote => { return quote._original});
// 				return(
// 					<div>
// 						{filteredData()}
// 					</div>
// 				)
// 						}}

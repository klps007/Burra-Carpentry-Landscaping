import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import QuoteDataTable from "./QuoteDataTable";

import axios from "axios";
import "../styles/HomePage.css";

export default class AdminPage extends Component {
  state = {
    items: []
  };

  async indexQuote() {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "/admin/quotes"
    );
    this.setState({ items: response.data });
  }

  updateQuote = item => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id);
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1)
    ];
    this.setState({ items: newArray });
  };

  deleteQuote = id => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {
    this.indexQuote();
  }

  render() {
    return (
      <Container className="reactstraps">
        <Row>
          <Col>
            <h1 style={{ margin: "5px 0" }}>Quote Requests</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <QuoteDataTable
              items={this.state.items}
              updateQuote={this.updateQuote}
              deleteQuote={this.deleteQuote}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

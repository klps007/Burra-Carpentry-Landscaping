import React from "react";
import ReactDOM from "react-dom";

class MyTestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", age: "" };
  }
  myChangeHandlerUserName = event => {
    this.setState({ username: event.target.value });
  };
  myChangeHandlerAge = event => {
    this.setState({ age: event.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <h1>
            Hello {this.state.username} {this.state.age}
          </h1>
          <p>Enter your name:</p>
          <input type="text" onChange={this.myChangeHandlerUserName} />

          <p>Enter your age:</p>
          <input type="text" onChange={this.myChangeHandlerAge} />
        </form>
      </div>
    );
  }
}

export default MyTestForm;

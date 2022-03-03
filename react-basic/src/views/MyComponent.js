import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleClicked = (event) => {
    event.preventDefault();
    alert("click me ", this.state);
  };

  render() {
    console.log("click >>> ", this.state);
    return (
      <>
        <form>
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleFirstName(event)}
          />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleLastName(event)}
          />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleClicked(event)}
          />
        </form>
        <ChildComponent name="one" />
        <ChildComponent name="two" />
        <ChildComponent name="three" />
      </>
    );
  }
}

export default MyComponent;

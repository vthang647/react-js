import React from "react";

class ChildComponent extends React.Component {
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
    return <div>child component {this.props.name}</div>;
  }
}

export default ChildComponent;

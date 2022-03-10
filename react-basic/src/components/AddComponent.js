import React from "react";

class AddComponent extends React.Component {
  state = {
    nameJob: "developer",
    salary: "3000000",
  };

  handlenameJob = (event) => {
    this.setState({
      nameJob: event.target.value,
    });
  };

  handlesalaryjob = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleClicked = (event) => {
    event.preventDefault();
    this.props.addArrJobs({
      id: Math.floor(Math.random() * 1001),
      title: this.state.nameJob,
      salary: this.state.salary,
    });
  };

  render() {
    return (
      <div>
        <form>
          name job
          <input
            type="text"
            value={this.state.nameJob}
            onChange={(event) => this.handlenameJob(event)}
          />
          salary
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handlesalaryjob(event)}
          />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleClicked(event)}
          />
        </form>
      </div>
    );
  }
}

export default AddComponent;

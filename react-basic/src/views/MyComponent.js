import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "../components/AddComponent";

class MyComponent extends React.Component {
  state = {
    nameJob: "developer",
    salary: "3000000",
    arrJobs: [
      {
        id: "abcjob1",
        title: "developer",
        salary: "3000000",
      },
      {
        id: "abcjob2",
        title: "teacher",
        salary: "7000000",
      },
      {
        id: "abcjob3",
        title: "doctor",
        salary: "2200000",
      },
    ],
  };

  addArrJobs = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    return (
      <>
        <AddComponent addArrJobs={this.addArrJobs} />
        <ChildComponent
          name={this.state.nameJob}
          salary={this.state.salary}
          arrJob={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;

import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnClickDelete = (job) => {
    this.props.deleteAJob(job);
  };

  render() {
    let { arrJob } = this.props;
    let { showJob } = this.state;
    let check = showJob === true ? "showJob = true" : "showJob = false";
    return (
      <>
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="job-lists">
              {showJob &&
                arrJob.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => this.handleOnClickDelete(item)}
                    >
                      {item.title} - {item.salary}
                    </div>
                  );
                })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   let { arrJob } = props;
//   return (
//     <>
//       <div className="job-lists">
//         {arrJob.map((item, index) => {
//           return (
//             <div key={item.id}>
//               hello - {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default ChildComponent;

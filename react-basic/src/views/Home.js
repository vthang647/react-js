import React from "react";
import { withRouter } from "react-router";
import Color from "./HOC/Color";
import logo from "../assets/images/hello.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  render() {
    console.log("check router >> : ", this.props);
    return (
      <>
        <div>
          <span>this is my home component</span>
        </div>
        <div>
          <img src={logo} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

// export default connect(mapStateToProps)(withRouter(Home));
export default Color(Home);

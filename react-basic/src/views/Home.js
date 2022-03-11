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

  handleDeleteUser = (item) => {
    console.log("check user delete >>> ", item);
    this.props.deleteUserRedux(item);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    console.log("check router >> : ", this.props);
    let listUser = this.props.dataRedux;
    return (
      <>
        <div>
          <span>this is my home component</span>
        </div>
        <div>
          <img src={logo} />
        </div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
// export default Color(Home);

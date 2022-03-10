import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./ListUsers.scss";

class ListUsers extends React.Component {
  state = {
    listUsers: [],
  };

  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log("check res: ", res.data.data);
    // });
    let res = await axios.get("https://reqres.in/api/users?page=2");
    console.log("check res: ", res.data.data);
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  handleViewDetailUser = (user) => {
    this.props.history.push(`/users/${user.id}`);
  };

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">
          <span>Fetch all list user</span>
        </div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  <div>first_name: {item.first_name}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUsers);

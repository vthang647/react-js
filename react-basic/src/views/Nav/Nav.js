import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="">
          Todos
        </NavLink>
        <NavLink to="/about" activeClassName="">
          About
        </NavLink>
        <NavLink to="/users" activeClassName="">
          Users
        </NavLink>

        {/* <Link className="active" to="/">
          Home
        </Link>
        <Link to="/todo">todo</Link>
        <Link to="/about">about</Link> */}
        {/* <a className="active" href="/">
          Home
        </a>
        <a href="/todo">Todos</a>
        <a href="/about">About</a> */}
      </div>
    );
  }
}
export default Nav;

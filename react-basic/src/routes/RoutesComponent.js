import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../views/App";
import ListTodo from "../views/Todos/ListTodo";
import MyComponent from "../views/MyComponent";
export default class routesComponent extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="todo" element={<ListTodo />} />
        <Route path="about" element={<MyComponent />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    );
  }
}

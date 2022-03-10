import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./MyComponent";
import ListTodo from "./Todos/ListTodo";
import ListUsers from "./Users/ListUsers";
import DetailUsers from "./Users/DetailUsers";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/users" exact>
              <ListUsers />
            </Route>
            <Route path="/users/:id">
              <DetailUsers />
            </Route>
          </Switch>
          {/* <ListTodo /> */}
        </header>
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover */}
        {/* /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

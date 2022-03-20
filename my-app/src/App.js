import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todos";
import Covid from "./views/Covid";
function App() {
  let [name, setName] = useState("Hello");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "watching movie" },
    { id: "todo2", title: "playing game" },
    { id: "todo3", title: "singing" },
  ]);

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  const handleEvenClicked = () => {
    let todo = { id: Math.floor(Math.random() * 10001), title: name };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (item) => {
    setTodos(todos.filter((it) => it.id !== item.id));
  };

  useEffect(() => {
    console.log("run useEffect");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Covid />

        {/* <span>name : {name}</span>

        <input
          type="text"
          value={name}
          onChange={(event) => handleOnChange(event)}
        />
        <Todo todos={todos} deleteTodo={deleteTodo} />
        <button type="button" onClick={() => handleEvenClicked()}>
          add add
        </button> */}
      </header>
    </div>
  );
}

export default App;

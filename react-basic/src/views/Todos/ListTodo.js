import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {
        id: "todo1",
        title: "doing homeworking",
      },
      {
        id: "todo2",
        title: "making video",
      },
      {
        id: "todo3",
        title: "playing game",
      },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("add successfully!");
  };

  hanleDelete = (todo) => {
    let currentTodo = this.state.listTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id);
    this.setState({ listTodos: currentTodo });
    toast.success("delete successfully!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && todo.id === editTodo.id) {
      let listTodoCopy = [...listTodos];
      let objectIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objectIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodoCopy,
        editTodo: {},
      });
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handlechangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log("check empty object: ", isEmptyObj);
    return (
      <>
        <div>
          <p>Todo app with me &amp; and hoi dan it</p>
        </div>
        <div className="List-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-Child" key={item.id}>
                    {isEmptyObj === false ? (
                      <>
                        {item.id === editTodo.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handlechangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    ) : (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    )}

                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && item.id === editTodo.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.hanleDelete(item)}
                    >
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;

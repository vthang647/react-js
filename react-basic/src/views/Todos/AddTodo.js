import React from "react";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  addTodo = () => {
    if (!this.state.title) {
      alert("missing title");
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };

    this.props.addNewTodo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleChangeTitle(event)}
        />
        <button type="button" className="add" onClick={() => this.addTodo()}>
          add
        </button>
      </div>
    );
  }
}

export default AddTodo;

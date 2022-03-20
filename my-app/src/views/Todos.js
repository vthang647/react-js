const Todo = (props) => {
  const todos = props.todos;
  const handleDelete = (item) => {
    props.deleteTodo(item);
  };
  return (
    <div className="Todos-Container">
      {todos.map((item, index) => {
        return (
          <li className="todo-child" key={item.id}>
            {item.title} - <span onClick={() => handleDelete(item)}>X</span>
          </li>
        );
      })}
    </div>
  );
};
export default Todo;

import react from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <div className="todo-comtainer">
      <ul className="todo-list">
        {todos.map(todo => <Todo text={todo.text} />)}
      </ul>
    </div>
  );
};

export default TodoList;

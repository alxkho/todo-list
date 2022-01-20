import Todo from "../Todo/Todo";

const TodoList = (props) => {
  const { todos, setTodos, filteredTodos } = props;
  return (
    <div className="todo-comtainer">
      <ul className="todo-list">
        {filteredTodos.map(todo => <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>)}
      </ul>
    </div>
  );
};

export default TodoList;

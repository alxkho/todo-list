import react from "react";

const Todo = (props) => {
    const {todo, todos, setTodos} = props;

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }));
    }


    return (
        <div className="todo">
                        {/* <input type='checkbox' className="check" /> */}

            <button className="complete-btn" onClick={completeHandler}><i className={todo.completed ? "fas fa-check" : "fas fa-check"}/></button>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todo.text}
            </li>
            <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash"/></button>
        </div>
    );
}

export default Todo;
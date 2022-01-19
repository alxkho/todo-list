import react from "react";
import './Todo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
    const { todo, todos, setTodos } = props;

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = (e) => {
        e.preventDefault();
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
        <div className={`todo ${todo.completed ? 'completed' : ""}`}>
            {/* <input type='checkbox' className="check" /> */}
            {/* <button className={`complete-btn ${todo.completed ? 'checked' : ""} `} onClick={completeHandler}> */}
            <button className="complete-btn" onClick={completeHandler}>
                <FontAwesomeIcon icon={faCheck} />                </button>
            {/* <li className={`todo-item ${todo.completed ? "completed" : ""}`}> */}
            <li className='todo-item'>
                {todo.text}
            </li>
            <button className="trash-btn" onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
}

export default Todo;
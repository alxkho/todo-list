import './Todo.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react/cjs/react.development';

const Todo = (props) => {
    const { todo, todos, setTodos } = props;

    const [canEdit, setCanEdit] = useState(false)

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

    const editHandler = (e) => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    text: e.target.value
                }
            }
            return item;
        }));
    }


    return (
        <div className={`todo ${todo.completed ? 'completed' : ""}`}>
            <button className="complete-btn" onClick={completeHandler}>
                <FontAwesomeIcon icon={faCheck} />                </button>
            <li className='todo-item' onDoubleClick={() => setCanEdit(true)}>
                {canEdit ?
                    <input defaultValue={todo.text} onChange={editHandler} />
                    : todo.text}
            </li>
            <button className="trash-btn" onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    );
}

export default Todo;
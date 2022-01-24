import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './Todo.css'
import { Draggable } from "react-beautiful-dnd";


const Todo = (props) => {
    const { todo, todos, setTodos, index } = props;

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
        setCanEdit(false)
    }

    const keyDownHandler = (e) => {
        if (e.key === 'Escape') {
            setCanEdit(false);
        } else if (e.key === 'Enter') {
            editHandler(e)
        }
    }


    return (
        <Draggable draggableId={`${todo.id}`} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className={`todo ${todo.completed ? 'completed' : ""}`}>
                        <button className="complete-btn" onClick={completeHandler}>
                            <FontAwesomeIcon icon={faCheck} />                </button>
                        <li className='todo-item' title={todo.text} onDoubleClick={() => setCanEdit(true)}>
                            {canEdit ?
                                <input className="edit-input" autoFocus defaultValue={todo.text} onBlur={editHandler} onKeyDown={keyDownHandler} />
                                : todo.text}
                        </li>
                        <button className="trash-btn" onClick={deleteHandler}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>)}
        </Draggable>

    );
}

export default Todo;
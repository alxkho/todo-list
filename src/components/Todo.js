import react from "react";

const Todo = (props) => {
    const {text} = props
    return (
        <div className="todo">
            <li className="todo-item">
                {text}
            </li>
            <button className="complete-btn"><i className="fas fa-check"/></button>
            <button className="trash-btn"><i className="fas fa-trash"/></button>
        </div>
    );
}

export default Todo;
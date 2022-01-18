import react from "react";
import './Footer.css'

const Footer = (props) => {
    const {todos, setStatus} = props;

    const setStatusHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    return (
        <footer className="footer">
            <span>{todos.filter(todo => todo.completed === false).length} items left</span>
            <span className="todo-filter">
                <button className="btn" onClick={setStatusHandler} value='all'>All</button>
                <button className="btn" onClick={setStatusHandler} value='completed'>Completed</button>
                <button className="btn" onClick={setStatusHandler} value='uncompleted'>Uncompleted</button>
            </span>
            <button className="btn">Clear completed</button>
        </footer>
    )
};

export default Footer;
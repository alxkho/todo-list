import './Footer.css'

const Footer = (props) => {
    const {todos, setStatus, setTodos} = props;

    const setStatusHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setStatus(e.target.value);
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => todo.completed === false))
    }

    return (
        <footer className="footer">
            <span className="counter">{todos.filter(todo => todo.completed === false).length} items left</span>
            <span className="todo-filter">
                <button className="btn" onClick={setStatusHandler} value='all'>All</button>
                <button className="btn" onClick={setStatusHandler} value='completed'>Completed</button>
                <button className="btn" onClick={setStatusHandler} value='uncompleted'>Uncompleted</button>
            </span>
            <button className="btn" onClick={clearCompleted}>Clear completed</button>
        </footer>
    )
};

export default Footer;
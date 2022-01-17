import react from "react";

const Form = (props) => {
    const {inputText, setInputText, todos, setTodos, setStatus} = props;
    const inputTextHandler = (e) => {    
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000} //исправить - формировать уникальные айди 
        ]);
        setInputText("");
    }

    const setStatusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type='text' className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square" />
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={setStatusHandler}>
                    <option value="all">All</option> 
                    <option value="completed">Completed</option> 
                    <option value="uncompleted">Uncompleted</option> 
                </select>
            </div>
        </form>
    );
}

export default Form;
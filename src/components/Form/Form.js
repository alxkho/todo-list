import react from "react";
import './Form.css'

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

    // const setStatusHandler = (e) => {
    //     console.log(e.target.value);
    //     setStatus(e.target.value);
    // }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type='text' className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square" />
            </button>
        </form>
    );
}

export default Form;
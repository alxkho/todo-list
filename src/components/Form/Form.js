import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Form.css'


const Form = (props) => {
    const { inputText, setInputText, todos, setTodos, setStatus } = props;
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 } //исправить - формировать уникальные айди 
        ]);
        setInputText("");
    }

    return (
        <form>
            <input placeholder="What needs to be done?" value={inputText} onChange={inputTextHandler} type='text' className="todo-input" />
            <button onClick={submitTodoHandler} className="submit-btn" type="submit">
                <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
        </form>
    );
}

export default Form;
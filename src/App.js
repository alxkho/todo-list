import react, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log(inputText);
    console.log(todos);
  }, [inputText])

  return (
    <>
      <header className='header'>
        <h1>todos</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList inputText={inputText} todos={todos}/>
    </>
  );
}

export default App;

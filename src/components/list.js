import React, { useState } from 'react';
import Navbar1 from "./navbar";
import './todolist.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [idCounter, setIdCounter] = useState(1); // Initialize a counter for generating unique ids

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const searchList = (event) => {
    setSearch(event.target.value);
  };

  const addList = () => {
    if (input.trim() !== '') {
      const newTodo = {
        id: idCounter, // Assign a unique id to the new todo item
        text: input
      };
      setTodos([...todos, newTodo]);
      setInput('');
      setIdCounter(idCounter + 1); // Increment the counter
    }
  };

  const deleteList = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filter = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list">
      <Navbar1 />
      <h1>Todo List...</h1>
      <div className='add'>
        <input type="text" placeholder="Add Todo" value={input} onChange={inputChange} />
        <button onClick={addList}>Add</button>
      </div>

      <div>
        <input type="text" placeholder="Search" value={search} onChange={searchList} />
      </div>

      <ul className='mylists'>
        {filter.map(todo => (
          <li key={todo.id}> {/* Add a unique key to each todo item */}
            <span>{todo.text}</span>
            <span className="delete" onClick={() => deleteList(todo.id)}>+</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

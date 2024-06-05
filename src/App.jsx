import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='w-[20vw] mt-[5vh] m-auto border-2 rounded-lg p-[20px]'>
      <h1 className='text-center text-[35px] my-[10px]'>Todo - List</h1>
      <span className='flex items-center justify-between gap-[20px]'>
        <input
          className='outline-none border-2 rounded-md py-[5px] px-[25px]'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button className='text-[white] bg-green-600 py-[6px] px-[25px] border-solid rounded-lg 
                          hover:bg-green-700' 
                onClick={handleAddTodo}> Add
        </button>
      </span>
      <ul className='my-[2vh] w-full'>
        {todos.map((todo, index) => (
          <li className='flex items-center justify-between' key={index}>
            <h1 className='text-[20px] text-[#333] my-[5px] font-mono w-full border-2 px-[20px] py-[2px] rounded-md'>{todo}</h1>
            <button className='text-[white] bg-red-600 py-[6px] px-[12px] border-solid rounded-lg 
                              ml-[20px] hover:bg-red-700'
             onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
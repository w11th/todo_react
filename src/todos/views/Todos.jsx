import React from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';

import './style.css';

const Todos =  () => {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todos;

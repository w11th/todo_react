import React from 'react';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';

export default () => {
  return (
    <div className="todos">
      <AddTodo />
      <TodoList />
    </div>
  );
}

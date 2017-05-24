import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import TodoItem from './TodoItem.jsx';
import {selectVisibleTodos} from '../selector.js';

const TodoList = ({todos}) => {
  return (
    <ul className="todo-list">
      {
        todos.map((item)=> (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
          />
        ))
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state)
  }
};

export default connect(mapStateToProps)(TodoList);

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group';

import TodoItem from './TodoItem.jsx';
import {selectVisibleTodos} from '../selector.js';
import './todoItem.css';

const TodoList = ({todos}) => {
  return (
    <ul className="todo-list">
      <TransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeaveTimeout={200}>
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
      </TransitionGroup>
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

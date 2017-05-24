import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleTodo, removeTodo} from '../actions.js';

const TodoItem = ({onToggleTodo, onRemoveTodo, key, completed, text}) => (
  <li className='todo-item'
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    <input className="toggle" type="checkbox" checked={completed ? "checked" : ""} readOnly onClick={onToggleTodo} />
    <label className="text">{text}</label>
    <button className="remove" onClick={onRemoveTodo}>x</button>
  </li>
);

TodoItem.propTypes = {
  onToggleTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

/* const mapDispatchToProps = {
 *   onToggleTodo: toggleTodo,
 *   onRemoveTodo: removeTodo
 * };
 * */

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    onToggleTodo: () => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: () => {
      dispatch(removeTodo(id));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodoItem);

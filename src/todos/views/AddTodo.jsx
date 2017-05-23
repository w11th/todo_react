import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
  constructor(props, context) {
    super(props, context);

    this.refInput = this.refInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    );
  }

  refInput(node) {
    this.input = node;
  }

  onInputChange(ev) {
    this.setState({
      value: ev.target.value
    });
  }

  onSubmit(ev) {
    ev.preventDefault();

    const value = this.state.value;
    if (!value.trim()) {
      return;
    }
    this.props.onAdd(value);
    this.setState({
      value: ""
    });
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);

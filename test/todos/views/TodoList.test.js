import React from 'react';
import {mount} from 'enzyme';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {view as TodoList, actions, reducer as todoReducer} from '../../../src/todos';
import {reducer as filterReducer} from '../../../src/filter';

describe('TodoList Component', () => {
  const store = createStore(
    combineReducers({
      todos: todoReducer,
      filter: filterReducer
    }), {}
  );

  it('should contains todo which is added', () => {
    const subject = (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const wrapper = mount(subject);

    store.dispatch(actions.addTodo('write more test'));
    expect(wrapper.find('.text').text()).toEqual('write more test');
  });
});

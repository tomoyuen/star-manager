import * as React from 'react';
import { Provider, observer } from 'mobx-react';

import { TodoStore } from '../stores/todo.store';

import { TodoAdd } from './todo.add';
import { TodoList } from './todo.list';
import { TodoStatus } from './todo.status';

export class App extends React.Component {
  private todoStore: TodoStore = new TodoStore();

  render() {
    return (
      <Provider todoStore={this.todoStore}>
        <>
          <TodoAdd />
          <TodoList />
          <hr/>
          <TodoStatus />
        </>
      </Provider>
    );
  }
}

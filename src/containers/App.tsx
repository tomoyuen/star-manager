import * as React from 'react';
import { Provider } from 'mobx-react';

import { TodoStore } from '../stores/todo.store';

import { TodoAdd } from './todo.add';
import { TodoList } from './todo.list';

export class App extends React.Component {
  private todoStore: TodoStore = new TodoStore();

  render() {
    return (
      <Provider todoStore={this.todoStore}>
        <div>
          <TodoAdd />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

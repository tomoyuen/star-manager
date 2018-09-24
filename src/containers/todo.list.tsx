import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { TodoStore, Todo } from '../stores/todo.store';

import { TodoListItem } from '../components/todo.list.item';

interface TodoListProps {
  todoStore?: TodoStore;
}

@inject('todoStore')
@observer
class TodoList extends React.Component<TodoListProps> {
  achieveItem(todo: Todo) {
    this.props.todoStore!.completeTodo(todo);
  }
  getListItems() {
    return this.props.todoStore!.
      todoList.map((todo: Todo, idx: number) => (
      <TodoListItem
        key={idx}
        todo={todo}
        onClick={() => this.achieveItem(todo)}
      />));
  }

  render() {
    return (
      <ol data-testid="todo-list">{this.getListItems()}</ol>
    );
  }
}

export { TodoList };

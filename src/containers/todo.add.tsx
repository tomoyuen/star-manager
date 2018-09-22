import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

import { TodoStore } from '../stores/todo.store';

interface TodoAddProps {
  todoStore?: TodoStore;
}

@inject('todoStore')
@observer
class TodoAdd extends React.Component<TodoAddProps> {
  @observable private task: string = '';

  handleTaskChange = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value;
  }

  handleAddTodo = () => {
    this.props.todoStore!.addTodo(this.task);
    this.task = '';
  }

  render() {
    return (
      <div>
        <label htmlFor="todo-add">New Task</label>
        <input type="text" value={this.task} id="todo-add" onChange={this.handleTaskChange} />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    );
  }
}

export { TodoAdd };

import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { TodoStore } from '../stores/todo.store';

interface TodoStatusProps {
  todoStore?: TodoStore;
}

export const TodoStatus = inject('todoStore')(
  observer(({ todoStore }: TodoStatusProps) => (
    <small>Already achieved amount: {todoStore!.completedTasks || 0}</small>
  )),
);

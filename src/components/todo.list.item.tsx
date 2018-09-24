import * as React from 'react';

import { Todo } from '../stores/todo.store';
import { observer } from 'mobx-react';

interface TodoListItemProps {
  todo: Todo;
  onClick?(): void;
}

export const TodoListItem = observer(({
  todo,
  ...props
}: TodoListItemProps) => (
  <li className={todo.isComplete ? 'achieved' : ''} {...props}>{todo.task}</li>
));

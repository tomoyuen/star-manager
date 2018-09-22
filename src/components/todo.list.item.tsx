import * as React from 'react';
import { Todo } from '../stores/todo.store';

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem = ({ todo }: TodoListItemProps) => <li>{todo.task}</li>;

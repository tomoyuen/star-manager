import * as React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  getByText,
  getByLabelText,
} from 'react-testing-library';

import { App } from '../App';
import { debug } from 'util';

test('App Component renders with todo add input', () => {
  const wrap = render(<App />);

  expect(wrap.getByTestId('todo-add')).toBeTruthy();
});

test('App Component can add todo and achieve it', async () => {
  const { container, getByTestId, debug, getByText } = render(<App />);

  const todoString = 'take a reset';

  const input = getByTestId('todo-add');
  const submit = getByTestId('todo-submit');

  fireEvent.change(input, { target: { value: todoString } });
  fireEvent.click(submit);
  let changedContainer = await waitForElement(
    () => getByTestId('todo-list'),
    { container },
  );

  expect((changedContainer as HTMLElement).textContent).toBe(todoString);

  fireEvent.click(getByText(todoString));

  changedContainer = await waitForElement(
    () => getByTestId('todo-list'),
    { container },
  );

  expect((getByText(todoString) as HTMLElement).classList.contains('achieved')).toBe(true);
  expect((getByTestId('todo-status') as HTMLElement).textContent)
    .toBe('Already achieved amount: 1');
});

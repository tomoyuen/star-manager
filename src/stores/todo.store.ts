import { observable, reaction, computed, action } from 'mobx';

export interface Todo {
  task: string;
  isComplete: boolean;
}

export class TodoStore {
  @observable todoList: Todo[] = [];

  constructor() {
    reaction(
      () => this.todoList.filter(todo => !todo.isComplete),
      (incompletedTasks) => {
        if (incompletedTasks.length > 5) {
          alert("Tomo. You've got too much on your plate.");
        }
      },
    );
  }

  @computed
  get completedTasks(): number {
    return this.todoList.filter(todo => todo.isComplete).length;
  }

  @action
  addTodo(task: string) {
    this.todoList.push({ task, isComplete: false });
  }

  @action
  completeTodo(completedTodo: Todo) {
    this.todoList.find(todo => todo === completedTodo)!.isComplete = true;
  }
}

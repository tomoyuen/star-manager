import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  observable,
  action,
  computed,
  autorun,
} from 'mobx';
import { observer, PropTypes } from 'mobx-react';

// https://mobx.js.org/intro/overview.html

const appState = observable({
  timer: 0,
});

class OrderLine {
  @observable price = 0;

  @observable amount = 1;

  constructor(price) {
    this.price = price;
  }

  @computed get total() {
    return this.price * this.amount;
  }
}

class Foo {
  @observable length = 2;

  @computed get squared() {
    return this.length * this.length;
  }

  set squared(value) {
    this.length = Math.sqrt(value);
  }
}

const foo = new Foo();
console.log(foo.squared);

const person = observable({
  name: 'John',
  age: 42,
  showAge: false,

  get labelText() {
    return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
  },
  setAge(age) {
    this.age = age;
  },
  toggleAgeDisplay() {
    this.showAge = !this.showAge;
  },
}, {
  setAge: action,
  toggleAgeDisplay: action,
});

autorun(() => console.log(person.labelText));
person.toggleAgeDisplay();
person.name = 'Dave';
person.toggleAgeDisplay();
person.setAge(21);

const todos = observable([
  { title: 'Spoil tea', completed: true },
  { title: 'Make coffee', completed: false },
]);

autorun(() => {
  console.log('Remaining:', todos
    .filter(todo => !todo.completed)
    .map(todo => todo.title)
    .join(', '));
});

todos[0].completed = false;
todos.push({ title: 'Take a rest', completed: false });
todos.shift();

const cityName = observable.box('Vienna');
console.log(cityName.get());

cityName.observe((change) => {
  console.log(change.oldValue, '->', change.newValue);
});

cityName.set('Amsterdam');

@observer class TimerView extends Component {
  static propTypes = {
    state: PropTypes.observableObject,
  }

  static defaultProps = {
    state: {},
  }

  onReset() {
    const { state } = this.props;
    state.resetTimer();
  }

  render() {
    const { state } = this.props;
    const { timer } = state;
    return (
      <div>
        <h1>
          Seconds passed:
          { timer }
        </h1>
        <h2>{(new OrderLine(4, 5)).total}</h2>
        <br />
        <button type="button" onClick={() => this.onReset()}>reset</button>
      </div>
    );
  }
}

setInterval(action(() => {
  appState.timer += 1;
}), 1000);

appState.resetTimer = action(() => {
  appState.timer = 0;
});

render(
  <TimerView state={appState} />,
  document.getElementById('app'),
);

// https://github.com/jaredpalmer/react-parcel-example/blob/master/index.js
// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

if (process.env.TARGET === 'electron') {
  /* eslint global-require: off, import/no-extraneous-dependencies: off */
  require('electron-react-devtools').install();
}

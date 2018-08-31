import React, { Component } from 'react';
import { render } from 'react-dom';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import App from 'containers/App.jsx';
import { app } from 'electron';

// https://mobx.js.org/intro/overview.html

const appState = observable({
  timer: 0,
});

@observer
class TimerView extends Component {
  render() {
    return (
      <button onClick={() => this.onReset()}>
        Seconds passed: {this.props.appState.timer}
      </button>
    )
  }
  onReset() {
    this.props.appState.resetTimer();
  }
}

setInterval(action(function tick() {
  appState.timer += 1;
}), 1000);

appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

render(
  <TimerView appState={appState} />,
  document.getElementById('app'),
);

// https://github.com/jaredpalmer/react-parcel-example/blob/master/index.js
// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

if (process.env.TARGET === 'electron') {
  /* eslint global-require: off */
  require('electron-react-devtools').install();
}

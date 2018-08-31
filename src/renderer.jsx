import React, { Component } from 'react';
import { render } from 'react-dom';
import { observable, action } from 'mobx';
import { observer, PropTypes } from 'mobx-react';

// https://mobx.js.org/intro/overview.html

const appState = observable({
  timer: 0,
});

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
      <button type="button" onClick={() => this.onReset()}>
        Seconds passed:
        { timer }
      </button>
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

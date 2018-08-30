import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);

// https://github.com/jaredpalmer/react-parcel-example/blob/master/index.js
// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

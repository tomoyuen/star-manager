import React from 'react';
import { render } from 'react-dom';
/* eslint import/no-extraneous-dependencies: off */
import ReactDevtools from 'electron-react-devtools';

import App from 'containers/App.jsx';

render(
  <App />,
  document.getElementById('app'),
);

// https://github.com/jaredpalmer/react-parcel-example/blob/master/index.js
// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

if (process.env.TARGET === 'electron') {
  ReactDevtools.install();
}

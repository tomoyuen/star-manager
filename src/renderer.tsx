import * as React from 'react';
import { render } from 'react-dom';

import { App } from './containers/App';

render(
  <App />,
  document.getElementById('app'),
);

// https://github.com/jaredpalmer/react-parcel-example/blob/master/index.js
// Hot Module Replacement
declare var module: any;

if (module.hot) {
  module.hot!.accept();
}

if (process.env.TARGET === 'electron') {
  /* eslint global-require: off, import/no-extraneous-dependencies: off */
  require('electron-react-devtools').install();
}

import React from 'react';
import { render } from 'react-dom';
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

if (process.env.NODE_ENV === 'development') {
  require('electron-react-devtools').install();
}

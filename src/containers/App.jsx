import React, { Component } from 'react';
import { observable } from 'mobx';
import { Provider, observer } from 'mobx-react';

import stores from 'stores';
import Button from 'components/Button';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Button />
      </Provider>
    );
  }
}

export default App;

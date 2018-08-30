import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import stores from '../stores';
import Button from '../components/Button';

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

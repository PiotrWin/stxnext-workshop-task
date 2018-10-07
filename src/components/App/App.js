import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  state = {
    test: true,
  }

  render() {
    return (
      <div>
        {this.state.test ? 'Hello world' : null}
      </div>
    );
  }
}

export default hot(module)(App);

import React, { Component } from 'react';

import classes from './App.scss';
import Form from 'components/Form/Form';


class App extends Component {
  state = {
    test: true,
  }

  render() {
    return (
      <div className={classes.App}>
        <Form />
      </div>
    );
  }
}

export default App;

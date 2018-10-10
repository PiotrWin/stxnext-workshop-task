import React, { Component } from 'react';

import Form from 'components/Form/Form';
import Gallery from 'components/Gallery/Gallery';
import classes from './App.scss';


class App extends Component {
  state = {
    imageUrls: [],
  }

  showGallery = (imageUrls) => {
    this.setState({ imageUrls });
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Wrapper}>
          <Form onFetchedResults={this.showGallery} />
          <Gallery links={this.state.imageUrls} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'utils/axios';

import Form from 'components/Form/Form';
import Gallery from 'components/Gallery/Gallery';
import classes from './App.scss';

class App extends Component {
  state = {
    animalTypes: [
      'shibes (psy)',
      'cats (koty)',
      'birds (ptaki)',
      'random (losowe)',
    ],
    chosenType: null,
    fetchCount: 1,
    fetchedImages: [],
    loading: false,
    valid: false,
  }

  fetchImages = () => {
    this.setState({ loading: true });
    let [type] = (this.state.chosenType || this.state.animalTypes[0]).split(' ');
    if (type === 'random') {
      const randomId =
        Math.floor(Math.random() * (this.state.animalTypes.length - 1));
      [type] = this.state.animalTypes[randomId].split(' ');
    }
    axios.get(`/${type}?count=${this.state.fetchCount}`)
      .then((response) => {
        this.setState({ fetchedImages: response.data, loading: false });
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  checkInputValidationStatus = (isValid, number) => {
    if (isValid) {
      this.setState({ valid: isValid, fetchCount: Number(number) });
    } else {
      this.setState({ valid: isValid });
    }
  }

  handleSelectChange = (value) => {
    this.setState({ chosenType: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.valid) {
      this.fetchImages();
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Wrapper}>
          <Form
            onFetchedResults={this.showGallery}
            onInputChanged={this.checkInputValidationStatus}
            onSelectChanged={this.handleSelectChange}
            onSubmit={this.handleSubmit}
            loading={this.state.loading}
            selectOptions={this.state.animalTypes}
            valid={this.state.valid}
          />
          <Gallery links={this.state.fetchedImages} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'utils/axios';

import FormInput from 'components/FormInput/FormInput';
import FormSelect from 'components/FormSelect/FormSelect';
import Button from 'components/Button/Button';
import classes from './Form.scss';

// TODO: move some of the state to App

class Form extends Component {
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
    valid: false,
    loading: false,
  }

  getInputValidationStatus = (isValid, number) => {
    if (isValid) {
      this.setState({ valid: isValid, fetchCount: Number(number) });
    } else {
      this.setState({ valid: isValid });
    }
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
        this.setState({ fetchedImages: response.data, loading: false }, () => {
          this.props.onFetchedResults(this.state.fetchedImages);
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  };

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
    let buttonProps;
    if (this.state.loading) {
      buttonProps = {
        text: 'Ładowanie danych',
        enabled: false,
      };
    } else {
      buttonProps = {
        text: 'Szukaj',
        enabled: this.state.valid,
      };
    }

    return (
      <form className={classes.Form} onSubmit={this.handleSubmit}>
        <FormInput
          type="number"
          required
          min={1}
          max={10}
          changed={this.getInputValidationStatus}
          label="Liczba zdjęć"
        />
        <FormSelect
          options={this.state.animalTypes}
          label="Typ zwierzaka"
          changed={this.handleSelectChange}
        />
        <Button
          text={buttonProps.text}
          enabled={buttonProps.enabled}
          clicked={this.handleSubmit}
        />
      </form>
    );
  }
}

Form.propTypes = {
  onFetchedResults: PropTypes.func,
};

Form.defaultProps = {
  onFetchedResults: null,
};

export default Form;

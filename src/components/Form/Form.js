import React, { Component } from 'react';

import FormInput from 'components/FormInput/FormInput';
import FormSelect from 'components/FormSelect/FormSelect';
import Button from 'components/Button/Button';
import classes from './Form.scss';


class Form extends Component {
  state = {
    animalTypes: [
      'shibes (psy)',
      'cats (koty)',
      'birds (ptaki)',
      'random (losowe)',
    ],
    chosenType: 'shibes',
    fetchCount: 1,
    valid: false,
  }

  getInputValidationStatus = (isValid, number) => {
    if (isValid) this.setState({ valid: isValid, fetchCount: Number(number) });
    else this.setState({ valid: isValid });
  }

  handleSelectChange = (value) => {
    this.setState({ chosenType: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  }

  render() {
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
        <Button text="Szukaj" enabled={this.state.valid} />
      </form>
    );
  }
}

export default Form;

import React, { Component } from 'react';

import classes from './Form.scss';
import FormInput from 'components/FormInput/FormInput';
import FormSelect from 'components/FormSelect/FormSelect';


class Form extends Component {
  state = {
    animalType: 'shibes',
    photoNumber: 0,
    validated: false,
  }

  getInputValidationStatus(status) {
    console.log(status);
  }

  render() {
    const options = [
      'shibes (psy)',
      'cats (koty)',
      'birds (ptaki)',
      'random (losowe)',
    ];

    return (
      <form className={classes.Form}>
        <FormInput
          type="number"
          required
          min={1}
          max={10}
          changed={this.getInputValidationStatus}
        />
        <FormSelect options={options} />
      </form>
    );
  }
}

export default Form;

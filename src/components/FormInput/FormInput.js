import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './FormInput.scss';

class FormInput extends Component {
  state = {
    valid: false,
    value: '',
    inputMessage:
      `Podaj liczbę zdjęć (od ${this.props.min} do ${this.props.max})`,
  }

  handleChange = (event) => {
    let { inputMessage } = this.state;
    const value = Number(event.target.value);
    if (Number.isNaN(value)) {
      inputMessage = 'Podana wartość nie jest liczbą';
    } else if (event.target.value === '') {
      inputMessage =
        `Podaj liczbę zdjęć (od ${this.props.min} do ${this.props.max})`;
    } else if (value < this.props.min) {
      inputMessage = `Wartość zbyt mała (minimum ${this.props.min})`;
    } else if (value > this.props.max) {
      inputMessage = `Wartość zbyt duża (maksimum ${this.props.max})`;
    } else inputMessage = '';

    this.setState({
      valid: inputMessage === '',
      value: event.target.value,
      inputMessage,
    }, () => this.props.changed(this.state.valid, this.state.value));
  }

  render() {
    return (
      <React.Fragment>
        <div className={classes.InputLabel}>{this.props.label}</div>
        <input
          className={classes.FormInput}
          type={this.props.type}
          required={this.props.required}
          onChange={this.handleChange}
          value={this.state.value}
          min={this.props.min}
          max={this.props.max}
        />
        <div className={classes.InputMessage}>{this.state.inputMessage}</div>
      </React.Fragment>
    );
  }
}

FormInput.propTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  changed: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'number',
  required: true,
  changed: null,
  min: 1,
  max: 10,
  label: '',
};

export default FormInput;

import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'components/FormInput/FormInput';
import FormSelect from 'components/FormSelect/FormSelect';
import Button from 'components/Button/Button';
import classes from './Form.scss';

const form = (props) => {
  let buttonProps;
  if (props.loading) {
    buttonProps = {
      text: 'Ładowanie danych',
      enabled: false,
    };
  } else {
    buttonProps = {
      text: 'Szukaj',
      enabled: props.valid,
    };
  }

  return (
    <form className={classes.Form} onSubmit={props.onSubmit}>
      <FormInput
        type="number"
        required
        min={1}
        max={10}
        changed={props.onInputChanged}
        label="Liczba zdjęć:"
      />
      <FormSelect
        options={props.selectOptions}
        label="Typ zwierzaka:"
        changed={props.onSelectChanged}
      />
      <Button
        text={buttonProps.text}
        enabled={buttonProps.enabled}
        clicked={props.onSubmit}
      />
    </form>
  );
};

form.propTypes = {
  loading: PropTypes.bool,
  onInputChanged: PropTypes.func,
  onSelectChanged: PropTypes.func,
  onSubmit: PropTypes.func,
  selectOptions: PropTypes.instanceOf(Array),
  valid: PropTypes.bool,
};

form.defaultProps = {
  loading: false,
  onInputChanged: null,
  onSelectChanged: null,
  onSubmit: null,
  selectOptions: [],
  valid: false,
};

export default form;

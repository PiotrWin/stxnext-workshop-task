import React from 'react';
import PropTypes from 'prop-types';

import classes from './FormSelect.scss';

const formSelect = (props) => {
  const optionElements = props.options
    .map((option, id) => <option value={option} key={id}>{option}</option>);
  return (
    <div className={classes.FormSelect}>
      <div className={classes.SelectLabel}>{props.label}</div>
      <select
        onChange={event => props.changed(event.target.value)}
      >{optionElements}
      </select>
    </div>
  );
};

formSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  changed: PropTypes.func,
};

formSelect.defaultProps = {
  options: [],
  label: '',
  changed: null,
};

export default formSelect;

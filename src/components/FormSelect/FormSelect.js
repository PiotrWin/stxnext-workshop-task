import React from 'react';
import PropTypes from 'prop-types';

const formSelect = (props) => {
  const optionElements = props.options
    .map((option, id) => <option value={option} key={id}>{option}</option>);
  return <select>{optionElements}</select>;
};

formSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

formSelect.defaultProps = {
  options: [],
};

export default formSelect;

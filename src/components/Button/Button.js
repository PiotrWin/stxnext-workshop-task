import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.scss';

const button = (props) => {
  const buttonClasses = (props.enabled ?
    [classes.Button, classes.Enabled] :
    [classes.Button, classes.Disabled])
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={!props.enabled}
      onClick={props.clicked}
    >
      {props.text}
    </button>
  );
};

button.propTypes = {
  text: PropTypes.string,
  enabled: PropTypes.bool,
  clicked: PropTypes.func,
};

button.defaultProps = {
  text: 'Szukaj',
  enabled: true,
  clicked: null,
};

export default button;

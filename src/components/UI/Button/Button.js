import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const Button = props => (
  <button
    type={props.type}
    className={classes.Button}
    onClick={props.clicked}
    onSubmit={props.submit}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  clicked: PropTypes.func,
  submit: PropTypes.func
};

export default Button;

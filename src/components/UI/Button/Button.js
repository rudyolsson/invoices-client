import React from 'react';

import classes from './Button.css';

export default props => (
  <button
    type={props.type}
    className={classes.Button}
    onClick={props.clicked}
    onSubmit={props.submit}
  >
    {props.children}
  </button>
);

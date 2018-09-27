import React from 'react';
import { Link } from 'react-router-dom';

import classes from './LinkButton.css';

export default props => (
  <Link to={props.link} exact={props.exact} className={classes.LinkButton}>
    {props.children}
  </Link>
);

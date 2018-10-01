import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './LinkButton.css';

const LinkButton = props => (
  <Link to={props.link} exact={props.exact} className={classes.LinkButton}>
    {props.children}
  </Link>
);

LinkButton.propTypes = {
  link: PropTypes.string,
  exact: PropTypes.string
};

export default LinkButton;

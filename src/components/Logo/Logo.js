import React from 'react';

import Logo from '../../assets/images/logo.png';
import classes from './Logo.css';

export default () => (
  <div className={classes.Logo}>
    <img src={Logo} alt="Logo" />
  </div>
);

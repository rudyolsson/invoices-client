import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import classes from './Header.css';

class Header extends Component {
  setNavLinks = () => {
    if (this.props.authenticated === '') {
      return (
        <div>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink to="/signout">Sign Out</NavLink>
          <NavLink to="/invoices">Invoices</NavLink>
        </div>
      );
    }
  };
  render() {
    return (
      <header className={classes.Header}>
        <NavLink to="/" exact style={{ width: '193px' }}>
          Home
        </NavLink>
        <Logo />
        {this.setNavLinks()}
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);

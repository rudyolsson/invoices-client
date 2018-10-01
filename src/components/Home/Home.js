import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LinkButton from '../UI/LinkButton/LinkButton';
import classes from './Home.css';

class Home extends Component {
  setLinks = () => {
    if (this.props.authenticated !== '') {
      return <LinkButton link="/invoices">Invoices</LinkButton>;
    } else {
      return (
        <div>
          <LinkButton link="/signup">Sign Up</LinkButton>
          <LinkButton link="/signin">Sign In</LinkButton>
        </div>
      );
    }
  };

  render() {
    return (
      <div className={classes.Home}>
        <h1>Welcome To Invoices</h1>
        {this.setLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

Home.propTypes = {
  authenticated: PropTypes.string
};

export default connect(mapStateToProps)(Home);

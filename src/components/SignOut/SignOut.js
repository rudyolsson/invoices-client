import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LinkButton from '../UI/LinkButton/LinkButton';
import * as actions from '../../store/actions';

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
    this.props.removeAuthError();
  }

  render() {
    return (
      <div>
        <h1
          style={{
            marginBottom: '50px'
          }}
        >
          Have A Nice Day!
        </h1>
        <LinkButton link="/signup">Sign Up</LinkButton>
        <LinkButton link="/signin">Sign In</LinkButton>
      </div>
    );
  }
}

Signout.propTypes = {
  signout: PropTypes.func,
  removeAuthError: PropTypes.func
};

export default connect(
  null,
  actions
)(Signout);

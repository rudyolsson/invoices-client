import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/invoices');
    });
  };

  render() {
    const { handleSubmit, errorMessage } = this.props;

    return (
      <div>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email</label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <div style={{ marginBottom: '20px', color: 'red' }}>
            {errorMessage}
          </div>
          <Button>Sign In</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signin);

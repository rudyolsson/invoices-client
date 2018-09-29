import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field, reset } from 'redux-form';

import Button from '../../UI/Button/Button';
import classes from './NewInvoiceForm.css';
import * as actions from '../../../store/actions';

// REDUX FORM VALIDATOINS -------
const required = value => (value ? undefined : 'Required');
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const warningStyle = {
  marginLeft: '5px',
  color: 'red',
  fontWeight: 'normal',
  fontSize: '0.8em'
};
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span style={warningStyle}>{error}</span>) ||
          (warning && <span style={warningStyle}>{warning}</span>))}
    </div>
  </div>
);
//------------

class newInvoiceForm extends Component {
  state = {
    show: false
  };

  onSubmit = formProps => {
    this.props.newInvoice(formProps, this.setState({ show: false }));
    this.props.dispatch(reset('newInvoiceForm'));
  };

  onClickHandler = () => {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <div className={classes.NewInvoiceForm}>
        <Button clicked={this.onClickHandler}>Add A New Invoice</Button>
        {this.state.show ? (
          <div style={{ marginTop: '20px' }}>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <fieldset>
                <label>Amount</label>
                <Field
                  name="amount"
                  type="number"
                  autoComplete="none"
                  component={renderField}
                  validate={[required, number]}
                />
              </fieldset>
              <fieldset>
                <label>Date Due (YYYY/MM/DD)</label>
                <Field
                  name="toBePaidOn"
                  type="date"
                  component={renderField}
                  autoComplete="none"
                  validate={required}
                />
              </fieldset>
              <fieldset>
                <label>Customer</label>
                <Field
                  name="customerName"
                  type="text"
                  component={renderField}
                  autoComplete="none"
                  validate={required}
                />
              </fieldset>
              <fieldset>
                <label>Description</label>
                <Field
                  name="description"
                  type="text"
                  component={renderField}
                  autoComplete="none"
                  validate={required}
                />
              </fieldset>
              <Button type="submit" disabled={this.props.submitting}>
                Save
              </Button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  reduxForm({ form: 'newInvoiceForm' })
)(newInvoiceForm);

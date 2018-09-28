import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewInvoiceForm from './NewInvoiceForm/NewInvoiceForm';
import TableRow from './TableRow/TableRow';
import Button from '../UI/Button/Button';
import * as actions from '../../store/actions';
import classes from './Invoices.css';

class Invoices extends Component {
  componentDidMount() {
    this.shouldNavigateAway();
    this.props.fetchInvoices();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway = () => {
    if (!this.props.authenticated) {
      this.props.history.push('/');
    }
  };

  render() {
    let rows = null;
    const { invoices } = this.props;
    if (invoices.length > 0) {
      rows = invoices.map(invoice => (
        <TableRow
          key={invoice._id}
          _id={invoice._id}
          toBePaidOn={invoice.toBePaidOn}
          customerName={invoice.customerName}
          amount={invoice.amount}
          completed={invoice.completed}
          completedAt={invoice.completedAt}
          description={invoice.description}
        />
      ));
    }
    return (
      <div className={classes.Invoices}>
        <h1>Invoices</h1>
        <NewInvoiceForm />
        <table className={classes.Table}>
          <thead>
            <tr>
              <th>Date Due (yyyy-mm-dd)</th>
              <th>Reference No</th>
              <th>Customer</th>
              <th>Amount Due</th>
              <th>Date Paid (yyyy-mm-dd)</th>
              <th>Status</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    invoices: state.invoices.invoices,
    authenticated: state.auth.authenticated
  };
};

export default connect(
  mapStateToProps,
  actions
)(Invoices);

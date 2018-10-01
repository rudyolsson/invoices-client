import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../../store/actions';
import classes from './TableRow.css';

class TableRow extends Component {
  state = {
    editing: false,
    value: ''
  };

  onEditHandler = () => {};

  onChangeHandler = e => {
    this.setState({ value: e.target.value });
  };

  onSubmitHandler = id => {
    if (!this.state.editing) {
      this.setState(prevState => {
        return { editing: !prevState.editing };
      });
    } else {
      this.props.updateInvoice(this.state.value, id);
      this.setState(prevState => {
        return { editing: !prevState.editing, value: '' };
      });
    }
  };

  render() {
    const {
      _id,
      toBePaidOn,
      customerName,
      amount,
      completed,
      completedAt,
      description
    } = this.props;

    const { editing, value } = this.state;

    return (
      <tr className={classes.TableRow}>
        <td>{toBePaidOn}</td>
        <td>{_id}</td>
        <td>{customerName}</td>
        <td>{amount}</td>
        <td>
          {editing ? (
            <input
              className={classes.DateInput}
              onChange={this.onChangeHandler}
              value={value}
              type="date"
            />
          ) : (
            completedAt
          )}
        </td>
        <td>{completed ? 'Paid' : ''}</td>
        <td>{description}</td>
        <td className={classes.TableButton}>
          {completed ? null : (
            <button onClick={() => this.onSubmitHandler(_id)}>
              {!editing ? 'Pay' : 'Save'}
            </button>
          )}
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  updateInvoice: PropTypes.func
};

export default connect(
  null,
  actions
)(TableRow);

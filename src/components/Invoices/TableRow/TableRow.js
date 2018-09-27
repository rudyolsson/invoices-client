import React, { Component } from 'react';

import Button from '../../UI/Button/Button';
import classes from './TableRow.css';

class TableRow extends Component {
  state = {
    editing: false
  };

  onEditHandler = () => {
    this.setState(prevState => {
      return { editing: !prevState.editing };
    });
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
    return (
      <tr>
        <td>{toBePaidOn}</td>
        <td>{_id}</td>
        <td>{customerName}</td>
        <td>{amount}</td>
        <td>
          {this.state.editing ? (
            <input className={classes.DateInput} />
          ) : (
            completedAt
          )}
        </td>
        <td>{completed ? 'Paid' : ''}</td>
        <td>{description}</td>
        <td className={classes.TableButton}>
          {completed ? null : (
            <Button clicked={this.onEditHandler}>
              {!this.state.editing ? 'Pay' : 'Save'}
            </Button>
          )}
        </td>
      </tr>
    );
  }
}

export default TableRow;

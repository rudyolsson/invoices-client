import axios from 'axios';

import { FETCH_INVOICES, UPDATE_ALL_INVOICES } from './actionTypes';

export const fetchInvoices = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3090/invoices', {
      headers: { 'x-auth': token }
    });
    dispatch({ type: FETCH_INVOICES, payload: response.data.invoices });
  } catch (err) {
    console.log(err);
  }
};

export const newInvoice = (formProps, callback) => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios({
      url: 'http://localhost:3090/invoices/',
      method: 'post',
      headers: { 'x-auth': token },
      data: formProps
    });
    dispatch(updateAllInvoices(response.data.doc));
  } catch (err) {
    console.log(err);
  }
};

export const updateAllInvoices = doc => {
  return {
    type: UPDATE_ALL_INVOICES,
    payload: doc
  };
};

export const updateInvoice = (date, id) => async dispatch => {
  const token = localStorage.getItem('token');
  try {
    await axios({
      url: `http://localhost:3090/invoices/${id}`,
      method: 'put',
      headers: { 'x-auth': token },
      data: { completedAt: date }
    });
    dispatch(fetchInvoices());
  } catch (err) {
    console.log(err);
  }
};

export const sortByPaidStatus = invoices => {
  let sorted = [...invoices];
  sorted.sort(
    (a, b) =>
      a.completed !== b.completed ? 1 : b.completed !== a.completed ? -1 : 0
  );
  return { type: FETCH_INVOICES, payload: sorted };
};

import axios from 'axios';

import { FETCH_INVOICES } from './actionTypes';

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

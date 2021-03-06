import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './actionTypes';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'https://invoices-server.herokuapp.com/signup',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'https://invoices-server.herokuapp.com/signin',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => async dispatch => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete('https://invoices-server.herokuapp.com/signout', {
      headers: { 'x-auth': token }
    });
    dispatch(removeLocalToken());
    return { type: AUTH_USER, payload: '' };
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: 'Error logging out' });
  }
};

export const authCheckState = () => {
  return {
    type: AUTH_USER,
    payload: localStorage.getItem('token')
  };
};

export const removeAuthError = () => {
  return {
    type: AUTH_ERROR,
    payload: ''
  };
};

export const removeLocalToken = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};

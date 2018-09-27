import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import invoices from './invoices';

export default combineReducers({
  auth,
  invoices,
  form: formReducer
});

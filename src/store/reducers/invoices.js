import { FETCH_INVOICES, UPDATE_ALL_INVOICES } from '../actions/actionTypes';

const INITIAL_STATE = {
  invoices: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INVOICES:
      return { ...state, invoices: action.payload };
    case UPDATE_ALL_INVOICES:
      return { ...state, invoices: state.invoices.concat(action.payload) };
    default:
      return state;
  }
}

import { FETCH_INVOICES } from '../actions/actionTypes';

const INITIAL_STATE = {
  invoices: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INVOICES:
      return { ...state, invoices: action.payload };
    default:
      return state;
  }
}

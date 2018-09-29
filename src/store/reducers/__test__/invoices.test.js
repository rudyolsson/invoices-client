import { FETCH_INVOICES, UPDATE_ALL_INVOICES } from '../../actions/actionTypes';
import invoicesReducer from '../invoices';

it('handles actions with type FETCH_INVOICES', () => {
  const action = {
    type: FETCH_INVOICES,
    payload: '12344556'
  };

  const newState = invoicesReducer([], action);

  expect(newState.invoices).toEqual('12344556');
});
//
// it('handles actions with type UPDATE_ALL_INVOICES', () => {
//   const action = {
//     type: UPDATE_ALL_INVOICES,
//     payload: { amount: 12344556 }
//   };
//
//   const newState = invoicesReducer([], action);
//
//   expect(newState.invoices).toEqual('new invoice');
// });

it('handles an action with an unknown type', () => {
  const newState = invoicesReducer([], {});
  expect(newState).toEqual([]);
});

import { AUTH_USER, AUTH_ERROR } from '../../actions/actionTypes';
import authReducer from '../auth';

it('handles actions with type AUTH_USER', () => {
  const action = {
    type: AUTH_USER,
    payload: '12344556'
  };

  const newState = authReducer([], action);

  expect(newState.authenticated).toEqual('12344556');
});

it('handles actions with type AUTH_ERROR', () => {
  const action = {
    type: AUTH_ERROR,
    payload: 'ERROR!'
  };

  const newState = authReducer([], action);

  expect(newState.errorMessage).toEqual('ERROR!');
});

it('handles an action with an unknown type', () => {
  const newState = authReducer([], {});
  expect(newState).toEqual([]);
});

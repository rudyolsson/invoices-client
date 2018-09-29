import { removeAuthError } from '../auth';

import { AUTH_ERROR } from '../actionTypes';

describe('removeLocalToken', () => {
  it('has the correct type', () => {
    const action = removeAuthError();
    expect(action.type).toEqual(AUTH_ERROR);
  });
});

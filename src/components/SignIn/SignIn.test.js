import React from 'react';
import { mount } from 'enzyme';

import SignIn from './SignIn';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SignIn />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render div, form, button ', () => {
  expect(wrapped.find('div').length).toEqual(2);
  expect(wrapped.find('form').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
  expect(wrapped.find('h1').length).toEqual(1);
});

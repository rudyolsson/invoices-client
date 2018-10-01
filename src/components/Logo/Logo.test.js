import React from 'react';
import { mount } from 'enzyme';

import Logo from './Logo';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Logo />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render an element', () => {
  expect(wrapped.find('img').length).toEqual(1);
});

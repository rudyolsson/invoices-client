import React from 'react';
import { mount } from 'enzyme';

import Button from './Button';
import Root from '../../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Button />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render a button element', () => {
  expect(wrapped.find('button').length).toEqual(1);
});

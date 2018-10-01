import React from 'react';
import { mount } from 'enzyme';

import Spinner from './Spinner';
import Root from '../../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Spinner />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render 9 child div elements', () => {
  expect(wrapped.find('div').length).toEqual(9);
});

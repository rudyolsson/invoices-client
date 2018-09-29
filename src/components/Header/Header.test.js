import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Header from './Header';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Header />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render a header element', () => {
  expect(wrapped.find('header').length).toEqual(1);
});

import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Footer from './Footer';
import Root from '../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Footer />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render a p and a div element', () => {
  expect(wrapped.find('p').length).toEqual(1);
  expect(wrapped.find('div').length).toEqual(1);
});

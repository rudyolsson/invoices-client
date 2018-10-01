import React from 'react';
import { mount } from 'enzyme';

import NewInvoiceForm from './NewInvoiceForm';
import Root from '../../../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <NewInvoiceForm />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render div, form, button ', () => {
  expect(wrapped.find('div').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

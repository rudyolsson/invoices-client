import React from 'react';
import { mount } from 'enzyme';
import Invoices from '../Invoices';
import TableRow from './TableRow';

import Root from '../../../root';

let wrapped;

beforeEach(() => {
  const initialState = {
    invoices: [
      {
        _id: '123456',
        toBePaidOn: '2018-10-20',
        customerName: 'User One',
        amount: 1234,
        description: 'This is a test'
      }
    ]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should render 8 td elements', () => {
  expect(wrapped.find('td').length).toEqual(8);
});

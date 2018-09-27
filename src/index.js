import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './root';
import App from './App';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import SignOut from './components/SignOut/SignOut';
import Invoices from './components/Invoices/Invoices';
import './index.css';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={SignOut} />
        <Route path="/invoices" component={Invoices} />
      </App>
    </BrowserRouter>
  </Root>,
  document.querySelector('#root')
);

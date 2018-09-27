import React, { Component } from 'react';

import Header from './components/Header/Header';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className={classes.Content}>{this.props.children}</main>
      </div>
    );
  }
}

export default App;

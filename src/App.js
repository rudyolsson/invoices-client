import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className={classes.Content}>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default App;

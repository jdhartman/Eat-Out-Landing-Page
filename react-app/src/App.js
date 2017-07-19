import React, { Component } from 'react';

import './App.css';

import Header from './Header'
import EatOut from './EatOut'
import Founders from './Founders'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <EatOut />

        <Founders />
      </div>
    );
  }
}

export default App;
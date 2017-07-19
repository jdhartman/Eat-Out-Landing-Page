import React, { Component } from 'react';

import JustinPortrait from './res/images/portraits/justin.PNG'
import TheoPortrait from './res/images/portraits/theo.PNG'
import ToddPortrait from './res/images/portraits/todd.jpg'
import GlenPortrait from './res/images/portraits/glen.jpg'

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
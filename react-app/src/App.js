import React, { Component } from 'react';

import './App.css';

import Header   from './Header/Header'
import EatOut   from './EatOut/EatOut'
import Founders from './Founders/Founders'
import Footer   from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <EatOut />

        <Founders />
        
        <Footer />
      </div>
    );
  }
}

export default App;
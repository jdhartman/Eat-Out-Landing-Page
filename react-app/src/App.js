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

        <a href="http://eatout.trofi.io/" target="_blank" style="text-decoration: none;">
          <div id="eo-div">
            <div id="eo-plate">
              <img src="images/plate.png" />
            </div>

            <div id="eo-ios"> 
              <img src="images/iOS-mockup.png" />
            </div>

            <div id="eo-content">
              <div id="eo-logo">
                <img src= "images/Eat Out Logo.png" />
              </div>

              <div id="eo-motto">
                Let's eat already.
              </div>

              <div id="eo-info">
                A cross-platform restaurant finder that is coming soon to iOS and Android devices.
              </div>
            </div>
          </div>
        </a>

        <div id="about-div">
          <p id="about-title">Who We Are</p>

          <ul>
            <li className="profile_pics">
              <a href="http://justinhartman.me/">
                <img src="images/portraits/justin.png" />
              </a>

              <a href="http://justinhartman.me/">
                <p className="portrait_name">
                  Justin Hartman
                </p>
              </a>

              <p className="portrait_description">
                Co-founder / iOS Developer
              </p>
            </li>

            <li className="profile_pics">
              <img src="images/portraits/theo.png" />

              <p className="portrait_name">
                Theo Burkhart
              </p>

              <p className="portrait_description">
                Co-founder / iOS Developer
              </p>
            </li>

            <li className="profile_pics">
              <a href="http://magnusfrater.net/">
                <img src="images/portraits/todd.jpg" />
              </a>

              <a href="http://magnusfrater.net/">
                <p className="portrait_name">
                  Todd Griffin
                </p>
              </a>

              <p className="portrait_description">
                Co-founder / Android Developer
              </p>
            </li>

            <li className="profile_pics">
              <img src="images/portraits/glen.jpg" />

              <p className="portrait_name">
                Glen Eder
              </p>

              <p className="portrait_description">
                Co-founder / Android Developer
              </p>
            </li>
          </ul>

          <a id="about-join" href="https://docs.google.com/forms/d/e/1FAIpQLScW0bi6960ahp8PqsmlLKOOUAc4V9MR-H77Rq2pFCjdp-yOWg/viewform" target="blank"> 
            <p>Want to join our team?</p>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
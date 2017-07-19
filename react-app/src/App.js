import React, { Component } from 'react';

import EatOutLogo from './res/images/Eat Out Logo.png';
import iOSMockup from './res/images/iOS-mockup.png'
import Plate from './res/images/plate.png'

import JustinPortrait from './res/images/portraits/justin.PNG'
import TheoPortrait from './res/images/portraits/theo.PNG'
import ToddPortrait from './res/images/portraits/todd.jpg'
import GlenPortrait from './res/images/portraits/glen.jpg'

import './App.css';

import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <a href="http://eatout.trofi.io/" target="_blank">
          <div id="eo-div">
            <div id="eo-plate">
              <img src={Plate} />
            </div>

            <div id="eo-ios"> 
                <img src={iOSMockup} />
            </div>

            <div id="eo-content">
              <div id="eo-logo">
                <img src={EatOutLogo} />
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
                <img src={JustinPortrait} />
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
              <img src={TheoPortrait} />

              <p className="portrait_name">
                Theo Burkhart
              </p>

              <p className="portrait_description">
                Co-founder / iOS Developer
              </p>
            </li>

            <li className="profile_pics">
              <a href="http://magnusfrater.net/">
                <img src={ToddPortrait} />
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
              <img src={GlenPortrait} />

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
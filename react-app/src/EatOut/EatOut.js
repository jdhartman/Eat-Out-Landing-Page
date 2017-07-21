import React, { Component } from 'react'

import EatOutLogo from '../res/images/Eat Out Logo.png';

import './EatOut.css'

import Plate from './Plate'
import iOSMockup from './iOSMockup'

class EatOut extends Component {
    render () {
        return (
            <div className="EatOut">
                <a
                    href="http://eatout.trofi.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div id="eo-div">
                        <Plate />

                        <iOSMockup />

                        <div id="eo-content">
                            <div id="eo-logo">
                                <img src={EatOutLogo} alt="eat out logo" />
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
            </div>
        )
    }
}

export default EatOut
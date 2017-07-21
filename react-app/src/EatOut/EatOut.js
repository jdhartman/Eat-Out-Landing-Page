import React, { Component } from 'react'

import './EatOut.css'

import Plate from './Plate'
import iOSMockup from './iOSMockup'
import Main from './Main'

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

                        <Main />
                    </div>
                </a>
            </div>
        )
    }
}

export default EatOut
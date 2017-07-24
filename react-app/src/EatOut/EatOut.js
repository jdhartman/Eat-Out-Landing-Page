import React, { Component } from 'react'

import './global.css'
import './EatOut.css'

import Plate from './Plate'
import IOSMockup from './IOSMockup'
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
                    <div id="innerContent">
                        <Plate />

                        <IOSMockup />

                        <Main />
                    </div>
                </a>
            </div>
        )
    }
}

export default EatOut
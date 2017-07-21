import React, { Component } from 'react'

import EatOutLogo from '../res/images/Eat Out Logo.png';

class Main extends Component {
    render () {
        return (
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
        )
    }
}

export default Main
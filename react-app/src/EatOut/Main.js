import React, { Component } from 'react'

import Logo from './Logo'

class Main extends Component {
    render () {
        return (
            <div id="eo-content">
                <Logo />

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
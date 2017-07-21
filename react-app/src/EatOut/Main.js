import React, { Component } from 'react'

import Logo from './Logo'
import Motto from './Motto'

class Main extends Component {
    render () {
        return (
            <div id="eo-content">
                <Logo />

                <Motto />

                <div id="eo-info">
                    A cross-platform restaurant finder that is coming soon to iOS and Android devices.
                </div>
            </div>
        )
    }
}

export default Main
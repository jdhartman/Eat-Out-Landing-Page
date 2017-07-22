import React, { Component } from 'react'

import './global.css'

import Logo from './Logo'
import Motto from './Motto'
import Info from './Info'

class Main extends Component {
    render () {
        return (
            <div id="eo-content">
                <Logo />

                <Motto />

                <Info />
            </div>
        )
    }
}

export default Main
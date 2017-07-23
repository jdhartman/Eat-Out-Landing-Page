import React, { Component } from 'react'

import './global.css'
import './Main.css'

import Logo from './Logo'
import Motto from './Motto'
import Info from './Info'

class Main extends Component {
    render () {
        return (
            <div className="Main">
                <Logo />

                <Motto />

                <Info />
            </div>
        )
    }
}

export default Main
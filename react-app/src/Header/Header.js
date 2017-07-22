import React, { Component } from 'react'

import TrofiLogo from '../res/images/trofi-logo.png'

import './global.css'
import './Header.css'

import SocialLinks from './SocialLinks'

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <img id="logo" src={TrofiLogo} alt="trofi logo" />

                <SocialLinks />
            </div>
        )
    }
}

export default Header
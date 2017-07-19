import React, { Component } from 'react'

import TrofiLogo from '../res/images/trofi-logo.png'

import './Header.css'

import SocialLinks from './SocialLinks'

class Header extends Component {
    render () {
        return (
            <div id="logo-div">
                <img id="title-logo" src={TrofiLogo} alt="trofi logo" />

                <SocialLinks />
            </div>
        )
    }
}

export default Header
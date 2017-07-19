import React, { Component } from 'react'

import TrofiLogo from '../res/images/trofi-logo.png'

import FacebookLogo from '../res/images/FB-Logo.png'
import TwitterLogo from '../res/images/Twitter-Logo.png'
import InstagramLogo from '../res/images/IG-Logo.png'

import './Header.css'

class Header extends Component {
    render () {
        return (
            <div id="logo-div">
                <img id="title-logo" src={TrofiLogo} alt="trofi logo" />

                <div id="social">
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/Trofi-LLC-308796409540099/"
                                id="facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={FacebookLogo} alt="facebook logo" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://twitter.com/trofiLLC"
                                id="twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={TwitterLogo} alt="twitter logo" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.instagram.com/trofi_llc/"
                                id="instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={InstagramLogo} alt="instagram logo" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
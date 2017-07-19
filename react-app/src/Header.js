import React, { Component } from 'react'

import TrofiLogo from './res/images/trofi-logo.png'

import FacebookLogo from './res/images/FB-Logo.png'
import TwitterLogo from './res/images/Twitter-Logo.png'
import IGLogo from './res/images/IG-Logo.png'

class Header extends Component {
    render () {
        return (
            <div id="logo-div">
                <img id="title-logo" src="images/trofi-logo.png" />

                <div id="social">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/Trofi-LLC-308796409540099/" id="facebook" target="_blank">
                                <img src={FacebookLogo} />
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/trofiLLC" id="twitter" target="_blank">
                                <img src={TwitterLogo} />
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/trofi_llc/" id="instagram" target="_blank">
                                <img src={IGLogo} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
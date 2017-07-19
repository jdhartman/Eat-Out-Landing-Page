import React, { Component } from 'react'

import FacebookLogo from '../res/images/FB-Logo.png'
import TwitterLogo from '../res/images/Twitter-Logo.png'
import InstagramLogo from '../res/images/IG-Logo.png'

class SocialLinks extends Component {
    constructor () {
        super()

        this.state = {
            links: {
                facebook: {
                    link: "https://www.facebook.com/Trofi-LLC-308796409540099/",
                    src: {FacebookLogo}
                },
                twitter: {
                    link: "https://twitter.com/trofiLLC",
                    src: {TwitterLogo}
                },
                instagram: {
                    link: "https://www.instagram.com/trofi_llc/",
                    src: {InstagramLogo}
                }
            }
        }
    }

    render () {
        return (
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
        )
    }
}

export default SocialLinks
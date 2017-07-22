import React, { Component } from 'react'

import './global.css'

import Link from './Link'

class SocialLinks extends Component {
    constructor () {
        super()

        this.state = {
            links: {
                facebook: {
                    url: "https://www.facebook.com/Trofi-LLC-308796409540099/"
                },
                twitter: {
                    url: "https://twitter.com/trofiLLC"
                },
                instagram: {
                    url: "https://www.instagram.com/trofi_llc/"
                }
            }
        }
    }

    render () {
        return (
            <div id="social">
                <ul>
                    { Object.keys(this.state.links)
                        .map(key => 
                            <Link
                                name={key}
                                link={this.state.links[key]}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default SocialLinks
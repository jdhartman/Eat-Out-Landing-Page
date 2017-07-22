import React, { Component } from 'react'

import './global.css'
import './MediaLinks.css'

import Link from './Link'

class MediaLinks extends Component {
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
            <div className="MediaLinks">
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

export default MediaLinks
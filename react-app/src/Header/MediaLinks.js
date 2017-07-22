import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import './global.css'
import './MediaLinks.css'

import Link from './Link'

class MediaLinks extends Component {
    constructor () {
        super()

        this.state = {
            links: {
                facebook: {
                    url: "https://www.facebook.com/Trofi-LLC-308796409540099/",
                    font: <FontAwesome name='facebook-square' size="4x" />
                },
                twitter: {
                    url: "https://twitter.com/trofiLLC",
                    font: <FontAwesome name='twitter-square' size="4x" />
                },
                instagram: {
                    url: "https://www.instagram.com/trofi_llc/",
                    font: <FontAwesome name='instagram' size="4x" />
                }
            }
        }
    }

    render () {
        return (
            <ul className="MediaLinks">
                { Object.keys(this.state.links)
                    .map(key => 
                        <Link
                            name={key}
                            link={this.state.links[key]}
                        />
                    )
                }
            </ul>
        )
    }
}

export default MediaLinks
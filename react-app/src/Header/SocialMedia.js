import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import './global.css'
import './SocialMedia.css'

import SocialMediaLink from './SocialMediaLink'

class SocialMedia extends Component {
    constructor () {
        super()

        this.state = {
            links: {
                facebook: {
                    url: "https://www.facebook.com/Trofi-LLC-308796409540099/",
                    font: <FontAwesome name='facebook-square' size="3x" />
                },
                twitter: {
                    url: "https://twitter.com/trofiLLC",
                    font: <FontAwesome name='twitter-square' size="3x" />
                },
                instagram: {
                    url: "https://www.instagram.com/trofi_llc/",
                    font: <FontAwesome name='instagram' size="3x" />
                }
            }
        }
    }

    render () {
        return (
            <div className="SocialMedia">
                { Object.keys(this.state.links)
                    .map(key => 
                        <SocialMediaLink
                            key={key}
                            name={key}
                            link={this.state.links[key]}
                        />
                    )
                }
            </div>
        )
    }
}

export default SocialMedia
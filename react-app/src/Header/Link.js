import React from 'react'

import FacebookLogo from '../res/images/FB-Logo.png'
import TwitterLogo from '../res/images/Twitter-Logo.png'
import InstagramLogo from '../res/images/IG-Logo.png'

import './global.css'

const Link = ({name, link}) => {
    const getLogo = (name) => {
        switch (name) {
            case "facebook":
                return FacebookLogo

            case "twitter":
                return TwitterLogo

            case "instagram":
                return InstagramLogo
            
            default:
                return null
        }
    }

    return (
        <li>
            <a
                href={link.url}
                id={name}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={getLogo(name)} alt={name + " logo"} />
            </a>
        </li>
    )
}

export default Link
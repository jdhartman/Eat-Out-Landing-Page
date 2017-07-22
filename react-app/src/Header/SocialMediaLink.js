import React from 'react'

import './global.css'
import './SocialMediaLink.css'

const SocialMediaLink = ({name, link}) => {
    return (
        <div className="SocialMediaLink">
            <a
                id={name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {link.font}
            </a>
        </div>
    )
}

export default SocialMediaLink
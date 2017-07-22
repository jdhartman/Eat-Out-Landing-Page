import React from 'react'

import './global.css'
import './SocialMediaLink.css'

const SocialMediaLink = ({name, link}) => {
    return (
        <a
            className="Link"
            id={name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {link.font}
        </a>
    )
}

export default SocialMediaLink
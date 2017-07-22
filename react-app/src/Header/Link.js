import React from 'react'

import './global.css'
import './Link.css'

const Link = ({name, link}) => {
    return (
        <li className="Link" id={name}>
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {link.font}
            </a>
        </li>
    )
}

export default Link
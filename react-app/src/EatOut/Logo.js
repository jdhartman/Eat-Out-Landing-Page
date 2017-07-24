import React from 'react'

import Resource from '../res/images/Eat Out Logo.png';

import './global.css'
import './Logo.css'

const Logo = () => {
    return (
        <div className="Logo">
            <img src={Resource} alt="eat out logo" />
        </div>
    )
}

export default Logo
import React from 'react'

import Resource from '../res/images/Eat Out Logo.png';

import './global.css'

const Logo = () => {
    return (
        <div id="eo-logo">
            <img src={Resource} alt="eat out logo" />
        </div>
    )
}

export default Logo
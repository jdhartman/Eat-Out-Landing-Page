import React from 'react'

import Resource from '../res/images/iOS-mockup.png'

import './global.css'
import './iOSMockup.css'

const iOSMockup = () => {
    return (
        <div className="iOSMockup"> 
            <img src={Resource} alt="ios mockup" />
        </div>
    )
}

export default iOSMockup
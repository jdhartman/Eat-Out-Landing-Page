import React from 'react'

import Resource from '../res/images/plate.png'

import './global.css'
import './Plate.css'

const Plate = () => {
    return (
        <div className="Plate">
            <img src={Resource} alt="plate" />
        </div>
    )
}

export default Plate
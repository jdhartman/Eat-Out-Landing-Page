import React from 'react'

import JustinPortrait from '../res/images/portraits/justin.PNG'
import TheoPortrait from '../res/images/portraits/theo.PNG'
import ToddPortrait from '../res/images/portraits/todd.jpg'
import GlenPortrait from '../res/images/portraits/glen.jpg'

const Profile = ({name, profile}) => {
    const getResource = (name) => {
        switch (name) {
            case "Justin":
                return JustinPortrait

            case "Theo":
                return TheoPortrait

            case "Todd":
                return ToddPortrait

            case "Glen":
                return GlenPortrait
            
            default:
                return null
        }
    }

    return (
        <li className="profile_pics">
            <a href={profile.url}>
                <img src={getResource(name)} alt={name + " portrait"} />
            </a>

            <a href={profile.url}>
                <p className="portrait_name">
                    {profile.name}
                </p>
            </a>

            <p className="portrait_description">
                {profile.role}
            </p>
        </li>
    )
}

export default Profile
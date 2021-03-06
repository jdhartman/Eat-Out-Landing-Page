import React, { Component } from 'react'

import './Founders.css'

import Profile from './Profile'

class Founders extends Component {
    constructor () {
        super()

        this.state = {
            profiles: {
                Justin: {
                    name: "Justin Hartman",
                    role: "Co-founder / iOS Developer",
                    url: "http://justinhartman.me/"
                },
                Theo: {
                    name: "Theo Burkhart",
                    role: "Co-founder / iOS Developer",
                    url: ""
                },
                Todd: {
                    name: "Todd Griffin",
                    role: "Co-founder / Android Developer",
                    url: "http://magnusfrater.net/"
                },
                Glen: {
                    name: "Glen Eder",
                    role: "Co-founder / Android Developer",
                    url: ""
                }
            }
        }
    }

    render () {
        return (
            <div id="about-div">
                <p id="about-title">Who We Are</p>

                <ul>
                    {Object.keys(this.state.profiles)
                        .map(key => 
                            <Profile
                                name={key}
                                profile={this.state.profiles[key]}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default Founders
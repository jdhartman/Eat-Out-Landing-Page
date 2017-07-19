import React, { Component } from 'react'

import JustinPortrait from './res/images/portraits/justin.PNG'
import TheoPortrait from './res/images/portraits/theo.PNG'
import ToddPortrait from './res/images/portraits/todd.jpg'
import GlenPortrait from './res/images/portraits/glen.jpg'

class Founders extends Component {
    render () {
        return (
            <div id="about-div">
            <p id="about-title">Who We Are</p>

            <ul>
                <li className="profile_pics">
                    <a href="http://justinhartman.me/">
                        <img src={JustinPortrait} />
                    </a>

                    <a href="http://justinhartman.me/">
                        <p className="portrait_name">
                            Justin Hartman
                        </p>
                    </a>

                    <p className="portrait_description">
                        Co-founder / iOS Developer
                    </p>
                </li>

                <li className="profile_pics">
                    <img src={TheoPortrait} />

                    <p className="portrait_name">
                        Theo Burkhart
                    </p>

                    <p className="portrait_description">
                        Co-founder / iOS Developer
                    </p>
                </li>

                <li className="profile_pics">
                    <a href="http://magnusfrater.net/">
                        <img src={ToddPortrait} />
                    </a>

                    <a href="http://magnusfrater.net/">
                        <p className="portrait_name">
                            Todd Griffin
                        </p>
                    </a>

                    <p className="portrait_description">
                        Co-founder / Android Developer
                    </p>
                </li>

                <li className="profile_pics">
                    <img src={GlenPortrait} />

                    <p className="portrait_name">
                        Glen Eder
                    </p>

                    <p className="portrait_description">
                        Co-founder / Android Developer
                    </p>   
                </li>
            </ul>

            <a id="about-join" href="https://docs.google.com/forms/d/e/1FAIpQLScW0bi6960ahp8PqsmlLKOOUAc4V9MR-H77Rq2pFCjdp-yOWg/viewform" target="blank"> 
                <p>Want to join our team?</p>
            </a>
        </div>
        )
    }
}

export default Founders
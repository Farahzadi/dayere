import React from 'react'

import logo from './images/icon.svg'
import './LandingScreen.css'


const LandingScreen = () => (
  <div className="landing-screen">
    <div>
      <img src={logo} width="400" alt="دایره" />
    </div>
    <p>
      <span>
        آن که پرنقش زد این دایره مینایی
      </span>
      <span>
        کس ندانست که در گردش پرگار چه کرد
      </span>
    </p>
  </div>
)

export { LandingScreen }

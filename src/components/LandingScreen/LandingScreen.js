import React from 'react'

import logo from '../../assets/images/icon.svg'
import './LandingScreen.css'


const LandingScreen = () => (
  <div className="landing-screen">
    <section className="landing-screen__content">
      <div>
<<<<<<< HEAD
        <img src={logo} className="landing-screen__img" width="400" alt="دایره" />
=======
        <img src={logo} width="350" alt="دایره" />
>>>>>>> b6105220e9cf9bd1da628793e0664c813d659fc6
      </div>
      <blockquote className="poem landing-screen__poem">
        <span className="poem__verse">
          آن کــه پـــرنــقــش زد ایــن
          <b className="text-orange"> دایـــــره </b>
          میـنـایـی
        </span>
        <span className="poem__verse">
          کس ندانست که در گردش پرگار چه کرد
        </span>
      </blockquote>
      <h1 className="landing-screen__first-header">آژانس تبلیغات دیجیتال دایره</h1>
      <h2 className="landing-screen__second-header">راه حل های خلاق از ایده تا اجرا</h2>
    </section>
    <a href="/ba" className="landing-screen__pager">
      <span className="icon ion-ios-arrow-down" />
    </a>
  </div>
)

export { LandingScreen }

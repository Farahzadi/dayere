import React from 'react'
import MediaQuery from 'react-responsive'

import './Footer.css'
import telephone from '../../assets/images/old-typical-phone.svg'
import email from '../../assets/images/at.svg'
import telegram from '../../assets/images/social-media/telegram-logo.svg'
import instagram from '../../assets/images/social-media/instagram-logo.svg'
import linkedin from '../../assets/images/social-media/linkedin-logo.svg'
import twitter from '../../assets/images/social-media/twitter-logo.svg'


const Footer = () => (
  <footer>
    <div className="footer">
      <div className="container footer-content">
        <MediaQuery query="screen and (min-width: 768px)" className="contact-section">
          <img className="contact-section__icon" src={email} alt="email" />
          <a href="mailto:info@dayeread.ir" className="contact-section__link">
            info[at]dayeread.ir
          </a>
        </MediaQuery>
        <MediaQuery query="screen and (min-width: 768px)" className="contact-section">
          <img className="contact-section__icon" src={telephone} alt="telephone" />
          <a href="tel:02122069682" className="contact-section__link">
            02122069682
          </a>
        </MediaQuery>
        <div className="contact-section social-row">
          <a className="social-icon" href="">
            <img height="24" src={telegram} alt="telegram" />
          </a>
          <a className="social-icon" href="">
            <img height="24" src={instagram} alt="instagram" />
          </a>
          <a className="social-icon" href="">
            <img height="24" src={linkedin} alt="linkedin" />
          </a>
          <a className="social-icon" href="">
            <img height="24" src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
    <MediaQuery query="screen and (max-width: 767px)" className="contact-container">
      <div className="contact-section">
        <span className="icon ion-email" style={{ fontSize: 32, marginRight: 5 }} />
        <a href="mailto:info@dayeread.ir" className="contact-section__link">
          info[at]dayeread.ir
        </a>
      </div>
      <div className="contact-section">
        <span className="icon ion-ios-telephone" style={{ fontSize: 32, marginRight: 5 }} />
        <a href="tel:02122069682" className="contact-section__link">
          02122069682
        </a>
      </div>
    </MediaQuery>
  </footer>
)


export { Footer }

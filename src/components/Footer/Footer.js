import React from 'react'

import './Footer.css'
import telephone from '../../assets/images/old-typical-phone.svg'
import email from '../../assets/images/at.svg'


const Footer = () => (
  <footer className="footer">
    <div className="container footer-content">
      <div className="contact-section">
        <img className="contact-section__icon" src={email} alt="email" />
        <a href="mailto:info@dayeread.ir" className="contact-section__link">
          info[at]dayeread.ir
        </a>
      </div>
      <div className="contact-section">
        <img className="contact-section__icon" src={telephone} alt="telephone" />
        <a href="tel:02122069682" className="contact-section__link">
          02122069682
        </a>
      </div>
    </div>
  </footer>
)


export { Footer }

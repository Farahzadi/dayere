import React from 'react'

import './BuildYourCircleScreen.css'
import website from '../../assets/images/004-search-engine.svg'
import mobile from '../../assets/images/003-smartphone.svg'
import graphic from '../../assets/images/001-editor.svg'
import seo from '../../assets/images/seo-tag.svg'
import market from '../../assets/images/002-presentation.svg'
import social from '../../assets/images/005-share.svg'


const BuildYourCircleScreen = () => (
  <div className="content">
    <div className="container">
      <h1 className="circle-title">چه خدماتی نیاز داری</h1>
      <div className="grid">
        <div className="col">
          <div className="choice-box">
            <img src={website} alt="website" />
            <h2 className="choice-box__title">وب سایت</h2>
          </div>
        </div>
        <div className="col">
          <div className="choice-box">
            <img src={mobile} alt="mobile" />
            <h2 className="choice-box__title">برنامه موبایل</h2>
          </div>
        </div>
        <div className="col">
          <div className="choice-box">
            <img src={graphic} alt="Graphic Design" />
            <h2 className="choice-box__title">گرافیک</h2>
          </div>
        </div>
        <div className="col">
          <div className="choice-box">
            <img src={seo} alt="SEO" />
            <h2 className="choice-box__title">بهینه‌سازی موتور جستجو</h2>
          </div>
        </div>
        <div className="col">
          <div className="choice-box">
            <img src={market} alt="Market Research" />
            <h2 className="choice-box__title">تحقیقات بازار</h2>
          </div>
        </div>
        <div className="col">
          <div className="choice-box">
            <img src={social} alt="Social Media" />
            <h2 className="choice-box__title">شبکه‌های اجتماعی</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export { BuildYourCircleScreen }

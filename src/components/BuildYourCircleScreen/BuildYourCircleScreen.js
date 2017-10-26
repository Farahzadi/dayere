import React from 'react'

import './BuildYourCircleScreen.css'
import website from '../../assets/images/004-search-engine.svg'
import mobile from '../../assets/images/003-smartphone.svg'
import graphic from '../../assets/images/001-editor.svg'
import seo from '../../assets/images/seo-tag.svg'
import market from '../../assets/images/002-presentation.svg'
import social from '../../assets/images/005-share.svg'
import ellipsis from '../../assets/images/ellipsis.svg'


const BuildYourCircleScreen = () => (
  <div className="content">
    <div className="container">
      <h1 className="circle-title">چه خدماتی نیاز داری</h1>
      <div className="grid">
        <div className="col">
          <a href="" className="choice-box">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={website} alt="website" />
              <h2 className="choice-box__title">وب سایت</h2>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <input type="checkbox" checkbox="" />
                <span className="ion-android-checkmark-circle pretty-checkbox" />
              </div>
            </div>
            <div className="choice-box__body">
              طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت
            </div>
          </a>
        </div>
        <div className="col">
          <a href="" className="choice-box">
            <div>
              <img src={mobile} alt="mobile" />
              <h2 className="choice-box__title">برنامه موبایل</h2>
            </div>
            <div className="choice-box__body">
              طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت
            </div>
          </a>
        </div>
        <div className="col">
          <a href="" className="choice-box">
            <div>
              <img src={graphic} alt="Graphic Design" />
              <h2 className="choice-box__title">گرافیک</h2>
            </div>
            <div className="choice-box__body">
              طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت
            </div>
          </a>
        </div>
        <div className="col">
          <a href="" className="choice-box">
            <div>
              <img src={seo} alt="SEO" />
              <h2 className="choice-box__title">بهینه‌سازی موتور جستجو</h2>
            </div>
            <div className="choice-box__body">
              طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت
            </div>
          </a>
        </div>
        <div className="col">
          <a href="" className="choice-box">
            <div>
              <img src={market} alt="Market Research" />
              <h2 className="choice-box__title">تحقیقات بازار</h2>
            </div>
            <div className="choice-box__body">
              طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت
            </div>
          </a>
        </div>
        <div className="col">
          <a href="" className="choice-box">
            <div>
              <img src={social} alt="Social Media" />
              <h2 className="choice-box__title">شبکه‌های اجتماعی</h2>
            </div>
            <div className="choice-box__body">
              طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت
            </div>
          </a>
        </div>
      </div>
      <div className="choice-box" style={{ margin: 20 }}>
        <div>
          <img src={ellipsis} alt="" width="40" height="50" />
          <h2 className="choice-box__title">توضیح بیشتر</h2>
        </div>
        <div className="choice-box__body" style={{ alignItems: 'stretch' }}>
          <textarea className="input" />
        </div>
      </div>
      <div style={{ textAlign: 'left', marginBottom: 20 }}>
        <button className="button">ارسال</button>
      </div>
    </div>
  </div>
)


export { BuildYourCircleScreen }

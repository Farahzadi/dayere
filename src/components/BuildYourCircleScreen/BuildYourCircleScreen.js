import React from 'react'

import './BuildYourCircleScreen.css'
import website from '../../assets/images/004-search-engine.svg'
import mobile from '../../assets/images/003-smartphone.svg'
import graphic from '../../assets/images/001-editor.svg'
import seo from '../../assets/images/seo-tag.svg'
import market from '../../assets/images/002-presentation.svg'
import social from '../../assets/images/005-share.svg'
import ellipsis from '../../assets/images/ellipsis.svg'
import { ChoiceBox } from './ChoiceBox'


const BuildYourCircleScreen = () => (
  <div className="content">
    <div className="container">
      <h1 className="circle-title">چه خدماتی نیاز داری</h1>
      <div className="grid">
        <div className="col">
          <ChoiceBox
            image={website}
            title="وب سایت"
            text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
          />
        </div>
        <div className="col">
          <ChoiceBox
            image={mobile}
            title="برنامه موبایل"
            text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
          />
        </div>
        <div className="col">
          <ChoiceBox
            image={graphic}
            title="گرافیک"
            text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
          />
        </div>
        <div className="col">
          <ChoiceBox
            image={seo}
            title="بهینه‌سازی موتور جستجو"
            text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
          />
        </div>
        <div className="col">
          <ChoiceBox
            image={market}
            title="تحقیقات بازار"
            text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
          />
        </div>
        <div className="col">
          <ChoiceBox
            image={social}
            title="شبکه‌های اجتماعی"
            text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
          />
        </div>
      </div>
      <div
        className="choice-box"
        style={{
          margin: '20px 25px',
          cursor: 'default'
        }}
      >
        <div>
          <img src={ellipsis} alt="" width="40" height="50" />
          <h2 className="choice-box__title">توضیح بیشتر</h2>
        </div>
        <div className="choice-box__body" style={{ alignItems: 'stretch' }}>
          <textarea className="input" placeholder="اینجا بنویس..." />
        </div>
      </div>
      <div style={{ textAlign: 'left', marginBottom: 20 }}>
        <button className="button">ارسال</button>
      </div>
    </div>
  </div>
)


export { BuildYourCircleScreen }

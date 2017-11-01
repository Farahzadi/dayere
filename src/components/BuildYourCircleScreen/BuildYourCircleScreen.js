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
    <form className="container">
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
          <textarea className="input textarea" name="explanation" placeholder="اینجا بنویس..." />
        </div>
      </div>
      <fieldset>
        <legend>اطلاعات تماس</legend>
        <div className="grid">
          <div className="col form-container">
            <label className="form-label" htmlFor="firstName">نام</label>
            <input required id="firstName" name="firstName" className="input" type="text" />
          </div>
          <div className="col form-container">
            <label className="form-label" htmlFor="lastName">نام خانوادگی</label>
            <input required id="lastName" name="lastName" className="input" type="text" />
          </div>
          <div className="col form-container">
            <label className="form-label" htmlFor="telephone">تلفن</label>
            <input id="telephone" name="telephone" className="input" type="text" />
          </div>
          <div className="col form-container">
            <label className="form-label" htmlFor="email">ایمیل</label>
            <input required id="email" name="email" className="input" type="text" />
          </div>
          <div className="col form-container">
            <label className="form-label" htmlFor="organization">سازمان / شرکت</label>
            <input id="organization" name="organization" className="input" type="text" />
          </div>
          <div className="col" style={{ textAlign: 'left' }}>
            <button className="button">ارسال</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
)


export { BuildYourCircleScreen }

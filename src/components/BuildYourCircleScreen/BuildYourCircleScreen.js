import React from 'react'
import axios from 'axios'

import './BuildYourCircleScreen.css'
import website from '../../assets/images/004-search-engine.svg'
import mobile from '../../assets/images/003-smartphone.svg'
import graphic from '../../assets/images/001-editor.svg'
import seo from '../../assets/images/seo-tag.svg'
import market from '../../assets/images/002-presentation.svg'
import social from '../../assets/images/005-share.svg'
import ellipsis from '../../assets/images/ellipsis.svg'
import { ChoiceBox } from './ChoiceBox'


class BuildYourCircleScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        explanation: '',
        services: []
      }
    }
  }

  handleChage = key => (e) => {
    const { formData } = this.state
    formData[key] = e.target.value
    this.setState({ formData })
  }

  sendForm = async (e) => {
    e.preventDefault()
    const { services, ...data } = this.state.formData
    data.services = services.join(', ')
    data['_subject'] = 'فرم سفارش'
    this.setState({ loading: true })
    const result = await axios.post('https://formspree.io/info@dayeread.ir', data)
    this.setState({ loading: false })
    console.log(result)
  }

  handleService = (service) => {
    const { formData } = this.state
    const services = formData.services
    const newServices = services.indexOf(service) === -1 ?
      services.concat([service]) : services.filter(item => item !== service)
    formData.services = newServices
    this.setState({ formData })
  }

  render() {
    const { loading } = this.state
    return (
      <div className="content">
        <form className="container" onSubmit={this.sendForm}>
          <fieldset disabled={loading}>
            <input type="hidden" name="_subject" value="سفارش" />
            <h1 className="circle-title">چه خدماتی نیاز داری</h1>
            <div className="grid">
              <div className="col">
                <ChoiceBox
                  disabled={loading}
                  onClick={this.handleService}
                  image={website}
                  title="وب سایت"
                  text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
                />
              </div>
              <div className="col">
                <ChoiceBox
                  disabled={loading}
                  onClick={this.handleService}
                  image={mobile}
                  title="برنامه موبایل"
                  text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
                />
              </div>
              <div className="col">
                <ChoiceBox
                  disabled={loading}
                  onClick={this.handleService}
                  image={graphic}
                  title="گرافیک"
                  text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
                />
              </div>
              <div className="col">
                <ChoiceBox
                  disabled={loading}
                  onClick={this.handleService}
                  image={seo}
                  title="بهینه‌سازی موتور جستجو"
                  text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
                />
              </div>
              <div className="col">
                <ChoiceBox
                  disabled={loading}
                  onClick={this.handleService}
                  image={market}
                  title="تحقیقات بازار"
                  text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
                />
              </div>
              <div className="col">
                <ChoiceBox
                  disabled={loading}
                  onClick={this.handleService}
                  image={social}
                  title="شبکه‌های اجتماعی"
                  text="طراحی و توسعه وب سایت شما در کمترین زمان و بهترین کیفیت"
                />
              </div>
            </div>
            <div className="choice-box text-area-container">
              <div>
                <img src={ellipsis} alt="" width="40" height="50" />
                <h2 className="choice-box__title">توضیح بیشتر</h2>
              </div>
              <div className="choice-box__body" style={{ alignItems: 'stretch' }}>
                <textarea onChange={this.handleChage('explanation')} className="input textarea" name="explanation" placeholder="اینجا بنویس..." />
              </div>
            </div>
            <fieldset>
              <legend>اطلاعات تماس</legend>
              <div className="grid">
                <div className="col form-container">
                  <label className="form-label" htmlFor="firstName">نام</label>
                  <input onChange={this.handleChage('firstName')} required id="firstName" name="firstName" className="input" type="text" />
                </div>
                <div className="col form-container">
                  <label className="form-label" htmlFor="lastName">نام خانوادگی</label>
                  <input onChange={this.handleChage('lastName')} required id="lastName" name="lastName" className="input" type="text" />
                </div>
                <div className="col form-container">
                  <label className="form-label" htmlFor="telephone">تلفن</label>
                  <input onChange={this.handleChage('telephone')} id="telephone" name="telephone" className="input" type="text" />
                </div>
                <div className="col form-container">
                  <label className="form-label" htmlFor="email">ایمیل</label>
                  <input onChange={this.handleChage('email')} required id="email" name="email" className="input" type="email" />
                </div>
                <div className="col form-container">
                  <label className="form-label" htmlFor="organization">سازمان / شرکت</label>
                  <input onChange={this.handleChage('organization')} id="organization" name="organization" className="input" type="text" />
                </div>
                <div className="col" style={{ textAlign: 'left' }}>
                  <button className="button">ارسال</button>
                </div>
              </div>
            </fieldset>
          </fieldset>
        </form>
      </div>
    )
  }
}


export { BuildYourCircleScreen }

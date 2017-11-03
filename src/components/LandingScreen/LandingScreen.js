import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Transition
} from 'react-transition-group'

import logo from '../../assets/images/icon.svg'
import './LandingScreen.css'

const defaultStyle = {
  transition: 'all 1s'
}

const transitionStyle = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
}

const Fade = ({ children, ...props }) => (
  <Transition timeout={300} appear {...props}>
    {
      state => (
        <div style={{ ...defaultStyle, ...transitionStyle[state] }}>
          {children}
        </div>
      )
    }
  </Transition>
)

class LandingScreen extends React.Component {
  componentDidMount() {
    document.ontouchmove = (e) => { e.preventDefault() }
  }

  componentWillUnmount() {
    document.ontouchmove = () => true
  }

  render() {
    return (
      <Fade in>
        <div className="landing-screen">
          <section className="landing-screen__content">
            <div>
              <img className="landing-screen__img" src={logo} width="350" alt="دایره" />
            </div>
            <blockquote className="poem landing-screen__poem">
              <span className="poem__verse">
                آن کـه پرنقش زد ایـن
                <b className="text-orange"> دایـــره </b>
                مینایی
              </span>
              <span className="poem__verse">
                کس ندانست که در گردش پرگار چه کرد
              </span>
            </blockquote>
            <h1 className="landing-screen__first-header">آژانس تبلیغات دیجیتال دایره</h1>
            <h2 className="landing-screen__second-header">راه حل های خلاق از ایده تا اجرا</h2>
          </section>
          <Link to="/what-we-do" className="landing-screen__pager">
            <span className="icon ion-ios-arrow-down" />
          </Link>
        </div>
      </Fade>
    )
  }
}

export { LandingScreen }

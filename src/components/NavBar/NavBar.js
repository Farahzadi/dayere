import React from 'react'
import MediaQuery from 'react-responsive'
import Hamburger from 'react-hamburgers'

import 'hamburgers/dist/hamburgers.min.css'

import './NavBar.css'
import logo from '../../assets/images/icon.svg'
import { Footer } from '../Footer'


class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  render() {
    const { children } = this.props
    const { active } = this.state
    return (
      <nav className="nav-bar">
        <ul className="container nav-bar__container">
          <img src={logo} alt="دایره" style={{ height: 74 }} />
          <MediaQuery query="screen and (min-width: 1024px)">
            <ul className="nav-bar__list">
              {children}
            </ul>
          </MediaQuery>
          <MediaQuery query="screen and (max-width: 1023px)">
            <Hamburger
              type="spin"
              active={active}
              style={{ position: 'fixed', left: 5, outline: 'none', zIndex: 1, top: 20 }}
              onClick={() => { this.setState({ active: !active }) }}
            />
            <div className={active ? 'side-nav is-selected' : 'side-nav'}>
              <ul className="side-nav__list">
                {children}
              </ul>
              <Footer />
            </div>
          </MediaQuery>
        </ul>
      </nav>
    )
  }
}

export { NavBar }

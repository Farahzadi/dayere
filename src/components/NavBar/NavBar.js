import React from 'react'

import './NavBar.css'
import logo from '../../assets/images/icon.svg'


const NavBar = ({ children }) => (
  <nav className="nav-bar">
    <div className="container nav-bar__container">
      <img src={logo} alt="دایره" style={{ height: 74 }} />
      <ul className="nav-bar__list">
        {children}
      </ul>
    </div>
  </nav>
)

export { NavBar }

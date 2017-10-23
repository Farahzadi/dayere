import React from 'react'

import './NavBar.css'
import logo from '../../assets/images/icon.svg'


const NavBar = ({ children, selected }) => (
  <nav className="nav-bar">
    {selected}
    <img src={logo} alt="دایره" style={{ height: 90 }}/>
    <ul className="nav-bar__list">
      {children}
    </ul>
  </nav>
)

export { NavBar }

import React from 'react'
import {
  Link
} from 'react-router-dom'


const NavItem = ({ children, selected, to }) => (
  <li>
    {
      React.Children.map(children, child => (
        <Link
          className={
            selected === to ? 'nav-bar__link is-selected' : 'nav-bar__link'
          }
          to={to}
        >{child}</Link>
      ))
    }
  </li>
)

export { NavItem }

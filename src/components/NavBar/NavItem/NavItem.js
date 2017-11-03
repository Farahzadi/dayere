import React from 'react'
import {
  Link
} from 'react-router-dom'
import MediaQuery from 'react-responsive'


const NavItem = ({ children, selected, to }) => (
  <li>
    <MediaQuery query="screen and (min-width: 1024px)">
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
    </MediaQuery>
    <MediaQuery query="screen and (max-width: 1023px)">
      {
        React.Children.map(children, child => (
          <Link
            className={
              selected === to ? 'side-nav__link is-selected' : 'side-nav__link'
            }
            to={to}
          >{child}</Link>
        ))
      }
    </MediaQuery>
  </li>
)

export { NavItem }

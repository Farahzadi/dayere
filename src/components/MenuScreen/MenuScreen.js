import React from 'react'
import {
  Route
} from 'react-router-dom'

import { AboutScreen } from '../AboutScreen'
import { WhatWeDoScreen } from '../WhatWeDoScreen'
import { BuildYourCircleScreen } from '../BuildYourCircleScreen'
import { NavBar, NavItem } from '../NavBar'
import { Footer } from '../Footer'

const MenuScreen = ({ match }) => (
  <div>
    <NavBar>
      <NavItem selected={match.path} to="/how-we-built-our-circle">
        چطور دایرمون رو ساختیم
      </NavItem>
      <NavItem selected={match.path} to="/what-we-do">
        چکار میکنیم
      </NavItem>
      <NavItem selected={match.path} to="/build-your-circle">
        دایره خودتو بساز
      </NavItem>
    </NavBar>
    <Route path="/how-we-built-our-circle" component={AboutScreen} />
    <Route path="/what-we-do" component={WhatWeDoScreen} />
    <Route path="/build-your-circle" component={BuildYourCircleScreen} />
    <Footer />
  </div>
)


export { MenuScreen }

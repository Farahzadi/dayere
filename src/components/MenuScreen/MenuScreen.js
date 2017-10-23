import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { AboutScreen } from '../AboutScreen'
import { WhatWeDoScreen } from '../WhatWeDoScreen'
import { BuildYourCircleScreen } from '../BuildYourCircleScreen'
import { NavBar, NavItem } from '../NavBar'

const MenuScreen = () => (
  <div>
    <NavBar>
      <NavItem>چطور دایرمون رو ساختیم</NavItem>
      <NavItem>چکار میکنیم</NavItem>
      <NavItem>دایره خودتو بساز</NavItem>
    </NavBar>
    <Router>
      <div>
        <Route path="/how-we-built-our-circle" component={AboutScreen} />
        <Route path="/what-we-do" component={WhatWeDoScreen} />
        <Route path="/build-your-circle" component={BuildYourCircleScreen} />
      </div>
    </Router>
  </div>
)


export { MenuScreen }

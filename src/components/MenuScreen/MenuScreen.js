import React from 'react'
import {
  Route
} from 'react-router-dom'
import MediaQuery from 'react-responsive'

import { AboutScreen } from '../AboutScreen'
import { WhatWeDoScreen } from '../WhatWeDoScreen'
import { BuildYourCircleScreen } from '../BuildYourCircleScreen'
import { NavBar, NavItem } from '../NavBar'
import { Footer } from '../Footer'

const MenuScreen = ({ match }) => (
  <div>
    <header>
      <NavBar>
        <NavItem selected={match.path} to="/what-we-do">
          چکار میکنیم
        </NavItem>
        <NavItem selected={match.path} to="/build-your-circle">
          دایره خودتو بساز
        </NavItem>
      </NavBar>
    </header>
    <Route path="/what-we-do" component={WhatWeDoScreen} />
    <Route path="/build-your-circle" component={BuildYourCircleScreen} />
    <MediaQuery query="screen and (min-width: 1024px)">
      <Footer />
    </MediaQuery>
  </div>
)


export { MenuScreen }

import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { AboutScreen } from '../AboutScreen'
import { WhatWeDoScreen } from '../WhatWeDoScreen'
import { BuildYourCircleScreen } from '../BuildYourCircleScreen'

const MenuScreen = () => (
  <Router>
    <div>
      <Route path="/how-we-built-our-circle" component={AboutScreen} />
      <Route path="/what-we-do" component={WhatWeDoScreen} />
      <Route path="/build-your-circle" component={BuildYourCircleScreen} />
    </div>
  </Router>
)


export { MenuScreen }

import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { WhatWeDoScreen } from '../WhatWeDoScreen'

const MenuScreen = () => (
  <Router>
    <div>
      <Route path="/what-we-do" component={WhatWeDoScreen} />
    </div>
  </Router>
)


export { MenuScreen }

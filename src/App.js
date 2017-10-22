import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { LandingScreen } from './components/LandingScreen'
import { WhatWeDoScreen } from './components/WhatWeDoScreen'
import './App.css'


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingScreen} />
      <Route path="/what-we-do" component={WhatWeDoScreen} />
    </div>
  </Router>
)

export default App

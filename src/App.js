import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { LandingScreen } from './components/LandingScreen'
import { MenuScreen } from './components/MenuScreen'
import './App.css'


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingScreen} />
      <Route path="/what-we-do" component={MenuScreen} />
    </div>
  </Router>
)

export default App

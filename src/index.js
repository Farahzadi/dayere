import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './assets/vendor/ionicons-2.0.1/css/ionicons.min.css'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

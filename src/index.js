import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'

import './index.css'

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
)
registerServiceWorker()

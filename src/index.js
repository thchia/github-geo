import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import rootReducer from './reducers'

import './index.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

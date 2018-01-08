import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import registerServiceWorker from './registerServiceWorker'

import App from './components/App'
import ErrorBoundary from './components/ErrorBoundary'
import rootReducer from './reducers'
import makeRootSaga from './sagas'

import './index.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(makeRootSaga())

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

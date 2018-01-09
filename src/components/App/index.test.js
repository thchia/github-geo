import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './'
import ErrorBoundary from '../../components/ErrorBoundary'
import rootReducer from '../../reducers'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const store = createStore(rootReducer)
  const wrapper = (
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  )
  ReactDOM.render(wrapper, div)
})

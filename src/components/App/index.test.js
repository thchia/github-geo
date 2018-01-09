import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ConnectedApp, { App, defaultStyles } from './'
import ErrorView from '../ErrorView'
import MapView from '../MapView'
import ToolbarView from '../ToolbarView'
import rootReducer from '../../reducers'

describe('App component', () => {
  let wrapper
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
    wrapper = shallow(<App />)
  })
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const store = createStore(rootReducer)
    const wrapper = (
      <Provider store={store}>
        <ConnectedApp />
      </Provider>
    )
    ReactDOM.render(wrapper, div)
  })

  it('renders div with correct styles', () => {
    const div = wrapper.find('div')
    const renderedStyles = div.props().style
    expect(div.length).toBe(1)
    expect(renderedStyles).toEqual(defaultStyles)
  })

  it('renders MapView', () => {
    expect(wrapper.find(MapView).length).toBe(1)
  })

  it('renders ToolBarView', () => {
    expect(wrapper.find(ToolbarView).length).toBe(1)
  })

  it('renders ErrorView', () => {
    expect(wrapper.find(ErrorView).length).toBe(1)
  })
})

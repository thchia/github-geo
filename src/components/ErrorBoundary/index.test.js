import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ErrorBoundary from './'

const MockComponent = () => <div>Mock</div>

describe('ErrorBoundary component', () => {
  let makeWrapper
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
    makeWrapper = (Child = () => 'empty') =>
      mount(
        <ErrorBoundary>
          <Child />
        </ErrorBoundary>
      )
  })

  it('renders', () => {
    expect(makeWrapper()).toBeDefined()
  })

  it('sets state if it catches', () => {
    const wrapper = makeWrapper(() => {
      throw new Error('Error')
      return <div>Error</div>
    })
    const expectedState = expect.objectContaining({
      hasError: true
    })
    expect(wrapper.state()).toEqual(expectedState)
    expect(wrapper.find('div').length).toBe(1)
  })

  it('renders child if it does not catch', () => {
    const wrapper = makeWrapper(MockComponent)
    const renderedChild = wrapper.find(MockComponent)
    expect(renderedChild.length).toBe(1)
  })
})

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Message } from 'semantic-ui-react'

import ErrorView, { styles } from './'

describe('ErrorView', () => {
  let placeholderProps, wrapper
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
    placeholderProps = {
      error: 'Test Error'
    }
    wrapper = shallow(<ErrorView {...placeholderProps} />)
  })

  it('renders container div', () => {
    const containerDiv = wrapper.find('div').at(0)
    const renderedStyles = containerDiv.props().style
    expect(containerDiv.length).toBe(1)
    expect(renderedStyles).toEqual(styles.container)
  })

  it('renders Message if error is present', () => {
    const renderedMessage = wrapper.find(Message)
    expect(renderedMessage.length).toBe(1)
  })

  it('does not render Message if there are no errors', () => {
    wrapper.setProps({ error: '' })
    const renderedMessage = wrapper.find(Message)
    expect(renderedMessage.length).toBe(0)
  })
})

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Image, Loader, Message } from 'semantic-ui-react'

import { CountryDetails, styles } from './'

describe('CountryDetails component', () => {
  let placeholderProps, wrapper
  beforeAll(() => {
    placeholderProps = {
      countryName: 'Singapore',
      fetching: false,
      error: '',
      topFollowed: [{ avatar_url: 'url' }],
      userCount: 8,
      fetchStatistics: jest.fn()
    }
    Enzyme.configure({ adapter: new Adapter() })
    wrapper = shallow(<CountryDetails {...placeholderProps} />)
  })

  it('calls props.fetchStatistics', () => {
    expect(placeholderProps.fetchStatistics).toHaveBeenCalled()
  })

  it('renders container div with correct styles', () => {
    const containerDiv = wrapper.find('div').at(0)
    const renderedStyles = containerDiv.props().style
    expect(containerDiv.length).toBe(1)
    expect(renderedStyles).toEqual(styles.container)
  })

  it('renders header div', () => {
    const headerDiv = wrapper.find('div').at(1)
    const renderedStyles = headerDiv.props().style
    const renderedText = headerDiv.text()
    expect(headerDiv.length).toBe(1)
    expect(renderedStyles).toEqual(styles.header)
    expect(renderedText).toEqual(placeholderProps.countryName)
  })

  it('renders meta div if fetching and error props are falsy', () => {
    wrapper.setProps({ fetching: false, error: '' })
    const metaDiv = wrapper.find('div').at(2)
    const renderedStyles = metaDiv.props().style
    const renderedText = metaDiv.text()
    expect(metaDiv.length).toBe(1)
    expect(renderedStyles).toEqual(styles.meta)
    expect(renderedText).toEqual('8 users')
  })

  it('renders no meta div if fetching is true', () => {
    wrapper.setProps({ fetching: true })
    const metaDiv = wrapper.findWhere(node => node.text() === '8 users')
    expect(metaDiv.length).toBe(0)
  })

  it('renders content div', () => {
    wrapper.setProps(placeholderProps)
    const contentDiv = wrapper.find('div').at(3)
    const renderedStyles = contentDiv.props().style
    expect(contentDiv.length).toBe(1)
    expect(renderedStyles).toEqual(styles.content)
  })

  it('renders Loader if fetching', () => {
    wrapper.setProps({ fetching: true })
    const renderedLoader = wrapper.find(Loader)
    expect(renderedLoader.length).toBe(1)
    expect(wrapper.find(Message).length).toBe(0)
  })

  it('renders Message if error', () => {
    wrapper.setProps({ ...placeholderProps, error: 'Test Error' })
    const renderedMessage = wrapper.find(Message)
    expect(renderedMessage.length).toBe(1)
  })

  it('renders Image if not fetching and no error', () => {
    wrapper.setProps(placeholderProps)
    const renderedImages = wrapper.find(Image)
    const expectedLength = placeholderProps.topFollowed.length
    expect(renderedImages.length).toBe(1)
  })
})

import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ToolbarView, styles } from './'
import CountryDropdown from '../CountryDropdown'

describe('ToolbarView component', () => {
  let placeholderProps, wrapper
  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() })
    placeholderProps = {
      countryName: 'Germany',
      fetchingCoordinates: false,
      handleChangeCountry: jest.fn()
    }
    wrapper = shallow(<ToolbarView {...placeholderProps} />)
  })

  it('renders container div', () => {
    const containerDiv = wrapper.find('div').at(0)
    const renderedProps = containerDiv.props()
    expect(containerDiv.length).toBe(1)
    expect(renderedProps.style).toEqual(styles.container)
  })

  it('renders CountryDropdown', () => {
    const renderedDropdown = wrapper.find(CountryDropdown)
    const renderedProps = renderedDropdown.props()
    const expectedProps = expect.objectContaining({
      fetching: placeholderProps.fetchingCoordinates,
      value: placeholderProps.countryName,
      handleChange: placeholderProps.handleChangeCountry
    })
    expect(renderedDropdown.length).toBe(1)
    expect(renderedProps).toEqual(expectedProps)
  })
})

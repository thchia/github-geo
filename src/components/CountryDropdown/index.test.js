import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dropdown } from 'semantic-ui-react'

import CountryDropdown from './'

describe('CountryDropdown component', () => {
  let placeholderProps, wrapper
  beforeAll(() => {
    placeholderProps = {
      handleChange: jest.fn(),
      fetching: false,
      value: ''
    }
    Enzyme.configure({ adapter: new Adapter() })
    wrapper = shallow(<CountryDropdown {...placeholderProps} />)
  })

  it('renders Dropdown with passed props', () => {
    const renderedDropdown = wrapper.find(Dropdown)
    const props = renderedDropdown.props()
    expect(renderedDropdown.length).toBe(1)
    expect(props.onChange).toEqual(placeholderProps.handleChange)
    expect(props.loading).toEqual(placeholderProps.fetching)
    expect(props.value).toEqual(placeholderProps.value)
  })
})

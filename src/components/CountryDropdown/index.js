import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import countries from '../../assets/countries'

export default props => {
  const countryOptions = countries.map(country => ({
    text: country,
    value: country
  }))
  return (
    <Dropdown
      onChange={props.onChange}
      options={countryOptions}
      placeholder="Search for a country"
      selection
      selectOnNavigation={false}
    />
  )
}

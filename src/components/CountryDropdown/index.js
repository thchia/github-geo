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
      onChange={props.handleChange}
      options={countryOptions}
      loading={props.fetching}
      placeholder="Search for a country"
      search
      selection
      selectOnNavigation={false}
      value={props.value}
    />
  )
}

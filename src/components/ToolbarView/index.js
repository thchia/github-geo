import React from 'react'

import CountryDropdown from '../CountryDropdown'
import wrapper from './container'

export const ToolbarView = props => (
  <div style={styles.container}>
    <CountryDropdown
      fetching={props.fetchingCountry}
      handleChange={props.handleChangeCountry}
      value={props.countryName}
    />
  </div>
)

export default wrapper(ToolbarView)

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  }
}

import React from 'react'

import CountryDropdown from '../CountryDropdown'

export default () => (
  <div style={styles.container}>
    <CountryDropdown />
  </div>
)

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

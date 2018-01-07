import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default () => (
  <div style={styles.container}>
    <Dropdown options={[]} placeholder="Search for a country" selection />
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

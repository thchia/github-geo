import React from 'react'
import { Message } from 'semantic-ui-react'

export default props => (
  <div style={styles.container}>
    {props.error ? (
      <div>
        <Message compact error size="small">
          {props.error}
        </Message>
      </div>
    ) : null}
  </div>
)

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

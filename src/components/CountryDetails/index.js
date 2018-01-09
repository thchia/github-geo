import React from 'react'
import { Image, Loader, Message } from 'semantic-ui-react'

import wrapper from './container'

export class CountryDetails extends React.Component {
  componentDidMount() {
    this.props.fetchStatistics()
  }

  renderAvatars(list) {
    return list.map(user => user.avatar_url).map(url => (
      <div key={url} style={styles.image}>
        <Image size="mini" src={url} />
      </div>
    ))
  }

  render() {
    const { props } = this
    return (
      <div style={styles.container}>
        <div style={styles.header}>{props.countryName}</div>
        {props.fetching || props.error ? null : (
          <div style={styles.meta}>{props.userCount} users</div>
        )}
        <div style={styles.content}>
          {props.fetching ? (
            <Loader active inline="centered" />
          ) : props.error ? (
            <Message error size="mini">
              {props.error}
            </Message>
          ) : (
            this.renderAvatars(props.topFollowed)
          )}
        </div>
      </div>
    )
  }
}

export default wrapper(CountryDetails)

export const styles = {
  container: {
    backgroundColor: 'white',
    padding: 5,
    minWidth: 200,
    minHeight: 200,
    borderRadius: 4,
    border: 'solid 1px lightgrey',
    cursor: 'default'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  header: {
    fontWeight: 'bold',
    fontSize: '2em'
  },
  meta: {
    opacity: 0.5,
    padding: '5px 0px',
    fontSize: '1.2em'
  },
  image: {
    display: 'inline-block',
    padding: 5
  }
}

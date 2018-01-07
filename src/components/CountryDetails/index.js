import React from 'react'
import { Image, Loader, Message } from 'semantic-ui-react'

const githubEndpoint = 'https://api.github.com/search'

export default class CountryDetails extends React.Component {
  constructor() {
    super()
    this.state = {
      fetching: false,
      numberOfUsers: -1,
      topAvatars: [],
      error: ''
    }
  }

  componentDidMount() {
    this.setState({ fetching: true, error: '' })
    const endpoint = `${githubEndpoint}/users?q=location:${
      this.props.countryName
    }&sort=followers&order=asc`
    let getCountryDetails = fetch(endpoint)
    getCountryDetails.then(res => res.json()).then(res => {
      const { total_count, items } = res
      const topAvatars = items.slice(0, 10).map(user => user.avatar_url)
      this.setState({ numberOfUsers: total_count, topAvatars, fetching: false })
    })
    getCountryDetails.catch(err =>
      this.setState({
        fetching: false,
        error: 'Error fetching country details.'
      })
    )
  }

  renderAvatars(list) {
    return list.map(url => (
      <div key={url} style={styles.image}>
        <Image size="mini" src={url} />
      </div>
    ))
  }

  render() {
    const { props, state } = this
    return (
      <div style={styles.container}>
        <div style={styles.header}>{props.countryName}</div>
        {state.fetching || state.error ? null : (
          <div style={styles.meta}>{state.numberOfUsers} users</div>
        )}
        <div style={styles.content}>
          {state.fetching ? (
            <Loader active inline="centered" />
          ) : state.error ? (
            <Message error size="mini">
              {state.error}
            </Message>
          ) : (
            this.renderAvatars(state.topAvatars)
          )}
        </div>
      </div>
    )
  }
}

const styles = {
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

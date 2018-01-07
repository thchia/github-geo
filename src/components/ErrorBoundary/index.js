import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor() {
    super()
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
  render() {
    const { hasError } = this.state
    return hasError ? <div>Something went wrong</div> : this.props.children
  }
}

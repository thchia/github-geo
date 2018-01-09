import { connect } from 'react-redux'

import { requestCountryStats } from '../../actions/statistics'
import { statisticsSelector } from '../../reducers/statistics'

const mapStateToProps = state => ({
  ...statisticsSelector(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchStatistics: () => dispatch(requestCountryStats(ownProps.countryName))
})

export default connect(mapStateToProps, mapDispatchToProps)

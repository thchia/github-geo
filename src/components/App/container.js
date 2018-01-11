import { connect } from 'react-redux'

import { coordinatesSelector } from '../../reducers/coordinates'
import { countryNameSelector } from '../../reducers/countryName'
import { uiSelector } from '../../reducers/ui'

const mapStateToProps = state => ({
  ...coordinatesSelector(state),
  countryName: countryNameSelector(state),
  detailsVisible: uiSelector(state).infoBoxVisible
})

export default connect(mapStateToProps)

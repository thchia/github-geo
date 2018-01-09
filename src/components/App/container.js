import { connect } from 'react-redux'

import { coordinatesSelector } from '../../reducers/coordinates'
import { countryNameSelector } from '../../reducers/countryName'

const mapStateToProps = state => ({
  ...coordinatesSelector(state),
  countryName: countryNameSelector(state)
})

export default connect(mapStateToProps)

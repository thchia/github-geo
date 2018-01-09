import { connect } from 'react-redux'

import * as actions from '../../actions/countryName'
import { coordinatesSelector } from '../../reducers/coordinates'
import { countryNameSelector } from '../../reducers/countryName'

const mapStateToProps = state => ({
  countryName: countryNameSelector(state),
  fetchingCoordinates: coordinatesSelector(state)
})

const mapDispatchToProps = dispatch => ({
  handleChangeCountry: countryName =>
    dispatch(actions.setCountryName(countryName))
})

export default connect(mapStateToProps, mapDispatchToProps)

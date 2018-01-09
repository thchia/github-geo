import { connect } from 'react-redux'

import { requestCoordinates } from '../../actions/coordinates'
import { setCountryName } from '../../actions/countryName'
import { coordinatesSelector } from '../../reducers/coordinates'
import { countryNameSelector } from '../../reducers/countryName'

const mapStateToProps = state => ({
  countryName: countryNameSelector(state),
  fetchingCoordinates: coordinatesSelector(state).fetching
})

const mapDispatchToProps = dispatch => ({
  handleChangeCountry: (event, { value: countryName }) => {
    dispatch(setCountryName(countryName))
    dispatch(requestCoordinates(countryName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)

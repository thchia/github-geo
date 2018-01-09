import { connect } from 'react-redux'

import * as actions from '../../actions/countryName'
import { countryNameSelector } from '../../reducers/countryName'

const mapStateToProps = state => ({
  countryName: countryNameSelector(state)
})

const mapDispatchToProps = dispatch => ({
  handleChangeCountry: countryName =>
    dispatch(actions.setCountryName(countryName))
})

export default connect(mapStateToProps, mapDispatchToProps)

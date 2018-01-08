import { combineReducers } from 'redux'

import coordinates from './coordinates'
import countryName from './countryName'
import statistics from './statistics'
import ui from './ui'

export default combineReducers({
  coordinates,
  countryName,
  statistics,
  ui
})

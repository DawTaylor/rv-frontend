import { combineReducers } from 'redux'

import dates from './dates'
import hotels from './hotels'

export default combineReducers({
  dates,
  hotels
})
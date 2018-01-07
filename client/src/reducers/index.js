import { combineReducers } from 'redux'

import events from './events'
import user from './user'
import tickets from './tickets'

export default combineReducers({
  events,
  user,
  tickets
})

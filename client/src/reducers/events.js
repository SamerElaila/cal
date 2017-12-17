import {
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_PENDING
 }  from '../constants/action_types'
import { createReducer } from '../utils/redux'

const initialState = {
  events: [],
  isFetchingEvents: false
}

const fetchEventsPending = (state, { payload }) => ({
  ...state,
  isFetchingEvents: true
})

const fetchEventsSuccess = (state, { payload }) => ({
  ...state,
  events: payload.data,
  isFetchingEvents: false
})

export default createReducer(initialState, {
  [FETCH_EVENTS_SUCCESS]: fetchEventsSuccess,
  [FETCH_EVENTS_PENDING]: fetchEventsPending
})

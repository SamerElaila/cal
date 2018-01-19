import {
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILURE,
  FETCH_EVENTS_PENDING
} from '../constants/action_types'
import { createReducer } from '../utils/redux'
import { SUCCESS, ERROR, PENDING } from '../constants/request_statuses'

const initialState = {
  eventsRequest: {}
}

const fetchEventsPending = (state, { payload }) => ({
  ...state,
  eventsRequest: {
    requestStatus: PENDING
  }
})

const fetchEventsSuccess = (state, { payload }) => ({
  ...state,
  eventsRequest: {
    requestStatus: SUCCESS,
    payload: payload.data
  }
})

const fetchEventsFailure = (state, { error }) => ({
  ...state,
  eventsRequest: {
    requestStatus: ERROR,
    error
  }
})

export default createReducer(initialState, {
  [FETCH_EVENTS_PENDING]: fetchEventsPending,
  [FETCH_EVENTS_SUCCESS]: fetchEventsSuccess,
  [FETCH_EVENTS_FAILURE]: fetchEventsFailure
})

import { CREATE_EVENT }  from '../constants/action_types'
import { createReducer } from '../utils/redux'

const initialState = {
  events: [],
  eventsCount: 0
}

const createEvent = (state, { payload }) => ({
  ...state,
  events: [
    { ...payload, id: state.eventsCount },
    ...state.events
  ],
  eventsCount: state.eventsCount + 1
})

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent
})

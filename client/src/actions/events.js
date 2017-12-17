import {
  CREATE_EVENT,
  FETCH_EVENTS
} from '../constants/action_types.js'

export const createEvent = (payload) => {
  return {
    type: CREATE_EVENT,
    payload
  }
}

export const fetchEvents = () => {
  return {
    type: FETCH_EVENTS
  }
}

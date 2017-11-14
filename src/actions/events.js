import { CREATE_EVENT } from '../constants/action_types'

export const createEvent = payload => ({
  type: CREATE_EVENT,
  payload
})

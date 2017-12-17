import { CREATE_EVENT } from '../constants/action_types.js'

export const createEvent = () => {
  console.log('IN THE ACTION CREATOR');
  return {
    type: CREATE_EVENT
  }
}

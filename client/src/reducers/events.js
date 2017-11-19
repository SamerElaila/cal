import { CREATE_EVENT }  from '../constants/action_types'
import { createReducer } from '../utils/redux'

const initialState = {
  events: [{
    eventName: 'Eoin\'s Birthday',
    id: '0',
    ticketQuantity: 8,
    ticketPrice: '£20',
    description: 'come and join eoin is this exciting party offering!\n There will be much fun and a little other stuff? A new line would be boss ..',
    images: []
  }],
  eventsCount: 1
}

const createEvent = (state, { payload }) => ({
  ...state,
  events: [
    { ...payload, id: state.eventsCount.toString() },
    ...state.events
  ],
  eventsCount: state.eventsCount + 1
})

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent
})

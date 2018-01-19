import { createSelector } from 'reselect'

import { routeParamsSelector } from './router'

export const eventsRequestSelector = state => {
  return state.events.eventsRequest
}

export const routeEventRequestSelector = createSelector(
  [eventsRequestSelector, routeParamsSelector],
  (eventsRequest, routeParams) => {
    const { payload } = eventsRequest.payload

    return {
      ...eventsRequest,
      payload:
        payload &&
        payload.filter(event => event.id.toString() === routeParams.eventId)[0]
    }
  }
)

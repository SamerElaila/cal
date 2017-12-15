import { createSelector } from 'reselect'

import { routeParamsSelector } from './router'

export const eventsSelector = state => {
  return state.events.events
}

export const routeEventSelector = createSelector(
  [eventsSelector, routeParamsSelector],
  (events, routeParams) => events.filter(event => event.id === routeParams.eventId)[0]
)

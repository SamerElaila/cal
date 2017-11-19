import { createSelector } from 'reselect'

import { routeParamsSelector } from './router'

export const eventsSelector = state => {
  return state.events.events
}

export const routeEventSelector = createSelector(
  [eventsSelector, routeParamsSelector],
  (events, routeParams) => {
    console.log({ events, routeParams });
    console.log(events.filter(event => {
      console.log(event, event.id, routeParams, routeParams.eventId, event.id === routeParams.eventId);
      return event.id === routeParams.eventId
    }));
    return events.filter(event => event.id === routeParams.eventId)[0]
  }
)

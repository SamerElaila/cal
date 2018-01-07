import { createSelector } from 'reselect'

import { SUCCESS } from '../constants/request_statuses'

export const ticketIdSelector = (_, props) => props.ticketId

export const ticketsArraySelector = state => {
  const ticketsRequest = state.tickets.tickets
  const payload = ticketsRequest.payload &&
    Object.keys(ticketsRequest.payload).map(k => ticketsRequest.payload[k])

  return {
    ...ticketsRequest,
    payload
  }
}

export const ticketsSelector = state => state.tickets.tickets

export const ticketQrsSelector = state => {
  return state.tickets.ticketQrs
}

export const ticketQrSelector = createSelector(
  [ticketQrsSelector, ticketIdSelector],
  (ticketQrs, ticketId) => ticketQrs[ticketId]
)

export const ticketSelector = createSelector(
  [ticketsSelector, ticketQrSelector, ticketIdSelector],
  (tickets, ticketQr, ticketId) => {
    if (tickets.requestStatus !== SUCCESS) return tickets

    console.log('in da selector');
    console.log({ tickets });

    if (tickets.payload[ticketId] === undefined) return undefined

    return ({
      requestStatus: SUCCESS,
      payload: {
        ...tickets.payload[ticketId],
        ticketQrRequest: ticketQr
      }
    })
  }
)

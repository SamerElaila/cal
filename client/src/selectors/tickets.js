import { createSelector } from 'reselect'

import { SUCCESS } from '../constants/request_statuses'

export const ticketIdSelector = (_, props) => props.ticketId

export const ticketsArraySelector = state => {
  const ticketsRequest = state.tickets.ticketsRequest
  const payload = ticketsRequest.payload &&
    Object.keys(ticketsRequest.payload).map(k => ticketsRequest.payload[k])

  return {
    ...ticketsRequest,
    payload
  }
}

export const ticketsRequestSelector = state => state.tickets.ticketsRequest

export const ticketQrsSelector = state => {
  return state.tickets.ticketQrs
}

export const ticketQrSelector = createSelector(
  [ticketQrsSelector, ticketIdSelector],
  (ticketQrs, ticketId) => ticketQrs[ticketId]
)

export const ticketSelector = createSelector(
  [ticketsRequestSelector, ticketQrSelector, ticketIdSelector],
  (ticketsRequest, ticketQr, ticketId) => {
    if (ticketsRequest.requestStatus !== SUCCESS) return ticketsRequest

    if (ticketsRequest.payload[ticketId] === undefined) return undefined

    return ({
      requestStatus: SUCCESS,
      payload: {
        ...ticketsRequest.payload[ticketId],
        ticketQrRequest: ticketQr
      }
    })
  }
)

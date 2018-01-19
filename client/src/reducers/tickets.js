import {
  FETCH_TICKETS_PENDING,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKET_QR_PENDING,
  FETCH_TICKET_QR_SUCCESS,
  FETCH_TICKET_QR_FAILURE
} from '../constants/action_types'
import { SUCCESS, ERROR, PENDING } from '../constants/request_statuses'
import { createReducer } from '../utils/redux'

const initialState = {
  ticketsRequest: {},
  ticketQrRequests: {}
}

const fetchTicketsPending = (state, { payload }) => ({
  ...state,
  ticketsRequest: {
    ...state.tickets,
    requestStatus: PENDING
  }
})

const fetchTicketsSuccess = (state, { payload }) => ({
  ...state,
  ticketsRequest: {
    payload: payload.data.reduce((tickets, ticket) => {
      tickets[ticket.id] = ticket
      return tickets
    }, {}),
    requestStatus: SUCCESS
  }
})

const fetchTicketsFailure = (state, { error }) => ({
  ...state,
  ticketsRequest: {
    error,
    requestStatus: ERROR
  }
})

const fetchTicketQrPending = (state, { payload, meta }) => {
  const { ticketQrRequests } = state
  const { initiatorAction: { ticketId } } = meta

  return {
    ...state,
    ticketQrRequests: {
      ...ticketQrRequests,
      [ticketId]: {
        requestStatus: PENDING
      }
    }
  }
}

const fetchTicketQrSuccess = (state, { payload, meta }) => {
  const { ticketQrRequests } = state
  const { initiatorAction: { payload: { ticketId } } } = meta
  console.log({ meta })

  return {
    ...state,
    ticketQrRequests: {
      ...ticketQrRequests,
      [ticketId]: {
        requestStatus: SUCCESS,
        payload: payload.data
      }
    }
  }
}

const fetchTicketQrFailure = (state, { error, meta }) => {
  const { ticketQrRequests } = state
  const { initiatorAction: { ticketId } } = meta

  return {
    ...state,
    ticketQrRequests: {
      ...ticketQrRequests,
      [ticketId]: {
        requestStatus: ERROR,
        error
      }
    }
  }
}

export default createReducer(initialState, {
  [FETCH_TICKETS_PENDING]: fetchTicketsPending,
  [FETCH_TICKETS_SUCCESS]: fetchTicketsSuccess,
  [FETCH_TICKETS_FAILURE]: fetchTicketsFailure,
  [FETCH_TICKET_QR_PENDING]: fetchTicketQrPending,
  [FETCH_TICKET_QR_SUCCESS]: fetchTicketQrSuccess,
  [FETCH_TICKET_QR_FAILURE]: fetchTicketQrFailure
})

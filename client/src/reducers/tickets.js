import {
  FETCH_TICKETS_PENDING,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKET_QR_PENDING,
  FETCH_TICKET_QR_SUCCESS,
  FETCH_TICKET_QR_FAILURE
}  from '../constants/action_types'
import { SUCCESS, ERROR, PENDING } from '../constants/request_statuses'
import { createReducer } from '../utils/redux'

const initialState = {
  tickets: {},
  ticketQrs: {}
}

const fetchTicketsPending = (state, { payload }) => ({
  ...state,
  tickets: {
    ...state.tickets,
    requestStatus: PENDING
  }
})

const fetchTicketsSuccess = (state, { payload }) => ({
  ...state,
  tickets: {
    payload: payload.data.reduce((tickets, ticket) => {
      tickets[ticket.id] = ticket
      return tickets
    }, {}),
    requestStatus: SUCCESS
  }
})

const fetchTicketsFailure = (state, { error }) => ({
  ...state,
  tickets: {
    error,
    requestStatus: ERROR
  }
})

const fetchTicketQrPending = (state, { payload, meta }) => {
  const { ticketQrs } = state
  const { initiatorAction: { ticketId } } = meta

  return {
    ...state,
    ticketQrs: {
      ...ticketQrs,
      [ticketId]: {
        requestStatus: PENDING
      }
    }
  }
}

const fetchTicketQrSuccess = (state, { payload, meta })  => {
  const { ticketQrs } = state
  const { initiatorAction: { payload: { ticketId } } } = meta
  console.log({meta});

  return {
    ...state,
    ticketQrs: {
      ...ticketQrs,
      [ticketId]: {
        requestStatus: SUCCESS,
        payload: payload.data
      }
    }
  }
}

const fetchTicketQrFailure = (state, { error, meta }) => {
  const { ticketQrs } = state
  const { initiatorAction: { ticketId } } = meta

  return {
    ...state,
    ticketQrs: {
      ...ticketQrs,
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

import React from 'react'


import { PENDING, ERROR } from '../constants/request_statuses'

export default ({ requestStatus, error, payload, children }) => {
  if (requestStatus === undefined) return <span></span>

  if (requestStatus === PENDING) return <span> pending </span>

  if (requestStatus === ERROR) return <span>`Error: ${error.message}`</span>

  return children(payload)
}

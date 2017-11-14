import React from 'react'

const Event = props => {
  if (typeof props.event === 'undefined') return '404'

  const {
    event: {
      eventName,
      description
    }
  } = props

  return (
    <div>
      <h1> {eventName} </h1>
      <div>
        {description}
      </div>
    </div>
  )
}
export default Event

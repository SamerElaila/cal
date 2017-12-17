import React from 'react'
import { Link } from 'react-router-dom'

const Event = props =>
  <Link
    to={`/events/${props.id}`}
    key={`event-${props.id}`}
    className='w-100 pa2 link black'
  >
    <div className='w-100 pa2 b--mid-gray ba bw1 tc f3'>
      {props.name}
    </div>
  </Link>

export default Event

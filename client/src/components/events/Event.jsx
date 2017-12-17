import React from 'react'
import { Card, CardPrimary, CardTitle } from 'rmwc/Card'
import { Link } from 'react-router-dom'

const Event = props =>
  <Link
    to={`/events/${props.id}`}
    key={`event-${props.id}`}
    className='w-100 pa2 link black'
  >
    <Card className='mh3'>
      <CardPrimary>
        <CardTitle>
          {props.name}
        </CardTitle>
      </CardPrimary>
    </Card>
  </Link>

export default Event

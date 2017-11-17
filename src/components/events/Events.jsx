import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../shared/Button'
import NoEvents from './NoEvents'
import Event from './Event'

class Events extends Component {
  render() {
    const { events } = this.props

    if (events.length === 0) return <NoEvents />

    return (
      <div>
        { events.map(event => <Event {...event} />) }
        <div className='w-100 tc'>
          <Button link='/new-event'>
            Create new event
          </Button>
        </div>
      </div>
    )
  }
}

export default Events

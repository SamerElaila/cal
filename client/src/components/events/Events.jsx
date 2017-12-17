import React, { Component } from 'react'

import { Fab } from 'rmwc/Fab'
import NoEvents from './NoEvents'
import Event from './Event'

class Events extends Component {
  componentDidMount() {
    const { fetchEvents } = this.props

    fetchEvents()
  }
  render() {
    const { events } = this.props

    if (events.length === 0) return <NoEvents />

    return (
      <div>
        { events.map(event => <Event {...event} />) }
        <div className='w-100 tc'>
          <a href='/new-event' className='absolute right-2 bottom-2'>
            <Fab>add</Fab>
          </a>
        </div>
      </div>
    )
  }
}

export default Events

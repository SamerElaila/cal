import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Fab } from 'rmwc/Fab'

class NoEvents extends Component {
  render() {
    return (
      <div>
        <span className='f4 dark-gray pa3 ma3 db tc'>
          You have not created any events yet
        </span>,
        <div className='w-100 tc'>
          <Link to='/new-event' className='absolute right-2 bottom-2'>
            <Fab>add</Fab>
          </Link>
        </div>
      </div>
    )
  }
}

export default NoEvents

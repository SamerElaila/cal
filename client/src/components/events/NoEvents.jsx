import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../shared/Button'

class NoEvents extends Component {
  render() {
    return (
      <div>
        <span className='f4 dark-gray pa3 ma3 db tc'>
          You have not created any events yet
        </span>,
        <div className='w-100 tc'>
          <Link to='/new-event' className='link black dib'>
            <Button className=''>
              Create new event
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default NoEvents

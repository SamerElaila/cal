import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from '../shared/Button'

class Events extends Component {
  render() {
    return ([
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
    ]
    )
  }
}

// <FAB>
//   <div className='ma3 h2 w2 pa1'>
//     <img
//       src={plus}
//       alt="create event"
//       className='w-100'
//       />
//   </div>
// </FAB>
// <Icon
//   icon='plus'
//   alt="create event"
//   style={{
//     stroke: 'none',
//     fill:'white'
//   }}
//   height='10em'
//   width='10em'
// />

export default Events

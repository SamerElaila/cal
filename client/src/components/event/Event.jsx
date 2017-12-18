import React from 'react'

import { Button } from 'rmwc/Button'

import Toolbar from '../shared/Toolbar'
// import pluto from './pluto.png'
//
// const ImageGallery = () => {
//   return (
//     <div className='w-100 vh-50'>
//       <img
//         alt='event'
//         className='w-100 h-100'
//         src={pluto}
//       />
//     </div>
//   )
// }

const Event = props => {
  if (typeof props.event === 'undefined') return '404'

  const {
    event: {
      name,
      description//,
      // ticketPrice,
      // ticketQuantity
    }
  } = props

  return (
    <div>
      <Toolbar title={name} />
      <div className='pa2 f4'> { description } </div>
      <div style={{textAlign: 'center'}} className='w-100 mt5'>
        <Button raised className='dib'>
          Buy tickets
        </Button>
      </div>
    </div>
  )
}
export default Event

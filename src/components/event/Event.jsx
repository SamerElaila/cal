import React from 'react'

import Button from '../shared/Button'
import pluto from './pluto.png'

const ImageGallery = () => {
  return (
    <div className='w-100 vh-50'>
      <img
        alt='event'
        className='w-100 h-100'
        src={pluto}
      />
    </div>
  )
}

const Event = props => {
  if (typeof props.event === 'undefined') return '404'

  const {
    event: {
      eventName,
      description,
      ticketPrice,
      ticketQuantity
    }
  } = props

  return (
    <div>
      <ImageGallery />
      <h1 className='f2 pa2 dark-gray ma0'> {eventName} </h1>
      <div className='pa2 f4'>
        <span className='b'> { ticketPrice } </span>
        | { ticketQuantity } tickets left
      </div>
      <div className='pa2 f3'> { description } </div>
      <Button className='w-100 bottom-0 absolute ttu tc'>
        Buy tickets
      </Button>
    </div>
  )
}
export default Event

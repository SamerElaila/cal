import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextInput from '../shared/TextInput'
import Button from '../shared/Button'

class NameDescriptionForm extends Component {
  render() {
    const {
      onChange,
      ticketQuantity,
      ticketPrice,
      submitEvent
    } = this.props

    return (
      <div>
        <div className='w-100 pa4 tc f4 lh-copy'>
          Enter your event name and description
        </div>
        <TextInput
          name='ticketPrice'
          label='Ticket price'
          onChange={onChange}
          value={ticketPrice}
        />
        <TextInput
          name='ticketQuantity'
          label='Ticket quantity'
          onChange={onChange}
          value={ticketQuantity}
        />
        <Button
          link='/'
          className='tc absolute w-100 bottom-0'
          onClick={submitEvent}
        >
          Next
        </Button>
      </div>
    )
  }
}

export default NameDescriptionForm

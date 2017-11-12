import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextInput from '../shared/TextInput'
import TextArea from '../shared/TextArea'
import Button from '../shared/Button'

class NameDescriptionForm extends Component {
  render() {
    const {
      match,
      onChange,
      ticketQuantity,
      ticketPrice
    } = this.props
    const hasPrice = typeof ticketPrice !== 'undefined' && ticketPrice !== 0
    const submitLink = hasPrice ? 'payment-details' : 'complete'

    return [
      <div className='w-100 pa4 tc f4 lh-copy'>
        Enter your event name and description
      </div>,
      <TextInput
        name='ticketPrice'
        placeholder='Ticket price'
        onChange={onChange}
        value={ticketPrice}
      />,
      <TextInput
        name='ticketQuantity'
        placeholder='Ticket quantity'
        onChange={onChange}
        value={ticketQuantity}
      />,
      <Link to={`${match.url}/${submitLink}`} className='link black'>
        <Button
          className='tc absolute w-100 bottom-0'
        >
          Next
        </Button>
      </Link>
    ]
  }
}

export default NameDescriptionForm

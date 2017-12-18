import React, { Component } from 'react'
import { ToolbarIcon } from 'rmwc/Toolbar'

import Toolbar from '../shared/Toolbar'
import TextInput from '../shared/TextInput'

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
        <Toolbar
          title='New Event'
          rightActions={[
              <ToolbarIcon onClick={submitEvent}>send</ToolbarIcon>
          ]}
        />
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
      </div>
    )
  }
}

export default NameDescriptionForm

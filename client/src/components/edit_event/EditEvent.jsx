import React, { Component } from 'react'

import EditableFieldButton from '../shared/EditableFieldButton'

class EditEvent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      event: {
        description,
        eventName,
        ticketQuantity,
        ticketPrice,
        images
      },
      saveEdits
    } = this.props

    return (
      <EditableFieldButton label='name' value={eventName}/>
    )
  }
}

export default EditEvent

import React, { Component } from 'react'

import EditableFieldButton from '../shared/EditableFieldButton'

class EditEvent extends Component {
  render() {
    return (
      <EditableFieldButton label='name' value='some event'/>
    )
  }
}

export default EditEvent

import React, { Component } from 'react'

import TextInput from '../shared/TextInput'
import Button from '../shared/Button'

class NameForm extends Component {
  render() {
    const {
      match,
      eventName,
      onChange
    } = this.props

    return (
      <div>
        <div className='w-100 pa4 tc f4 lh-copy'>
          Enter your event name and description
        </div>
        <TextInput
          name='eventName'
          label='Event name'
          onChange={onChange}
          value={eventName}
          autoFocus
        />
        <Button
          link={`${match.url}/details`}
          className='tc absolute w-100 bottom-0'
        >
          Next
        </Button>
      </div>
    )
  }
}

export default NameForm

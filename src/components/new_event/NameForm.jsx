import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextInput from '../shared/TextInput'
import Button from '../shared/Button'

class NameForm extends Component {
  render() {
    const {
      match,
      eventName,
      onChange
    } = this.props

    return [
      <div className='w-100 pa4 tc f4 lh-copy'>
        Enter your event name and description
      </div>,
      <TextInput
        name='eventName'
        placeholder='Event name'
        onChange={onChange}
        value={eventName}
      />,
      <Link to={`${match.url}/details`} className='link black'>
        <Button
          className='tc absolute w-100 bottom-0'
        >
          Next
        </Button>
      </Link>
    ]
  }
}

export default NameForm

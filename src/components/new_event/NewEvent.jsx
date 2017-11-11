import React, { Component } from 'react'

import TextInput from '../shared/TextInput'

class NewEvent extends Component {
  render() {
    return [
      <TextInput
        name='title'
        placeholder='title'
      />,
      <TextInput
        name='location'
        placeholder='location'
      />,
      <TextInput
        name='location'
        placeholder='location'
      />
    ]
  }
}

export default NewEvent

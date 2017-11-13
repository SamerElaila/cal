import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextInput from '../shared/TextInput'
import Button from '../shared/Button'

class NameDescriptionForm extends Component {
  render() {
    const {
      match,
      onChange,
      location
    } = this.props
    const isEmpty = typeof location === 'undefined' || location === ''

    return [
      <div className='w-100 pa4 tc f4 lh-copy'>
        Add your event location
      </div>,
      <TextInput
        name='location'
        placeholder='Location'
        onChange={onChange}
        value={location}
      />,
    <Link to={`${match.url}/tickets`} className='link black'>
        <Button
          className='tc absolute w-100 bottom-0'
        >
          {isEmpty ? 'Skip' : 'Next'}
        </Button>
      </Link>
    ]
  }
}

export default NameDescriptionForm

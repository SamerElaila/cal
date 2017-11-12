import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextInput from '../shared/TextInput'
import TextArea from '../shared/TextArea'
import Button from '../shared/Button'

class DescriptionPicturesForm extends Component {
  render() {
    const {
      match,
      description,
      onChange
    } = this.props

    return [
      <div className='w-100 pa4 tc f4 lh-copy'>
        Enter your event description and add pictures.
      </div>,
      <TextArea
        name='description'
        placeholder='Description'
        onChange={onChange}
        value={description}
      />,
      <Link to={`${match.url}/location`} className='link black'>
        <Button
          className='tc absolute w-100 bottom-0'
        >
          Next
        </Button>
      </Link>
    ]
  }
}

export default DescriptionPicturesForm

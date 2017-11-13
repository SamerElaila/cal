import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TextArea from '../shared/TextArea'
import ImageUpload from '../shared/ImageUpload'
import Button from '../shared/Button'

class DescriptionPicturesForm extends Component {
  render() {
    const {
      match,
      description,
      onChange,
      images
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
      <ImageUpload
        name='images'
        value={images}
        onChange={onChange}
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

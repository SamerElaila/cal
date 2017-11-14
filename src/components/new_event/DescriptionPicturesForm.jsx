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

    // <div className='relative min-h-100'>
    return (
      <div>
        <div className='w-100 pa4 tc f4 lh-copy'>
          Enter your event description and add pictures.
        </div>,
        <TextArea
          label='Event description'
          name='description'
          onChange={onChange}
          value={description}
          rows='4'
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
      </div>
    )
  }
}

export default DescriptionPicturesForm

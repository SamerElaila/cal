import React, { Component } from 'react'

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
        <Button
          link={`${match.url}/location`}
          className='tc absolute w-100 bottom-0'
          >
          Next
        </Button>
      </div>
    )
  }
}

export default DescriptionPicturesForm

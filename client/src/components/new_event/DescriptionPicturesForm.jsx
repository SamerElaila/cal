import React, { Component } from 'react'
import { ToolbarIcon } from 'rmwc/Toolbar'
import { Link } from 'react-router-dom'

import ImageUpload from '../shared/ImageUpload'
import Toolbar from '../shared/Toolbar'

class DescriptionPicturesForm extends Component {
  render() {
    const {
      match,
      onChange,
      images
    } = this.props

    return (
      <div>
        <Toolbar
          title='New Event'
          rightActions={[
            <Link className='link' to={`${match.url}/location`}>
              <ToolbarIcon>chevron_right</ToolbarIcon>
            </Link>
          ]}
        />
        <ImageUpload
          name='images'
          value={images}
          onChange={onChange}
          />
      </div>
    )
  }
}

export default DescriptionPicturesForm

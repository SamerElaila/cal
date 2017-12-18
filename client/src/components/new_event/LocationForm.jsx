import React, { Component } from 'react'
import { ToolbarIcon } from 'rmwc/Toolbar'
import { Link } from 'react-router-dom'

import Toolbar from '../shared/Toolbar'
import TextInput from '../shared/TextInput'

class NameDescriptionForm extends Component {
  render() {
    const {
      match,
      onChange,
      location
    } = this.props

    return (
      <div>
        <Toolbar
          title='New Event'
          rightActions={[
            <Link className='link' to={`${match.url}/tickets`}>
              <ToolbarIcon>chevron_right</ToolbarIcon>
            </Link>
          ]}
        />
        <TextInput
          name='location'
          label='Location'
          onChange={onChange}
          value={location}
        />
      </div>
    )
  }
}

export default NameDescriptionForm

import React, { Component } from 'react'

import Toolbar from '../shared/Toolbar'
import { Link } from 'react-router-dom'
import { ToolbarIcon } from 'rmwc/Toolbar'
import { TextField } from 'rmwc/TextField'

class NameForm extends Component {
  render() {
    const {
      match,
      name,
      description,
      onChange
    } = this.props

    return (

      <div>
        <Toolbar
          title='New Event'
          rightActions={[
            <Link className='link' to={`${match.url}/details`}>
              <ToolbarIcon>chevron_right</ToolbarIcon>
            </Link>
          ]}
        />
      <div className='pa3 f3'>
          <TextField fullwidth
              label="Event name"
              onChange={onChange}
              value={name}
              name='name'
            />
        </div>
        <div className='pa3 mt2'>
          <TextField fullwidth textarea
            label="description"
            rows={4}
            rootProps={{
              onChange: onChange,
              autoFocus: true,
              value: description,
              name: 'description'
            }}
          />
        </div>
      </div>
    )
  }
}

export default NameForm

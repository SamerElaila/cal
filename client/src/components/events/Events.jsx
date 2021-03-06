import React, { Component } from 'react'
import { Fab } from 'rmwc/Fab'
import { ToolbarIcon } from 'rmwc/Toolbar'
import { Link } from 'react-router-dom'
import { Menu, MenuItem } from 'rmwc/Menu'
import Request from '../Request'

import Toolbar from '../shared/Toolbar'
import Event from './Event'

class Events extends Component {
  state = { menuIsOpen: false }

  toggleMenuIsOpen = () => {
    const { menuIsOpen } = this.state

    this.setState({ menuIsOpen: !menuIsOpen })
  }

  componentDidMount() {
    const { fetchEvents } = this.props

    fetchEvents()
  }

  render() {
    const {
      toggleMenuIsOpen,
      props: { eventsRequest }
    } = this

    return (
      <div>
        <Toolbar title='CAL' leftActions={
            <ToolbarIcon onClick={toggleMenuIsOpen}>
              settings
            </ToolbarIcon>
          }/>
        <Menu
      		open={this.state.menuIsOpen}
      		onClose={evt => this.setState({menuIsOpen: false})}
      	>
      		<MenuItem>
            <Link to='/payment-settings' className='link'>
              Payment Settings
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/tickets' className='link'>
              Your tickets
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/scan' className='link'>
              Scan tickets
            </Link>
          </MenuItem>
      	</Menu>
        <Request {...eventsRequest}>
        { events => events.length > 0
          ? events.map(event => <Event {...event} />)
          : (
            <span className='f4 dark-gray pa3 ma3 db tc'>
              You have not created any events yet
            </span>
          )
        }
        </Request>
        <div className='w-100 tc'>
          <Link to='/new-event' className='absolute right-2 bottom-2'>
            <Fab>add</Fab>
          </Link>
        </div>
      </div>
    )
  }
}

export default Events

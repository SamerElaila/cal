import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import NameForm from './NameForm'
import DescriptionPicturesForm from './DescriptionPicturesForm'
import LocationForm from './LocationForm'
import TicketForm from './TicketForm'
import Complete from './Complete'

class NewEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  submitEvent = () => {
    console.log('SUBMIT EVENT CALLED');
    const {
      props: { createEvent },
      state: eventData
    } = this

    createEvent(eventData)
  }

  render() {
    const {
      state,
      props: { match },
      onChange,
      submitEvent
    } = this

    return (
      <div>
        <Route exact path={match.url} render={() =>
          <NameForm {...{ ...state, match, onChange }} />
        }/>
        <Route path={`${match.url}/details`} render={() =>
          <DescriptionPicturesForm {...{ ...state, match, onChange }} />
        }/>
        <Route path={`${match.url}/location`} render={() =>
            <LocationForm {...{ ...state, match, onChange }} />
        }/>
        <Route path={`${match.url}/tickets`} render={() =>
            <TicketForm {...{ ...state, match, onChange, submitEvent }} />
        }/>
        <Route path={`${match.url}/complete`} render={() =>
            <Complete {...{ ...state, match, onChange }} />
        }/>
      </div>
    )
  }
}
// <TextInput
//   name='eventName'
//   placeholder='Event name'
//   />,
// <TextArea
//   name='Description'
//   placeholder='Description'
//   />,
// <TextInput
//   name='Location'
//   placeholder='Location'
//   />,
// <TextInput
//   name='ticketsAvailable'
//   placeholder='total tickets available'
//   />

export default NewEvent

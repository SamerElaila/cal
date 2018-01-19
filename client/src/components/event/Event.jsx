import React, { Component} from 'react'
import { Button } from 'rmwc/Button'
import axios from 'axios'
import auth from '../../lib/auth'

import Toolbar from '../shared/Toolbar'
import Request from '../Request'
import { Elements, CardElement, injectStripe } from 'react-stripe-elements';

class Payment extends Component {
  handleSubmit = event => {
    const {
      stripe: { createToken },
      event: { id: eventId },
      user: { userId }
    } = this.props;

    event.preventDefault();
    createToken({ name: 'Eoin McCarthy' }).then(({token}) => {
      axios({
        url: `/api/user/${userId}/tickets/buy`,
        method: 'post',
        headers: {
          Authorization: `Bearer ${auth.getAccessToken()}`
        },
        data: { eventId, stripeCardToken: token }
      }).then(() => {
        console.log('Ticket brought')
      }).catch(e => {
        console.error(e)
      })
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement style={{ base: {fontSize: '18px' }}} />
        </label>
        <button>Confirm order</button>
      </form>
    )
  }
}

const ElementsPayments = injectStripe(Payment)
const Event = props => {
  // if (typeof props.event === 'undefined') return '404'

  const {
    event,
    user,
    eventRequest
  } = props

  return (
    <Request {...eventRequest}>
      {({ name, description }) =>
      <div>
        <Toolbar title={name} />
        <div className='pa2 f4'> { description } </div>
        <div style={{textAlign: 'center'}} className='w-100 mt5'>
          <Elements>
            <ElementsPayments event={event} user={user}/>
          </Elements>
          <Button raised className='dib'>
            Buy tickets
          </Button>
        </div>
      </div>
      }
    </Request>
  )
}
export default Event

import React, { Component} from 'react'
import { Button } from 'rmwc/Button'
import axios from 'axios'

import Toolbar from '../shared/Toolbar'
import { Elements, CardElement, injectStripe } from 'react-stripe-elements';

class Payment extends Component {
  handleSubmit = event => {
    const {
      stripe: { createToken },
      event: { id: eventId }
    } = this.props;

    event.preventDefault();

    createToken({ name: 'Eoin McCarthy' }).then(({token}) => {
      console.log('Received Stripe token:', token);
      axios({
        url: '/api/tickets/buy',
        method: 'post',
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
// import pluto from './pluto.png'
//
// const ImageGallery = () => {
//   return (
//     <div className='w-100 vh-50'>
//       <img
//         alt='event'
//         className='w-100 h-100'
//         src={pluto}
//       />
//     </div>
//   )
// }
const ElementsPayments = injectStripe(Payment)
const Event = props => {
  if (typeof props.event === 'undefined') return '404'

  const {
    event,
    event: {
      name,
      description//,
      // ticketPrice,
      // ticketQuantity
    }
  } = props

  return (
    <div>
      <Toolbar title={name} />
      <div className='pa2 f4'> { description } </div>
      <div style={{textAlign: 'center'}} className='w-100 mt5'>
        <Elements>
          <ElementsPayments event={event}/>
        </Elements>
        <Button raised className='dib'>
          Buy tickets
        </Button>
      </div>
    </div>
  )
}
export default Event

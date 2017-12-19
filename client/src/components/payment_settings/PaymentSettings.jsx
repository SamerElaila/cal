/* global STRIPE_CLIENT_KEY */

import React, { Component } from 'react'
import { Button } from 'rmwc/Button'

const stripeConnectUri = [
  'https://connect.stripe.com/oauth/authorize',
  '?response_type=code&scope=read_write&',
  `client_id=${STRIPE_CLIENT_KEY}`
].join('')

class PaymentSettings extends Component {
  componentDidMount() {
    const {
      props: { fetchUserInfo }
    } = this

    fetchUserInfo()
  }

  render() {
    const {
      props: { isFetchingUserInfo, user }
    } = this

    console.log({ user });

    if (isFetchingUserInfo) return <span> I am a spinner </span>

    if (user.stripeConnected) return <span> Stripe connected </span>

    return (
      <a href={stripeConnectUri}>
        <Button> Connect to Stripe </Button>
      </a>
    )
  }
}

export default PaymentSettings

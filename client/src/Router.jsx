import React from 'react'
import {  Router, Route, Switch } from 'react-router-dom'

import { stripeConnectCallback } from './actions/stripe'
import { fetchUserInfo } from './actions/user'

import Login from './components/login/LoginAuth0'
import Events from './containers/Events'
import Tickets from './containers/Tickets'
import Event from './containers/Event'
import NewEvent from './containers/NewEvent'
import EditEvent from './containers/EditEvent'
import Callback from './components/login/CallbackAuth0';
import history from './lib/history'
import auth from './lib/auth'
import store from './store'
import PaymentSettings from './containers/PaymentSettings'

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


export default () =>
  <Router history={history}>
    <Switch>
      <Route path='/login' render={() => <Login auth={auth} />} />
      <Route path="/callback/auth0" render={(props) => {
          handleAuthentication(props)
          store.dispatch(fetchUserInfo())
          return <Callback {...props} />
        }}/>
      <Route path="/callback/stripe" render={(props) => {
        store.dispatch(stripeConnectCallback(props.location.search))
        auth.handleStripeCallback(props)
        return <Callback {...props} />
      }}/>
      <Route path='/' render={() => {
        store.dispatch(fetchUserInfo())
        return (
          <div>
            <Route exact path='/' component={Events}/>
            <Route path='/tickets' component={Tickets}/>
            <Route path='/payment-settings' component={PaymentSettings}/>
            <Route path='/new-event' component={NewEvent}/>
            <Route path='/edit-event/:eventId' component={EditEvent}/>
            <Route path='/events/:eventId' component={Event}/>
          </div>
        )
      }}/>
    </Switch>
  </Router>

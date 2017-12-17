import React from 'react'
import {  Router, Route, Switch } from 'react-router-dom'

import Login from './components/login/LoginAuth0'
import Events from './containers/Events'
import Event from './containers/Event'
import NewEvent from './containers/NewEvent'
import EditEvent from './containers/EditEvent'
import Callback from './components/login/CallbackAuth0';
import history from './lib/history'
import auth from './lib/auth';

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}


export default () =>
  <Router history={history}>
    <Switch>
      <Route path='/login' render={() => <Login auth={auth} />} />
      <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
      <Route path='/' render={() => (
        <div>
          <Route exact path='/' component={Events}/>
          <Route path='/new-event' component={NewEvent}/>
          <Route path='/edit-event/:eventId' component={EditEvent}/>
          <Route path='/events/:eventId' component={Event}/>
        </div>
      )}/>
    </Switch>
  </Router>

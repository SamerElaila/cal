import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Switch } from 'react-router'

import Login from './components/login/Login'
import Events from './containers/Events'
import Event from './containers/Event'
import NewEvent from './containers/NewEvent'
import Header from './components/Header'

export default () =>
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' render={() => (
        <div>
          <Route exact path='/' component={Events}/>
          <Route path='/new-event' component={NewEvent}/>
          <Route path='/events/:eventId' component={Event}/>
        </div>
      )}/>
    </Switch>
  </Router>

  // <Header />

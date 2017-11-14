import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'

import Login from './components/login/Login'
import Events from './containers/Events'
import NewEvent from './containers/NewEvent'
import Header from './components/Header'

export default () =>
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' render={() => (
        <div>
          <Header />
          <Route exact path='/' component={Events}/>
          <Route path='/new-event' component={NewEvent}/>
        </div>
      )}/>
    </Switch>
  </Router>

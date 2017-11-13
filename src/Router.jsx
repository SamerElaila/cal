import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router'

import Login from './components/login/Login'
import Events from './components/events/Events'
import NewEvent from './components/new_event/NewEvent'
import Header from './components/Header'

export default () =>
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/' render={() => ([
          <Header />,
          <Route exact path='/' component={Events}/>,
          <Route path='/new-event' component={NewEvent}/>
      ])}/>
    </Switch>
  </Router>

/* global STRIPE_CLIENT_KEY */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Router from './Router'

import store from './store'
import { StripeProvider } from 'react-stripe-elements';

// import 'tachyons/css/tachyons.css';
import './index.css'
import 'material-components-web/dist/material-components-web.css'

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_LBXrQdMKvVhQ6xNQHWUSsThI'>
        <Provider store={store}>
          <Router />
        </Provider>
      </StripeProvider>
    );
  }
}

export default App;

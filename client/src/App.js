import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Router from './Router'

import store from './store'
import '../node_modules/tachyons/css/tachyons.css';

class App extends Component {
  render() {
    return (
      <div className="helvetica min-h-100 pb5 relative">
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;

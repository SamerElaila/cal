import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Router from './Router'

import store from './store'
// import 'tachyons/css/tachyons.css';
import './index.css'
import 'material-components-web/dist/material-components-web.css'

class App extends Component {
  render() {
    return (
      <div className="">
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;

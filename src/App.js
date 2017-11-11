import React, { Component } from 'react';

import Router from './Router'
import '../node_modules/tachyons/css/tachyons.css';

class App extends Component {
  render() {
    return (
      <div className="Georgia">
        <Router />
      </div>
    );
  }
}

export default App;

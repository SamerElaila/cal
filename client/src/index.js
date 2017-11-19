import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}
render()
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}

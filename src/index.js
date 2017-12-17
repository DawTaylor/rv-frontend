import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from './store'

import 'normalize.css'

import './index.css'

import { App } from './App'
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'));
registerServiceWorker();

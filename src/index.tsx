import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

if (module && module.hot) {
  module.hot.accept();
}
ReactDOM.render(
  <Provider store={store}>
    <App name='vortesnail' age={25} />
  </Provider>,
  document.querySelector('#root'),
);

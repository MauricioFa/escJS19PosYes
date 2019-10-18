import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCodeBranch,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import App from './routes/App';
import reducer from './reducers';
import './assets/styles/App.scss';

library.add(faCodeBranch, faGithub, faEyeSlash, faEye);

const initialState = {
  loginOn: true,
  cart: [],
  products: [],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

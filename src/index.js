import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './routes/App';
import './assets/styles/App.scss';

const initialState = {
  loginOn: false,
  cart: [],
  products: [],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);

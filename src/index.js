import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './utils/Redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);



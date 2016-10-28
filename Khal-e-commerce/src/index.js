
import React from 'react';
import ReactDOM from 'react-dom';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import ReduxPromise from 'redux-promise'
import { getAllProducts } from './actions'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />

  </Provider>,
  document.getElementById('root')
)

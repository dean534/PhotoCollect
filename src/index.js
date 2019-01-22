import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk  from 'redux-thunk';

import reducers from "./reducers/reducers";
import App from './components/App'

const root = document.querySelector("#root");


// redux devtool setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(ReduxThunk))
);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { AccountReducer } from './reducers/account';
import { BonusReducer } from './reducers/bonus';
import { Provider } from 'react-redux';

const store=createStore(combineReducers({
  account:AccountReducer,
  bonus:BonusReducer
}),applyMiddleware(logger,thunk))  //npm i redux-logger redux-thunk 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);


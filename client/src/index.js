/*
 * @Author: 24min
 * @Date: 2020-05-11 20:12:47
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-21 20:42:50
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { StoreContext } from "redux-react-hook";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { commodityReducer } from './reduer/reduer'

const store = createStore(commodityReducer)
ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('fanjf')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

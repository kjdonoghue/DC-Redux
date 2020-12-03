import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {createStore, applyMiddleware, compose} from "redux"
import {Provider} from "react-redux"
import reducer from "./store/reducer"
import DisplayLocation from './components/DisplayLocation';
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
      applyMiddleware(thunk) // middleware 
    ))


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <Switch>
        <Route component ={App} path ="/" exact/>
        <Route component ={DisplayLocation} path ="/locations"/>
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

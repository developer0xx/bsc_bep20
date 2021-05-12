import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/custom.css';
// import './assets/css/bootstrap.min.css';
import Home from './components/Home';
import dashboard from './components/dashboard'
// import zap from './components/zap'
 import loader from './components/loader/loader'
import header from './components/header'
import earn from './components/earn'

import * as serviceWorker from './serviceWorker';
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";




  


ReactDOM.render(
  <Provider store={store}>
 
 <BrowserRouter>
 <Switch>
      <Route path="/" exact component={Home} />
  
      <Route path="/dashboard" component={dashboard} isPrivate />
      {/* <Route component={loader}/> */}
      <Route path="/platform" component={header}  />
      <Route path="/earn" component={earn}  />

      
      
    </Switch>
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();

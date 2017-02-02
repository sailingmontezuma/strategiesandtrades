import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Layout from "./components/app/Layout";
//import './index.css';

 
import { Router, Route, Link, browserHistory } from 'react-router'

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

ReactDOM.render(
  //<Layout />,
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
,
  document.getElementById('app')
);

/*
<Route path="users" component={Users}>
  <Route path="/user/:userId" component={User}/>
</Route>
*/
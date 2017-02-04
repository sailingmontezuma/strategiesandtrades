import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; 
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
 
import OrdersPage from "./pages/OrdersPage";
import TradesPage from "./pages/TradesPage";

import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";

 

ReactDOM.render(
  //<Layout />,
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="orders" name="orders" component={OrdersPage}></Route>
      <Route path="trades" name="trades" component={TradesPage}></Route>
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
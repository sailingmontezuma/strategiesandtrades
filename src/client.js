import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; 
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
 
import OrdersPage from "./pages/OrdersPage";
import TradesPage from "./pages/TradesPage";
import StrategiesPage from "./pages/StrategiesPage";

import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";

 

ReactDOM.render(
  //<Layout />,
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured} />
      <Route path="archives(/:article)" component={Archives} />
      <Route path="settings" component={Settings} />
      <Route path="orders" component={OrdersPage} />
      <Route path="trades"  component={TradesPage} />
      <Route path="strategies(/:id)" name="strategies" component={StrategiesPage} />
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
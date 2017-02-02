import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Layout from "./components/app/Layout";
//import './index.css';

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);

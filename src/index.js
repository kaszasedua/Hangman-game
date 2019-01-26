import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();
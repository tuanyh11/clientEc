import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/grid.css';
import './/assets/css/index.css';
import Layout from './components/Layout/Layout';

localStorage.setItem('name', 'tuan')

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);
   
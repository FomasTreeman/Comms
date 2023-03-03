import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalContextProvider from './GlobalContext';

ReactDOM.render(
  // <React.StrictMode>
    <GlobalContextProvider subPages={(<App />)} />,
  // </React.StrictMode>,
  document.getElementById('root')
);


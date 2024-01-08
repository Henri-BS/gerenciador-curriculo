import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/css/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/modal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


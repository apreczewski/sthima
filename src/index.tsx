import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'dotenv';
import App from './App';

config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

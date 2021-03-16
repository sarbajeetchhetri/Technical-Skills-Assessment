import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './Profile';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Profile/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

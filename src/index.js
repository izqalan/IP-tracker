import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/app.css';
import './styles/tailwind.css';
import 'leaflet/dist/leaflet.css';

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

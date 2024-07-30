// src/index.js

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Your custom CSS
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

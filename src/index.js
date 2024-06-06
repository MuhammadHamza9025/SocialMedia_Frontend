import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shopcontextprovider from './Context/ShopContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shopcontextprovider>
      <App />
    </Shopcontextprovider>
  </React.StrictMode>
);



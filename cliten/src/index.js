import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductProvider } from './ContextApi/ProductContext/ProductContext';
import { UserProvider } from './ContextApi/ProductContext/UserContext';
import { CardContextProvider } from './ContextApi/ProductContext/CardContext';
import { OrderProvider } from './ContextApi/ProductContext/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <UserProvider>
        <CardContextProvider>
          <OrderProvider>
            <App />
          </OrderProvider>
        </CardContextProvider>
      </UserProvider>
    </ProductProvider>
  </React.StrictMode>
);


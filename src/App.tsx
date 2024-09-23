import React from 'react';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
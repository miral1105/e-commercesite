import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
        <Header onCartClick={handleCartClick} />
        <main className="flex-1">
          <ProductList products={products} />
        </main>
        <footer className="bg-white border-t border-gray-200 py-8 mt-12">
          <div className="container mx-auto max-w-7xl px-4 text-center text-gray-600">
            <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
          </div>
        </footer>
        <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
      </div>
    </CartProvider>
  );
}

export default App;

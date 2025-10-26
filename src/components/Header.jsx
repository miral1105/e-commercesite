import React from 'react';
import { useCart } from '../context/CartContext';

const Header = ({ onCartClick }) => {
  const { getCartCount } = useCart();

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        <h1 className="text-xl md:text-2xl font-bold truncate">E-Commerce Store</h1>
        <button
          onClick={onCartClick}
          className="relative bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-3 py-2 md:px-4 md:py-2 rounded-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label={`Open cart with ${getCartCount()} items`}
        >
          <span className="hidden sm:inline">Cart (</span>
          <span className="font-semibold">{getCartCount()}</span>
          <span className="hidden sm:inline">)</span>
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {getCartCount()}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
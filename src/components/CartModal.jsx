import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm flex justify-center items-center z-100 p-4 animate-fade-in">
      <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-hidden transform transition-all duration-300 ease-out">
        <div className="flex justify-between items-center p-4 border-b bg-white/80">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-4 max-h-[calc(90vh-8rem)] overflow-y-auto bg-white/70">
          {cart.length === 0 ? (
            <div className="text-center py-8 bg-white/80 rounded-lg backdrop-blur-sm">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l-1.1 5M7 13h10m0 0v8a2 2 0 002 2h-8a2 2 0 01-2-2v-8z" />
              </svg>
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
              <p className="text-gray-400 text-sm mt-2">Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center p-3 bg-white/80 rounded-lg hover:bg-white/90 transition-colors duration-200 backdrop-blur-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                      <p className="text-sm font-medium text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t py-4 bg-white/90 backdrop-blur-md sticky bottom-0">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-blue-600">${getTotalPrice().toFixed(2)}</span>
                </div>
                
                {/* Clear Cart Button */}
                <button 
                  onClick={clearCart}
                  className="w-full mb-3 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 active:bg-gray-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 font-semibold flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Clear Entire Cart
                </button>
                
                {/* Proceed to Checkout Button */}
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 font-semibold">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
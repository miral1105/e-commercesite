import React from 'react';
import { useCart } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="product-image w-full h-48 sm:h-56 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-14 leading-tight">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
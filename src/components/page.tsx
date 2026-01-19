'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cart')
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  const removeItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Your Cart
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Review your selected products and request a personalized wholesale quote.
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="card text-center p-12 max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Discover our premium medical and dental accessories. Start building your quote today.
              </p>
              <Link href="/products" className="btn-primary inline-block">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="card p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Cart Items ({cartItems.length})</h2>

                  {cartItems.map((item, index) => (
                    <div key={index} className="flex items-center p-4 border border-gray-100 rounded-lg mb-4 last:mb-0 hover:shadow-md transition-shadow">
                      <div className="relative w-20 h-20 flex-shrink-0 mr-6 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity || 1}</span>
                            <button
                              onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">${item.price}</p>
                        <p className="text-sm text-gray-500">
                          ${(item.price * (item.quantity || 1)).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="text-center">
                  <Link
                    href="/products"
                    className="btn-secondary inline-block"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="card p-6 sticky top-24">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Order Summary</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold">
                        {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (8%)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center py-4 font-semibold text-lg"
                    >
                      Request Official Quote
                    </Link>

                    <p className="text-xs text-gray-500 text-center">
                      Get personalized pricing and bulk discounts
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold mb-3 text-gray-800">Why Choose Us?</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Wholesale pricing available
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Fast, reliable shipping
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        Quality guaranteed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

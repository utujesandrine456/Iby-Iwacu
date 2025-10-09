"use client";

import { useState } from "react";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Double Bed & Dressing", price: 180, image: "/download (62).png", quantity: 1 },
    { id: 2, title: "Double Bed & Dressing", price: 180, image: "/download (63).png", quantity: 1 },
    { id: 3, title: "Double Bed & Dressing", price: 180, image: "/download (66) 2.png", quantity: 1 },
    { id: 4, title: "Double Bed & Dressing", price: 180, image: "/download (71).jpg", quantity: 1 },
  ]);

  const [recommendedProducts] = useState([
    { id: 1, name: "Drink", originalPrice: 230, discountedPrice: 200, discount: 13, image: "/Coffee.png" },
    { id: 2, name: "Drink", originalPrice: 230, discountedPrice: 200, discount: 13, image: "/Coffee.png" },
    { id: 3, name: "Drink", originalPrice: 230, discountedPrice: 200, discount: 13, image: "/Coffee.png" },
    { id: 4, name: "Drink", originalPrice: 230, discountedPrice: 200, discount: 13, image: "/Coffee.png" },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Main Cart Section */}
        <div className="grid gap-8 lg:grid-cols-[1fr,400px] mb-12">
          {/* Left Panel - Product List */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#AD5618] text-white px-6 py-4">
              <h2 className="text-xl font-semibold">Product</h2>
            </div>
            <div className="p-6">
              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center gap-4 py-4">
                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      ✕
                    </button>
                    
                    {/* Product Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Name */}
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                    </div>
                    
                    {/* Price */}
                    <div className="text-gray-900 font-medium">
                      ${item.price.toFixed(2)}
                    </div>
                    
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        −
                      </button>
                      <span className="text-gray-900 font-medium min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                    
                    {/* Total */}
                    <div className="text-gray-900 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                  
                  {/* Separator */}
                  {index < cartItems.length - 1 && (
                    <div className="border-t border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Cart Total */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-[#AD5618] text-white px-6 py-4">
              <h2 className="text-xl font-semibold">Cart Total</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between text-gray-700">
                <span className="font-medium">SUBTOTAL</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span className="font-medium">DISCOUNT</span>
                <span>---</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-semibold text-gray-900">
                  <span>TOTAL</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <a
                href="/checkout/personal"
                className="block w-full bg-[#AD5618] hover:bg-[#91530A] text-white font-semibold py-4 px-6 rounded-xl text-center transition-colors duration-300 mt-6"
              >
                Proceed To Checkout
              </a>
            </div>
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            You May Also Like
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Discount Tag */}
                  <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                    +
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 line-through text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="font-semibold text-gray-900">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



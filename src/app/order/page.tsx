"use client";

import { useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
}

interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export default function OrderPage() {
  const [activeTab, setActiveTab] = useState('new-order');
  const [paymentMethod, setPaymentMethod] = useState('mobile-money');
  const [selectedProducts, setSelectedProducts] = useState<OrderItem[]>([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Rwanda',
    postalCode: '',
    specialNote: ''
  });

  // Sample product data
  const products: Product[] = [
    {
      id: '1',
      name: 'Traditional Rwandan Basket - Large',
      category: 'Baskets',
      price: 45000,
      image: '/Basket weaving rwenzori mountains.png',
      description: 'Handcrafted traditional basket with intricate patterns',
      inStock: true
    },
    {
      id: '2',
      name: 'Imigongo Art Panel',
      category: 'Art',
      price: 75000,
      image: '/Beautiful sitting corner.png',
      description: 'Beautiful geometric art piece made from cow dung',
      inStock: true
    },
    {
      id: '3',
      name: 'Rwandan Coffee Beans - Premium',
      category: 'Coffee',
      price: 25000,
      image: '/Rwandan basket wall in Meg Biram\'s living room_.png',
      description: 'High-quality Arabica coffee beans from Rwanda',
      inStock: true
    },
    {
      id: '4',
      name: 'Traditional Textile - Kitenge',
      category: 'Textiles',
      price: 35000,
      image: '/Order_image.png',
      description: 'Vibrant traditional fabric with cultural patterns',
      inStock: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addToOrder = (product: Product) => {
    const existingItem = selectedProducts.find(item => item.productId === product.id);
    if (existingItem) {
      setSelectedProducts(prev => prev.map(item => 
        item.productId === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setSelectedProducts(prev => [...prev, { productId: product.id, quantity: 1, price: product.price }]);
    }
  };

  const removeFromOrder = (productId: string) => {
    setSelectedProducts(prev => prev.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(productId);
    } else {
      setSelectedProducts(prev => prev.map(item => 
        item.productId === productId ? { ...item, quantity } : item
      ));
    }
  };

  const getTotalAmount = () => {
    return selectedProducts.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { ...formData, paymentMethod, selectedProducts, total: getTotalAmount() });
    // Handle order submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Order Management</h1>
              <p className="text-orange-100">Create, track, and manage your orders</p>
            </div>
            <Link href="/" className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex space-x-1 bg-white rounded-xl p-2 shadow-lg mb-8">
          {[
            { id: 'new-order', label: 'New Order', icon: '🛒' },
            { id: 'order-history', label: 'Order History', icon: '📋' },
            { id: 'track-order', label: 'Track Order', icon: '📍' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#AD5618] text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-[#AD5618] hover:bg-orange-50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'new-order' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product Selection */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-[#AD5618]">🛍️</span>
                  Select Products
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {products.map(product => (
                    <div key={product.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                      <div className="relative mb-3">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Out of Stock
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#AD5618] font-bold text-lg">
                          RWF {product.price.toLocaleString()}
                        </span>
                        <button
                          onClick={() => addToOrder(product)}
                          disabled={!product.inStock}
                          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            product.inStock
                              ? 'bg-[#AD5618] hover:bg-[#91530A] text-white transform hover:scale-105'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {product.inStock ? 'Add to Order' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-[#AD5618]">👤</span>
                  Personal Information
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                      >
                        <option value="Rwanda">Rwanda</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                        placeholder="Enter postal code"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full address"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Special Notes</label>
                    <textarea
                      name="specialNote"
                      value={formData.specialNote}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Any special instructions or notes..."
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary & Payment */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-[#AD5618]">📋</span>
                  Order Summary
                </h2>
                {selectedProducts.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <div className="text-4xl mb-2">🛒</div>
                    <p>No products selected</p>
                    <p className="text-sm">Add products to your order</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {selectedProducts.map(item => {
                      const product = products.find(p => p.id === item.productId);
                      return (
                        <div key={item.productId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{product?.name}</h4>
                            <p className="text-sm text-gray-600">RWF {product?.price.toLocaleString()} each</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 border-x border-gray-300">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                className="px-3 py-1 hover:bg-gray-100 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromOrder(item.productId)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-[#AD5618]">RWF {getTotalAmount().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <span className="text-[#AD5618]">💳</span>
                  Payment Method
                </h2>
                <div className="space-y-4">
                  {[
                    { id: 'mobile-money', label: 'Mobile Money', icon: '📱', color: 'bg-green-500', description: 'MTN Mobile Money, Airtel Money' },
                    { id: 'card', label: 'Credit/Debit Card', icon: '💳', color: 'bg-blue-500', description: 'Visa, Mastercard, American Express' },
                    { id: 'paypal', label: 'PayPal', icon: '🔵', color: 'bg-blue-600', description: 'Pay with your PayPal account' }
                  ].map(method => (
                    <div
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        paymentMethod === method.id
                          ? 'border-[#AD5618] bg-orange-50'
                          : 'border-gray-200 hover:border-[#AD5618] hover:bg-orange-50'
                      }`}
                    >
                      <input
                        type="radio"
                        id={method.id}
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-5 h-5 text-[#AD5618] focus:ring-[#AD5618]"
                      />
                      <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white text-xl`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-800">{method.label}</div>
                        <div className="text-gray-600 text-sm">{method.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Order */}
              <button
                onClick={handleSubmit}
                disabled={selectedProducts.length === 0}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                  selectedProducts.length > 0
                    ? 'bg-[#AD5618] hover:bg-[#91530A] text-white hover:scale-105 shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {selectedProducts.length > 0 ? 'Place Order' : 'Select Products First'}
              </button>
            </div>
          </div>
        )}

        {/* Order History Tab */}
        {activeTab === 'order-history' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="text-[#AD5618]">📋</span>
              Order History
            </h2>
            <div className="space-y-6">
              {[
                { id: 'ORD-001', date: '2024-01-15', status: 'Delivered', total: 120000, items: 3 },
                { id: 'ORD-002', date: '2024-01-10', status: 'In Transit', total: 85000, items: 2 },
                { id: 'ORD-003', date: '2024-01-05', status: 'Processing', total: 95000, items: 4 }
              ].map(order => (
                <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{order.id}</h3>
                      <p className="text-gray-600">Ordered on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#AD5618]">RWF {order.total.toLocaleString()}</div>
                      <p className="text-gray-600">{order.items} items</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                    <button className="text-[#AD5618] hover:text-[#91530A] font-medium transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Track Order Tab */}
        {activeTab === 'track-order' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <span className="text-[#AD5618]">📍</span>
              Track Your Order
            </h2>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Order Number</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter order number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent"
                  />
                  <button className="bg-[#AD5618] hover:bg-[#91530A] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Track
                  </button>
                </div>
              </div>
              
              {/* Sample Tracking Timeline */}
              <div className="border-l-2 border-[#AD5618] pl-6 space-y-6">
                {[
                  { status: 'Order Placed', time: '2024-01-15 10:30 AM', completed: true },
                  { status: 'Processing', time: '2024-01-15 2:15 PM', completed: true },
                  { status: 'Shipped', time: '2024-01-16 9:00 AM', completed: true },
                  { status: 'In Transit', time: '2024-01-17 11:30 AM', completed: false },
                  { status: 'Delivered', time: 'Expected: 2024-01-18', completed: false }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className={`absolute -left-8 w-4 h-4 rounded-full border-2 ${
                      step.completed ? 'bg-[#AD5618] border-[#AD5618]' : 'bg-white border-gray-300'
                    }`}></div>
                    <div className={`${step.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                      <div className="font-medium">{step.status}</div>
                      <div className="text-sm">{step.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

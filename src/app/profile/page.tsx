"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('cart');

  // Sample cart items data
  const cartItems = [
    {
      id: '1',
      name: 'Ibitenge',
      artisan: 'By marie uwimana',
      price: 82000,
      image: '/Basket weaving rwenzori mountains.png',
      category: 'Textiles'
    },
    {
      id: '2',
      name: 'Food & Drinks',
      artisan: 'By marie uwimana',
      price: 27000,
      image: '/Rwandan basket wall in Meg Biram\'s living room_.png',
      category: 'Beverages'
    },
    {
      id: '3',
      name: 'Furniture',
      artisan: 'By marie uwimana',
      price: 15000,
      image: '/Beautiful sitting corner.png',
      category: 'Home & Garden'
    },
    {
      id: '4',
      name: 'Crafts',
      artisan: 'By marie uwimana',
      price: 45000,
      image: '/Order_image.png',
      category: 'Handmade'
    },
    {
      id: '5',
      name: 'Crafts',
      artisan: 'By marie uwimana',
      price: 78000,
      image: '/Basket weaving rwenzori mountains.png',
      category: 'Handmade'
    },
    {
      id: '6',
      name: 'Furniture',
      artisan: 'By marie uwimana',
      price: 39000,
      image: '/Beautiful sitting corner.png',
      category: 'Home & Garden'
    }
  ];

  // Sample recent orders data
  const recentOrders = [
    {
      id: '1',
      name: 'Traditional Agaseke',
      date: 'ordered on Jan 15, 2025',
      status: 'Delivered',
      image: '/Basket weaving rwenzori mountains.png'
    },
    {
      id: '2',
      name: 'Traditional Agaseke',
      date: 'ordered on Jan 10, 2025',
      status: 'Delivered',
      image: '/Rwandan basket wall in Meg Biram\'s living room_.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            {/* Profile Picture */}
            <div className="relative mb-6">
              <img 
                src="/Basket weaving rwenzori mountains.png" 
                alt="Marie uwimana" 
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#AD5618]"
              />
            </div>
            
            {/* Name and Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Marie uwimana</h1>
            <p className="text-lg text-gray-600 mb-4">Traditional Basket weaver & Artisan</p>
            
            {/* Bio */}
            <p className="text-gray-700 text-md mb-6 max-w-2xl mx-auto">
              Creating authentic Rwandan baskets using traditional effective techniques passed down
            </p>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button className="bg-[#AD5618] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#91530A] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Account Settings
              </button>
              <button className="border-2 border-[#AD5618] text-[#AD5618] px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#AD5618] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                share profile
              </button>
            </div>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AD5618]">18</div>
                <div className="text-gray-600">Artisans following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AD5618]">23</div>
                <div className="text-gray-600">Items purchased</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AD5618]">14</div>
                <div className="text-gray-600">Reviews written</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white rounded-xl p-2 shadow-lg mb-8">
          {[
            { id: 'cart', label: 'Added to cart', count: cartItems.length },
            { id: 'orders', label: 'Recent orders', count: recentOrders.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#AD5618] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#AD5618] hover:bg-orange-50'
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-sm">
                  {tab.count} items
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'cart' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Added to cart</h2>
              <span className="text-gray-600">{cartItems.length} items added</span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cartItems.map(item => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                  <div className="relative mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.artisan}</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#AD5618] text-white px-4 py-2 rounded-lg text-sm font-medium">
                      ${item.price.toLocaleString()}
                    </button>
                    <button className="border-2 border-[#AD5618] text-[#AD5618] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#AD5618] hover:text-white transition-colors">
                      Order now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent orders</h2>
              <a href="#" className="text-[#AD5618] hover:text-[#91530A] font-medium">see all</a>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map(order => (
                <div key={order.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
                  <img 
                    src={order.image} 
                    alt={order.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{order.name}</h3>
                    <p className="text-gray-600 text-sm">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-[#AD5618] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {order.status}
                    </span>
                    <button className="border-2 border-[#AD5618] text-[#AD5618] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#AD5618] hover:text-white transition-colors">
                      Re-order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

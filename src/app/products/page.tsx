"use client";

import React, { useState } from "react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const products = [
    {
      id: 1,
      title: "Agaseke Basket",
      price: 89.99,
      compareAt: 120.00,
      image: "/hand woven baskets 1.png"
    },
    {
      id: 2,
      title: "Imigongo Wall Art",
      price: 145.50,
      compareAt: 180.00,
      image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png"
    },
    {
      id: 3,
      title: "Rwandan Coffee Beans",
      price: 24.99,
      compareAt: 32.00,
      image: "/Rwanda Bean Single-origin Rwandan coffee.png"
    },
    {
      id: 4,
      title: "African Wax Fabric",
      price: 67.80,
      compareAt: 85.00,
      image: "/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png"
    },
    {
      id: 5,
      title: "Traditional Stool",
      price: 156.75,
      compareAt: 200.00,
      image: "/IBO STOOL, Awka Region, Nigeria  Alan Mann Collection.png"
    },
    {
      id: 6,
      title: "Raffia Woven Tray",
      price: 45.25,
      compareAt: 58.00,
      image: "/Artisan Crafted Braided Raffia (1).png"
    },
    {
      id: 7,
      title: "Basket Wall Decor",
      price: 78.90,
      compareAt: 95.00,
      image: "/Rwandan basket wall in Meg Biram's living room_.png"
    },
    {
      id: 8,
      title: "Cesta Collective Textile",
      price: 112.40,
      compareAt: 140.00,
      image: "/Introducing Cesta Collective - Kassatex 1.png"
    },
    {
      id: 9,
      title: "Beautiful Sitting Corner",
      price: 234.60,
      compareAt: 280.00,
      image: "/Beautiful sitting corner.png"
    },
    {
      id: 10,
      title: "Community Art Piece",
      price: 89.30,
      compareAt: 110.00,
      image: "/community 1.png"
    },
    {
      id: 11,
      title: "Basket Weaving Art",
      price: 67.45,
      compareAt: 82.00,
      image: "/Basket weaving rwenzori mountains.png"
    },
    {
      id: 12,
      title: "Traditional Wall Panel",
      price: 178.90,
      compareAt: 225.00,
      image: "/Rectangle 45.png"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-10">
      <div className="container">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl text-[#AD5618] font-semibold tracking-tight mb-2">Our Collection Of Products</h1>
          <p className="opacity-70 text-black">Showing 1–{filteredProducts.length} of {filteredProducts.length} item(s)</p>
        </div>
        
        {/* Search Bar - Floating Right */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search an item..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80 px-6 py-3 text-black rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-[#AD5618] shadow-lg bg-white"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#AD5618] text-white p-2 rounded-full hover:bg-[#AD5618] transition-colors shadow-md">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => {
          const hasDiscount = product.compareAt && product.compareAt > product.price;
          const discountPercent = hasDiscount
            ? Math.round(100 - (product.price / product.compareAt) * 100)
            : 0;

          return (
            <a
              key={product.id}
              href={`/products/${product.id}`}
              className="group relative rounded-2xl border border-white/60 bg-white shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Discount Badge */}
                {hasDiscount && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black text-white shadow">
                    -{discountPercent}%
                  </div>
                )}

                {/* Quick Action */}
                <button
                  aria-label="Add to cart"
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-gray-800 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="h-12 text-gray-900 font-semibold leading-snug line-clamp-2">
                  {product.title}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {hasDiscount && (
                      <span className="text-sm text-gray-500 line-through">${product.compareAt.toFixed(2)}</span>
                    )}
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  </div>
                  <span className="text-xs text-[#AD5618] font-semibold opacity-80 group-hover:opacity-100 transition-opacity">View details →</span>
                </div>
                {/* Hover CTA */}
                <div className="mt-3 hidden group-hover:flex">
                  <span className="inline-flex items-center justify-center w-full px-3 py-2 rounded-lg text-sm text-white bg-gradient-to-r from-[#AD5618] to-[#91530A] shadow hover:from-[#91530A] hover:to-[#7A4A09] transition-colors">Quick Add</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      </div>
    </div>
  );
}



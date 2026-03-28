"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      title: "Agaseke Basket",
      price: 89.99,
      compareAt: 120.00,
      image: "/hand woven baskets 1.png",
      category: "baskets",
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      title: "Imigongo Wall Art",
      price: 145.50,
      compareAt: 180.00,
      image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png",
      category: "art",
      rating: 4.9,
      reviews: 18
    },
    {
      id: 3,
      title: "Rwandan Coffee Beans",
      price: 24.99,
      compareAt: 32.00,
      image: "/Rwanda Bean Single-origin Rwandan coffee.png",
      category: "food",
      rating: 4.7,
      reviews: 45
    },
    {
      id: 4,
      title: "African Wax Fabric",
      price: 67.80,
      compareAt: 85.00,
      image: "/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png",
      category: "textiles",
      rating: 4.6,
      reviews: 32
    },
    {
      id: 5,
      title: "Traditional Stool",
      price: 156.75,
      compareAt: 200.00,
      image: "/IBO STOOL, Awka Region, Nigeria  Alan Mann Collection.png",
      category: "furniture",
      rating: 4.8,
      reviews: 15
    },
    {
      id: 6,
      title: "Raffia Woven Tray",
      price: 45.25,
      compareAt: 58.00,
      image: "/Artisan Crafted Braided Raffia (1).png",
      category: "baskets",
      rating: 4.5,
      reviews: 28
    }
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    { id: "baskets", name: "Baskets", count: products.filter(p => p.category === "baskets").length },
    { id: "art", name: "Wall Art", count: products.filter(p => p.category === "art").length },
    { id: "textiles", name: "Textiles", count: products.filter(p => p.category === "textiles").length },
    { id: "furniture", name: "Furniture", count: products.filter(p => p.category === "furniture").length },
    { id: "food", name: "Food & Beverages", count: products.filter(p => p.category === "food").length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/Homepageimagebackground.png"
            alt="Premium Rwandan Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Animated Accent Elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#AD5618]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#eb8034]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center text-white"
            >
              <motion.h1
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-7xl font-extrabold mb-8"
              >
                <motion.span
                  className="inline-block drop-shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Our Premium <span className="text-[#eb8034]">Collection</span>
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-10 drop-shadow-md"
              >
                Discover authentic handcrafted products from talented Rwandan artisans. Each piece tells a unique story of tradition, culture, and exceptional craftsmanship.
              </motion.p>

              {/* Enhanced Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-2xl mx-auto mb-10"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for authentic Rwandan products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-8 py-4 text-gray-900 rounded-full border-4 border-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/40 shadow-2xl bg-white/95 backdrop-blur-sm text-xl placeholder-gray-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#AD5618] text-white p-3 cursor-pointer rounded-md hover:bg-[#91530A] transition-colors shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </motion.button>
                </div>

                {/* Search Stats */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-4 text-white/80 text-lg drop-shadow-md"
                >
                  {searchQuery ? (
                    <>Showing <span className="font-bold">{filteredProducts.length}</span> results for &quot;{searchQuery}&quot;</>
                  ) : (
                    <>Browse <span className="font-bold">{products.length}</span> authentic handcrafted products</>
                  )}
                </motion.p>
              </motion.div>

              {/* Product Stats */}
              <motion.div
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="grid grid-cols-3 gap-10 max-w-4xl mx-auto"
              >
                {[
                  { value: `${products.length}+`, label: "Premium Products" },
                  { value: "6", label: "Categories" },
                  { value: "100%", label: "Authentic Crafts" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                  >
                    <motion.div
                      className="text-4xl font-extrabold text-[#eb8034] drop-shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-lg text-white font-semibold mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex justify-center">
            {/* Categories */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap gap-3 justify-center"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  variants={fadeInUp}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-md font-semibold text-base transition-all duration-300 ${selectedCategory === category.id
                    ? "bg-[#AD5618] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                    }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredProducts.map((product, index) => {
              const hasDiscount = product.compareAt && product.compareAt > product.price;
              const discountPercent = hasDiscount
                ? Math.round(100 - (product.price / product.compareAt) * 100)
                : 0;

              return (
                <motion.div
                  key={product.id}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative rounded-3xl border-2 border-gray-100 bg-white shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Discount Badge */}
                    {hasDiscount && (
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-4 left-4 px-3 py-2 rounded-full text-sm font-bold bg-[#eb8034] text-white shadow-lg"
                      >
                        -{discountPercent}%
                      </motion.div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-white text-gray-800 shadow-lg flex items-center justify-center hover:bg-[#AD5618] hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-white text-gray-800 shadow-lg flex items-center justify-center hover:bg-[#AD5618] hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#AD5618] transition-colors">
                      {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      {hasDiscount && (
                        <span className="text-lg text-gray-400 line-through">${product.compareAt.toFixed(2)}</span>
                      )}
                      <span className="text-2xl font-extrabold text-[#AD5618]">${product.price.toFixed(2)}</span>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full"
                    >
                      <Link
                        href={`/products/${product.id}`}
                        className="block w-full bg-[#AD5618] text-white py-3 rounded-md font-bold text-lg hover:bg-[#91530A] transition-colors shadow-lg text-center"
                      >
                        View Details
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="flex justify-center mb-4">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-[#AD5618] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#91530A] transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}



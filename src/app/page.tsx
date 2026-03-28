"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
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



export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      title: "Double Bed & Side Tables",
      originalPrice: 200.00,
      discountedPrice: 150.00,
      discount: "-20%",
      image: "/Rectangle 45.png"
    },
    {
      id: 2,
      title: "Agaseke Basket",
      originalPrice: 180.00,
      discountedPrice: 140.00,
      discount: "-22%",
      image: "/Artisan Crafted Braided Raffia (1).png"
    },
    {
      id: 3,
      title: "Imigongo Wall Art",
      originalPrice: 120.00,
      discountedPrice: 95.00,
      discount: "-21%",
      image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png"
    },
    {
      id: 4,
      title: "Traditional Stool",
      originalPrice: 160.00,
      discountedPrice: 125.00,
      discount: "-22%",
      image: "/IBO STOOL, Awka Region, Nigeria  Alan Mann Collection.png"
    }
  ];

  const popularProducts = [
    { id: 1, title: "Agateba", image: "/hand woven baskets 1.png" },
    { id: 2, title: "Agaseke", image: "/Artisan Crafted Braided Raffia (1).png" },
    { id: 3, title: "Imigongo", image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png" },
    { id: 4, title: "Imitako", image: "/Rwandan basket wall in Meg Biram's living room_.png" },
    { id: 5, title: "Ibitenge", image: "/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png" },
    { id: 6, title: "Ibigoma", image: "/Introducing Cesta Collective - Kassatex 1.png" },
    { id: 7, title: "Dresses", image: "/Beautiful sitting corner.png" },
    { id: 8, title: "Ibitenge", image: "/IBO STOOL, Awka Region, Nigeria  Alan Mann Collection.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/Rwandan basket wall in Meg Biram's living room_.png"
            alt="Rwandan Baskets"
            fill
            className="object-cover"
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

        <div className="container relative z-10 h-screen">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-6xl font-bold mb-8"
                >
                  <motion.span
                    className="text-white inline-block drop-shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Crafting Comfort Redefining Spaces
                  </motion.span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-white mb-10 max-w-2xl drop-shadow-md"
                >
                  Discover authentic handcrafted products from Rwandan artisans. Premium quality pieces that make your space feel truly yours.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-5"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/products"
                      className="group relative px-10 py-4 bg-[#AD5618] text-white rounded-md font-bold text-lg overflow-hidden transition-all duration-300 shadow-2xl hover:bg-[#91530A] inline-flex items-center gap-3"
                    >
                      Shop Now
                      <motion.svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/about"
                      className="px-10 py-4 border-2 border-white text-white rounded-lg font-bold text-md hover:bg-white hover:text-[#AD5618] transition-all duration-300 inline-block shadow-2xl"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-24 grid grid-cols-3 gap-10"
                >
                  {[
                    { value: "500+", label: "Products" },
                    { value: "100+", label: "Artisans" },
                    { value: "99%", label: "Satisfaction" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                    >
                      <motion.div
                        className="text-3xl font-extrabold text-[#eb8034] drop-shadow-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-lg text-white font-semibold mt-2">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - Product Showcase */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="relative hidden lg:block"
              >
                <motion.div
                  variants={scaleIn}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                      className="relative h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    >
                      <Image src="/hand woven baskets 1.png" alt="Basket" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/30" />
                      <motion.div
                        className="absolute bottom-6 left-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="text-lg font-bold drop-shadow-lg">Agaseke</div>
                        <div className="text-sm opacity-90 drop-shadow-md">Traditional Baskets</div>
                      </motion.div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }
                      }}
                      className="relative h-72 rounded-3xl overflow-hidden shadow-2xl mt-10 border-4 border-white"
                    >
                      <Image src="/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png" alt="Art" fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/30" />
                      <motion.div
                        className="absolute bottom-6 left-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <div className="text-lg font-bold drop-shadow-lg">Imigongo</div>
                        <div className="text-sm opacity-90 drop-shadow-md">Wall Art</div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-2xl p-8 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-16 h-16 bg-[#AD5618] rounded-full flex items-center justify-center"
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <div>
                        <div className="text-base font-bold text-gray-900">100% Authentic</div>
                        <div className="text-sm text-gray-600">Handcrafted</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
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

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Featured <span className="text-[#AD5618]">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked, locally sourced Rwandan products. Each piece tells a story of tradition and craftsmanship.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <motion.div
                  className="absolute top-3 left-3 bg-[#eb8034] text-white text-sm px-4 py-2 rounded-full font-bold"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {product.discount}
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-3 right-3 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-5 h-5 text-[#AD5618]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </motion.button>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{product.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-base">${product.originalPrice.toFixed(2)}</span>
                    <motion.span
                      className="text-2xl font-extrabold text-[#AD5618]"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ${product.discountedPrice.toFixed(2)}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Explore Our <span className="text-[#AD5618]">Premium Categories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover handpicked collections that showcase the finest Rwandan craftsmanship
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-3"
          >
            {[
              {
                image: "/hand woven baskets 1.png",
                title: "Artisan Baskets",
                subtitle: "Traditional Weaving",
                description: "Handcrafted baskets using age-old techniques passed down through generations",
                itemCount: "24+ Items",
                gradient: "from-amber-500 to-orange-600"
              },
              {
                image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png",
                title: "Imigongo Art",
                subtitle: "Geometric Masterpieces",
                description: "Stunning geometric patterns that reflect Rwanda's artistic traditions",
                itemCount: "18+ Items",
                gradient: "from-purple-500 to-indigo-600"
              },
              {
                image: "/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png",
                title: "Textile Collection",
                subtitle: "African Heritage",
                description: "Vibrant fabrics and textiles that celebrate African culture and style",
                itemCount: "32+ Items",
                gradient: "from-green-500 to-teal-600"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <motion.div
                    className="absolute top-4 left-4"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white ${index === 0 ? 'bg-[#eb8034]' : index === 1 ? 'bg-[#7c3aed]' : 'bg-[#059669]'
                      }`}>
                      {category.itemCount}
                    </span>
                  </motion.div>

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#AD5618] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm font-medium text-[#AD5618] uppercase tracking-wide">
                      {category.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      Explore Collection
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-8 h-8 bg-[#AD5618] rounded-full flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#AD5618] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#91530A] transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                View All Categories
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-5xl font-extrabold text-gray-900 mb-2">
                Most <span className="text-[#AD5618]">Popular</span> Products
              </h2>
              <p className="text-xl text-gray-600">Discover our top-selling products that customers love</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/products"
                className="mt-4 md:mt-0 bg-[#AD5618] text-white px-6 py-3 rounded-md hover:bg-[#AD5618] transition-colors duration-300 font-bold text-lg inline-block shadow-lg"
              >
                View All →
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 grid-cols-2 sm:grid-cols-4"
          >
            {popularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.03, rotateZ: 2 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden cursor-pointer">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-center group-hover:text-[#AD5618] transition-colors text-lg">
                    {product.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 relative overflow-hidden bg-[#AD5618]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-12 md:grid-cols-2 items-center text-white"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <h3 className="text-5xl font-extrabold mb-8">
                Our Unique Selling Propositions
              </h3>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                We take pride in offering high-quality, locally sourced Rwandan products. Every item is thoughtfully designed and responsibly sourced to bring warmth and character into your home while preserving cultural heritage.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="inline-flex items-center bg-white text-[#AD5618] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Read More
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-8"
            >
              <motion.div
                variants={scaleIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-7xl font-extrabold mb-3"
                >
                  99%
                </motion.div>
                <div className="text-xl opacity-90 font-semibold">Customer Satisfaction</div>
              </motion.div>

              <motion.div
                variants={scaleIn}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-10"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-7xl font-extrabold mb-3"
                >
                  100%
                </motion.div>
                <div className="text-xl opacity-90 font-semibold">Quality Made with Love</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Latest <span className="text-[#AD5618]">Stories</span> & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dive into the world of Rwandan craftsmanship through our curated collection of stories
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                image: "/Basket weaving rwenzori mountains.png",
                title: "The Art of Traditional Basket Weaving in Rwanda",
                excerpt: "Discover the intricate techniques and cultural significance behind Rwanda's traditional basket weaving.",
                author: "Marie Uwimana",
                role: "Artisan & Cultural Expert",
                date: "12 Jan 2024",
                readTime: "5 min read",
                category: "Crafts"
              },
              {
                image: "/Rwanda Bean Single-origin Rwandan coffee.png",
                title: "Rwandan Coffee: A Journey from Farm to Cup",
                excerpt: "Explore the rich flavors and sustainable practices behind Rwanda's world-renowned coffee production.",
                author: "Jean Pierre Ndayisaba",
                role: "Coffee Expert",
                date: "8 Jan 2024",
                readTime: "7 min read",
                category: "Agriculture"
              },
              {
                image: "/community 1.png",
                title: "Building Community Through Art",
                excerpt: "How local artists and craftsmen are coming together to preserve and promote Rwandan cultural heritage.",
                author: "Grace Mukamurenzi",
                role: "Community Leader",
                date: "5 Jan 2024",
                readTime: "6 min read",
                category: "Community"
              }
            ].map((post, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-gray-100"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-[#AD5618]">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-gray-700 bg-white">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#AD5618] transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-lg text-gray-600 leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#AD5618] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-base">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-semibold text-gray-900">{post.date}</div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-[#AD5618] text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-[#91530A] transform hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                Explore All Stories
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#91530A]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h3 className="text-5xl font-extrabold mb-6">Stay Connected with Iby&apos;Iwacu</h3>
            <p className="text-xl opacity-90 mb-10">
              Subscribe to our newsletter for exclusive offers, new arrivals, and artisan stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-2 rounded-md text-white text-lg focus:outline-none focus:ring-1 focus:ring-white/50 border-2 border-white/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-2 bg-white text-[#AD5618] cursor-pointer rounded-md font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div >
  );
}

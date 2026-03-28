"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Shield, Truck, RotateCcw, Users, Leaf, Handshake } from "lucide-react";

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

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  console.log("Product ID:", resolvedParams.id);
  const title = "Handcrafted Agaseke Basket";
  const price = 89.99;
  const compareAt = 120.00;
  const images = [
    "/hand woven baskets 1.png",
    "/Artisan Crafted Braided Raffia (1).png",
    "/Rwandan basket wall in Meg Biram's living room_.png",
    "/Introducing Cesta Collective - Kassatex 1.png",
  ];

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("medium");
  const hasDiscount = compareAt > price;
  const discount = hasDiscount ? Math.round(100 - (price / compareAt) * 100) : 0;

  const sizes = [
    { id: "small", name: "Small", price: 69.99 },
    { id: "medium", name: "Medium", price: 89.99 },
    { id: "large", name: "Large", price: 109.99 }
  ];

  const features = [
    "100% Handwoven by Rwandan Artisans",
    "Natural Raffia & Sisal Materials",
    "Traditional Agaseke Pattern",
    "Sustainable & Eco-Friendly",
    "Fair Trade Certified",
    "Unique Cultural Heritage"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container">
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-base text-gray-600"
          >
            <Link href="/" className="hover:text-[#AD5618] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#AD5618] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{title}</span>
          </motion.nav>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Gallery */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Main Image */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border-4 border-gray-100 bg-white shadow-2xl"
            >
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[500px] relative"
              >
                <Image
                  src={images[active]}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              {hasDiscount && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#eb8034] text-white text-lg font-bold shadow-lg"
                >
                  -{discount}%
                </motion.div>
              )}
            </motion.div>

            {/* Thumbnails */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-4"
            >
              {images.map((src, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActive(i)}
                  className={`relative rounded-2xl overflow-hidden border-3 transition-all duration-300 ${active === i
                    ? "border-[#AD5618] ring-4 ring-[#AD5618]/20 shadow-lg"
                    : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <div className="w-20 h-20 relative">
                    <Image src={src} alt={`View ${i + 1}`} fill className="object-cover" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Title & Price */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4">{title}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg text-gray-600">(4.8) • 24 reviews</span>
              </div>
              <div className="flex items-center gap-4">
                {hasDiscount && (
                  <span className="text-2xl text-gray-400 line-through">${compareAt.toFixed(2)}</span>
                )}
                <span className="text-4xl font-extrabold text-[#AD5618]">${price.toFixed(2)}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="text-xl text-gray-600 leading-relaxed">
                This exquisite Agaseke basket represents centuries of Rwandan craftsmanship. Hand-woven by skilled artisans using traditional techniques passed down through generations, each piece is a unique work of art that brings authentic African culture into your home.
              </p>
            </motion.div>

            {/* Size Selection */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Size</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <motion.button
                    key={size.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size.id)}
                    className={`px-6 py-3 rounded-md font-semibold text-md transition-all duration-300 ${selectedSize === size.id
                      ? "bg-[#AD5618] text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    {size.name} - ${size.price}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <h3 className="text-xl font-bold text-black mb-4">Quantity</h3>
              <div className="inline-flex items-center rounded-2xl border-2 border-black bg-white overflow-hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-6 py-4 hover:bg-black hover:text-white cursor-pointer text-2xl font-bold text-black"
                >
                  -
                </motion.button>
                <span className="px-8 py-3 border-x-2 border-black text-xl font-bold text-black">{qty}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQty(qty + 1)}
                  className="px-6 py-4 hover:bg-black hover:text-white cursor-pointer text-2xl font-bold text-black"
                >
                  +
                </motion.button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-[#AD5618] text-white px-4 py-4 rounded-md cursor-pointer font-bold text-xl hover:bg-[#91530A] transition-colors shadow-xl"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 border-2 border-[#AD5618] text-[#AD5618] px-4 cursor-pointer py-4 rounded-md font-bold text-xl hover:bg-[#AD5618] hover:text-white transition-colors"
              >
                Buy Now
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.6, delay: 0.5 }}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#AD5618] rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200"
            >
              {[
                { icon: <Shield className="w-6 h-6" />, title: "Secure Payment", desc: "SSL Protected" },
                { icon: <Truck className="w-6 h-6" />, title: "Free Shipping", desc: "Orders over $50" },
                { icon: <RotateCcw className="w-6 h-6" />, title: "Easy Returns", desc: "30-day policy" }
              ].map((badge, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl">
                  <div className="flex justify-center mb-2 text-[#AD5618]">{badge.icon}</div>
                  <div className="font-semibold text-gray-900 text-sm">{badge.title}</div>
                  <div className="text-xs text-gray-600">{badge.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-20"
        >
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  The Agaseke basket is more than just a decorative piece—it&apos;s a symbol of Rwandan unity and resilience.
                  Traditionally woven by women in cooperatives across Rwanda, these baskets represent the coming together
                  of communities to create something beautiful and functional.
                </p>
                <p className="mb-4">
                  Each basket takes several days to complete, with artisans carefully selecting and preparing natural
                  materials like sisal and sweetgrass. The intricate geometric patterns are not just decorative—they
                  tell stories of Rwandan culture and history.
                </p>
                <p>
                  By purchasing this basket, you&apos;re not only bringing authentic African artistry into your home,
                  but also supporting sustainable livelihoods for Rwandan women and preserving traditional crafts
                  for future generations.
                </p>
              </div>
            </div>

            <div className="bg-[#AD5618] text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Artisan Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">50+ Artisans</div>
                    <div className="text-sm opacity-90">Supported by this product</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">100% Sustainable</div>
                    <div className="text-sm opacity-90">Natural materials only</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Fair Trade</div>
                    <div className="text-sm opacity-90">Ethical sourcing guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, Bookmark, Eye, MessageCircle } from "lucide-react";

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

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  // Sample blog data - in a real app, this would come from an API or database
  const blogPost = {
    id: params.id,
    title: "The Art of Traditional Basket Weaving in Rwanda",
    subtitle: "Discover the ancient techniques and cultural significance behind Rwanda's traditional basket weaving",
    content: `
      <p>Rwanda's traditional basket weaving is more than just a craft—it's a living testament to the country's rich cultural heritage and the incredible skill of its artisans. For centuries, Rwandan women have been creating these beautiful, functional works of art using techniques passed down through generations.</p>
      
      <h2>The Cultural Significance</h2>
      <p>In Rwandan culture, baskets serve multiple purposes beyond their practical use. They are symbols of unity, community, and the coming together of families. The traditional Agaseke basket, with its distinctive spiral pattern, represents the concept of "coming together" and is often given as a gift during important ceremonies and celebrations.</p>
      
      <p>The intricate geometric patterns found in these baskets are not merely decorative—they tell stories, represent family histories, and carry deep cultural meanings that have been preserved for generations.</p>
      
      <h2>Traditional Techniques and Materials</h2>
      <p>The art of basket weaving in Rwanda primarily uses natural materials sourced from the local environment. Sisal, sweetgrass, and raffia are the most commonly used materials, each chosen for their specific properties and the unique textures they bring to the finished product.</p>
      
      <p>The process begins with the careful selection and preparation of materials. Sisal fibers are extracted from the agave plant, cleaned, and dyed using natural colorants derived from local plants and minerals. The traditional colors—natural beige, deep browns, and rich blacks—are achieved through time-honored dyeing techniques.</p>
      
      <h2>The Weaving Process</h2>
      <p>Creating a traditional Rwandan basket is a meditative and time-intensive process. A single basket can take anywhere from several days to weeks to complete, depending on its size and complexity. The weaver begins from the center, working outward in a continuous spiral, carefully maintaining tension and pattern consistency.</p>
      
      <p>The most skilled artisans can create baskets with incredibly tight weaves that are completely waterproof, a testament to their mastery of the craft. These baskets were traditionally used for storing grain, carrying water, and serving food during important gatherings.</p>
      
      <h2>Preserving the Tradition</h2>
      <p>Today, organizations like Iby'Iwacu are working to preserve these traditional techniques while providing sustainable livelihoods for Rwandan artisans. By connecting these skilled craftspeople with global markets, we ensure that this beautiful art form continues to thrive and evolve while maintaining its cultural authenticity.</p>
      
      <p>Each basket tells a story—not just of the individual artisan who created it, but of a culture that values craftsmanship, community, and the preservation of traditional knowledge for future generations.</p>
    `,
    author: {
      name: "Marie Uwimana",
      role: "Cultural Heritage Expert",
      avatar: "/Ellipse 4.png",
      bio: "Marie is a cultural heritage expert with over 15 years of experience documenting and preserving Rwandan traditional crafts."
    },
    publishedDate: "January 20, 2024",
    readTime: "8 min read",
    category: "Traditional Crafts",
    tags: ["Basket Weaving", "Rwandan Culture", "Traditional Crafts", "Artisans", "Heritage"],
    coverImage: "/hand woven baskets 1.png",
    views: 1247,
    likes: 89,
    comments: 23,
    relatedPosts: [
      {
        id: 2,
        title: "Imigongo: Rwanda's Geometric Art Masterpieces",
        image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png",
        readTime: "6 min read"
      },
      {
        id: 3,
        title: "The Revival of Raffia Craftsmanship",
        image: "/Artisan Crafted Braided Raffia (1).png",
        readTime: "5 min read"
      },
      {
        id: 4,
        title: "Traditional Textiles: Weaving Stories of Heritage",
        image: "/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png",
        readTime: "6 min read"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#AD5618] hover:text-[#91530A] font-semibold transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Category & Meta */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#AD5618]">
                {blogPost.category}
              </span>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{blogPost.publishedDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{blogPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{blogPost.views} views</span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
            >
              {blogPost.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {blogPost.subtitle}
            </motion.p>

            {/* Author Info */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#AD5618] to-[#91530A] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {blogPost.author.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{blogPost.author.name}</div>
                  <div className="text-gray-600">{blogPost.author.role}</div>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-[#AD5618]"
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-semibold">{blogPost.likes}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-[#AD5618]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">{blogPost.comments}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-[#AD5618]"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-[#AD5618]"
                >
                  <Bookmark className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <img
              src={blogPost.coverImage}
              alt={blogPost.title}
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,300px] gap-12">
              {/* Main Content */}
              <motion.article
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="prose prose-lg prose-gray max-w-none"
              >
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  className="text-gray-700 leading-relaxed"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.8'
                  }}
                />

                {/* Tags */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-12 pt-8 border-t border-gray-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#AD5618] hover:text-white transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8"
              >
                {/* Author Bio */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 rounded-3xl p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#AD5618] to-[#91530A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {blogPost.author.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{blogPost.author.name}</div>
                      <div className="text-gray-600 text-sm">{blogPost.author.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{blogPost.author.bio}</p>
                </motion.div>

                {/* Related Posts */}
                <motion.div
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Related Stories</h3>
                  <div className="space-y-6">
                    {blogPost.relatedPosts.map((post, index) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.id}`}
                        className="block group"
                      >
                        <div className="flex gap-4">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-20 h-20 object-cover rounded-xl group-hover:scale-105 transition-transform"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 group-hover:text-[#AD5618] transition-colors text-sm leading-tight mb-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-1 text-gray-500">
                              <Clock className="w-3 h-3" />
                              <span className="text-xs">{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#AD5618]">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold mb-6">Stay Connected with Our Stories</h2>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Get the latest updates on Rwandan craftsmanship, artisan stories, and cultural insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 border-2 border-white/20 bg-white/10 backdrop-blur-sm placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:bg-white/20 transition-all text-lg"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#AD5618] font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



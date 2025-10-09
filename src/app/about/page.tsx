"use client";

import { useState } from "react";

export default function AboutPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-[80vh] text-center relative flex items-center justify-center" 
        style={{ 
          backgroundImage: 'url("/Beautiful sitting corner.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">About Iby' <span>Iwacu</span></h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the rich heritage of Rwandan craftsmanship through our curated collection of authentic, 
            handcrafted products that tell stories of tradition, community, and cultural pride.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16" style={{ backgroundColor: 'rgba(173, 86, 24, 0.5)' }}>
        <div className="container">
          {/* Our Featured Posts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Featured Posts</h2>
            
            {/* Main Featured Article */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative overflow-hidden rounded-2xl group">
                <img 
                  src="/Basket weaving rwenzori mountains.png" 
                  alt="Rwandan Craftsmanship" 
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Discover Stories Behind Rwandan Craftsmanship and Culture
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Rwandan craftsmanship is a testament to the rich cultural heritage that has been passed down through generations. From handwoven baskets that tell stories of community and tradition, to carefully crafted coffee blends that capture the essence of Rwanda's fertile lands, every locally made good carries with it the spirit of the people who created it.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">OB</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Oliver Bennett</div>
                    <div className="text-sm text-white">18 Jan 2022</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Featured Articles */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  image: "/community 1.png",
                  title: "Traditional Weaving Techniques",
                  author: "Sarah M.",
                  date: "15 Jan 2022",
                  category: "crafts"
                },
                {
                  image: "/hand woven baskets 1.png",
                  title: "Basket Making Heritage",
                  author: "John D.",
                  date: "12 Jan 2022",
                  category: "baskets"
                },
                {
                  image: "/Artisan Crafted Braided Raffia (1).png",
                  title: "Raffia Craftsmanship",
                  author: "Maria K.",
                  date: "10 Jan 2022",
                  category: "textiles"
                }
              ].map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Beautifully handcrafted pottery that reflects Rwanda's rich artistic heritage shaped by tradition, made with heart.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Posts */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Posts</h2>
            
            {/* Category Filter */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2 bg-white rounded-full p-1 shadow-lg">
                {['all', 'crafts', 'baskets', 'textiles', 'coffee'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-orange-500'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  image: "/Basket weaving rwenzori mountains.png",
                  author: "Oliver B.",
                  date: "8 Jan 2022",
                  category: "crafts"
                },
                {
                  image: "/hand woven baskets 1.png",
                  author: "Sarah M.",
                  date: "6 Jan 2022",
                  category: "baskets"
                },
                {
                  image: "/Artisan Crafted Braided Raffia (1).png",
                  author: "John D.",
                  date: "4 Jan 2022",
                  category: "textiles"
                },
                {
                  image: "/Rwanda Bean Single-origin Rwandan coffee.png",
                  author: "Maria K.",
                  date: "2 Jan 2022",
                  category: "coffee"
                },
                {
                  image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png",
                  author: "David L.",
                  date: "31 Dec 2021",
                  category: "crafts"
                },
                {
                  image: "/Beautiful sitting corner.png",
                  author: "Anna R.",
                  date: "29 Dec 2021",
                  category: "textiles"
                }
              ].filter(post => selectedCategory === 'all' || post.category === selectedCategory).map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Latest Post" 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Beautifully handcrafted pottery that reflects Rwanda's rich artistic heritage shaped by tradition, made with heart.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{post.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <button className="bg-[#AD5618] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#91530A] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                Load More Blogs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl text-black font-bold text-center mb-12">Our Values & Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-[#AD5618] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Cultural Preservation</h3>
              <p className="text-gray-400">We're committed to preserving and promoting Rwandan cultural heritage through authentic craftsmanship.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-[#AD5618] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Community Support</h3>
              <p className="text-gray-400">Supporting local artisans and communities by providing fair compensation and sustainable opportunities.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-[#AD5618] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">Quality Craftsmanship</h3>
              <p className="text-gray-400">Ensuring every product meets the highest standards of quality and authenticity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



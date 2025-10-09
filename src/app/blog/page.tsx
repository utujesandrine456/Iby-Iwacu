"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Traditional Basket Weaving in Rwanda",
      excerpt: "Discover the ancient techniques and cultural significance behind Rwanda's traditional basket weaving, a craft that has been preserved and passed down through generations.",
      author: "Marie Uwimana",
      role: "Cultural Heritage Expert",
      date: "20 Jan 2024",
      readTime: "8 min read",
      category: "Crafts",
      image: "/hand woven baskets 1.png",
      featured: true
    },
    {
      id: 2,
      title: "Imigongo: Rwanda's Geometric Art Masterpieces",
      excerpt: "Explore the stunning geometric patterns and traditional techniques that make Imigongo art a unique expression of Rwandan cultural identity.",
      author: "Jean Pierre Ndayisaba",
      role: "Art Historian",
      date: "18 Jan 2024",
      readTime: "6 min read",
      category: "Art",
      image: "/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png"
    },
    {
      id: 3,
      title: "Rwandan Coffee: From Farm to Your Cup",
      excerpt: "Journey through Rwanda's coffee regions and discover how sustainable farming practices create some of the world's most sought-after coffee beans.",
      author: "Grace Mukamurenzi",
      role: "Coffee Specialist",
      date: "15 Jan 2024",
      readTime: "7 min read",
      category: "Agriculture",
      image: "/Rwanda Bean Single-origin Rwandan coffee.png"
    },
    {
      id: 4,
      title: "Building Community Through Art in Kigali",
      excerpt: "How local artists and craftsmen are coming together to preserve and promote Rwandan cultural heritage in the heart of the capital.",
      author: "David Uwizeye",
      role: "Community Leader",
      date: "12 Jan 2024",
      readTime: "9 min read",
      category: "Community",
      image: "/community 1.png"
    },
    {
      id: 5,
      title: "The Revival of Raffia Craftsmanship",
      excerpt: "Discover how traditional raffia weaving techniques are being modernized while preserving cultural authenticity and supporting local artisans.",
      author: "Sarah Mutesi",
      role: "Craft Specialist",
      date: "10 Jan 2024",
      readTime: "5 min read",
      category: "Crafts",
      image: "/Artisan Crafted Braided Raffia (1).png"
    },
    {
      id: 6,
      title: "Traditional Textiles: Weaving Stories of Heritage",
      excerpt: "From vibrant wax prints to handwoven fabrics, explore how Rwandan textiles tell stories of tradition, community, and artistic excellence.",
      author: "Anna Niyonsaba",
      role: "Textile Designer",
      date: "8 Jan 2024",
      readTime: "6 min read",
      category: "Textiles",
      image: "/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png"
    },
    {
      id: 7,
      title: "Sustainable Tourism: Supporting Rwandan Artisans",
      excerpt: "How responsible tourism is helping preserve traditional crafts and provide sustainable income for local communities across Rwanda.",
      author: "Emmanuel Kwizera",
      role: "Tourism Expert",
      date: "5 Jan 2024",
      readTime: "7 min read",
      category: "Tourism",
      image: "/Beautiful sitting corner.png"
    },
    {
      id: 8,
      title: "The Future of Rwandan Craftsmanship",
      excerpt: "Innovation meets tradition as young artisans blend modern techniques with age-old practices to create contemporary masterpieces.",
      author: "Claudine Uwimana",
      role: "Innovation Specialist",
      date: "3 Jan 2024",
      readTime: "8 min read",
      category: "Innovation",
      image: "/IBO STOOL, Awka Region, Nigeria  Alan Mann Collection.png"
    },
    {
      id: 9,
      title: "Celebrating Women Artisans in Rwanda",
      excerpt: "Meet the remarkable women who are preserving and innovating traditional crafts while empowering their communities and future generations.",
      author: "Josiane Mukamurenzi",
      role: "Women's Empowerment Advocate",
      date: "1 Jan 2024",
      readTime: "9 min read",
      category: "Empowerment",
      image: "/Basket weaving rwenzori mountains.png"
    }
  ];

  const categories = ['all', 'Crafts', 'Art', 'Agriculture', 'Community', 'Textiles', 'Tourism', 'Innovation', 'Empowerment'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Cart Navigation Section */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-600 hover:text-[#AD5618] transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-[#AD5618] font-medium">Blog</span>
            </div>
            <Link 
              href="/cart" 
              className="flex items-center gap-2 bg-[#AD5618] hover:bg-[#91530A] text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              View Cart (3)
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100 to-transparent rounded-full opacity-30"></div>
        
        <div className="container relative z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Blog & <span className="text-[#AD5618]">Stories</span></h1>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed mb-30">
            Dive into the rich world of Rwandan craftsmanship through our curated collection of stories, 
            featuring artisans, techniques, and the cultural heritage behind every piece.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#AD5618] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category === 'all' ? 'All Stories' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container">
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#AD5618]">
                      Featured Story
                    </span>
                  </div>
                </div>
                
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-[#AD5618] bg-orange-100 mb-4">
                      {post.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#AD5618] to-[#91530A] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 bg-[#AD5618] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#91530A] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 w-fit"
                  >
                    Read Full Story
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-[#AD5618]">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium text-gray-700 bg-white/90">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#AD5618] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#AD5618] to-[#91530A] rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{post.date}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-[#AD5618] to-[#91530A]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected with Our Stories</h2>
          <p className="text-white/90 text-md mb-8 max-w-2xl mx-auto">
            Get the latest updates on Rwandan craftsmanship, artisan stories, and cultural insights delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-2 border-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50" 
            />
            <button className="px-6 py-3 bg-white text-[#AD5618] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}



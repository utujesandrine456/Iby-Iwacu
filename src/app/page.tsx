"use client";

import React from "react";

const PRIMARY = "#AD5618"; // brand primary
const ACCENT = "#91530A";  // dark amber
const DARK = "#1C1206";    // near-black brown

function StarRow({ count = 5 }: { count?: number }) {
    return (
        <div style={{ color: "#FFD600", fontSize: 18 }}>
            {Array(count).fill(0).map((_, i) => <span key={i}>★</span>)}
        </div>
    );
}

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

    const categories = [
        {
            title: "Good shirts",
            image: "/Real Wax African Fabrics 100 Cotton Fabric by Africanpremier, $27_99 1.png"
        },
        {
            title: "Rwandan Coffee",
            image: "/Rwanda Bean Single-origin Rwandan coffee.png"
        },
        {
            title: "Arts and crafts",
            image: "/Beautiful sitting corner.png"
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

    const blogPosts = [
        {
            title: "Crafts that came from heart of Rwandans",
            author: "Oliver Bennett",
            date: "18 Jan 2023",
            image: "/Basket weaving rwenzori mountains.png"
        },
        {
            title: "Crafts that came from heart of Rwandans",
            author: "Oliver Bennett",
            date: "18 Jan 2023",
            image: "/Rwanda Bean Single-origin Rwandan coffee.png"
        },
        {
            title: "Crafts that came from heart of Rwandans",
            author: "Oliver Bennett",
            date: "18 Jan 2023",
            image: "/community 1.png"
        }
    ];

    return (
        <div className="min-h-screen">
           
           {/* Hero Section */}
            <section className="relative">
                <img src="/Homepageimagebackground.png" alt="Hero" className="h-[88vh] w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.55)_100%)]" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container">
                        <div className="max-w-4xl text-center text-white mx-auto">
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow mb-4">
                                Crafting Comfort, Redefining<br />
                                Spaces. Your product, Your<br />
                                Signature Style!
                            </h1>
                            <p className="text-[17px] opacity-90 mb-8 max-w-2xl mx-auto">
                                Discover authentic handcrafted products from Rwandan artisans — premium quality pieces that make your space feel truly yours. Hand-made crafts, natural materials, and cultural heritage.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <a href="/products" className="bg-[#AD5618] text-white px-8 hover:text-[#AD5618] py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                                    Shop Now
                                </a>
                                <a href="/about" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <h2 className="text-center text-3xl text-[#AD5618] font-bold mb-4">Featured Products</h2>
                    <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
                        Explore our handpicked, locally sourced Rwandan products. Each piece tells a story of tradition and craftsmanship.
                    </p>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="relative">
                                    <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
                                    <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                                        {product.discount}
                                    </div>
                                    <button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">{product.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                                        <span className="text-lg font-bold text-gray-900">${product.discountedPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </section>

            {/* Categories Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23AD5618" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                
                <div className="container relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#AD5618] mb-6">Explore Our Premium Categories</h2>
                        <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover handpicked collections that showcase the finest Rwandan craftsmanship. Each category tells a unique story of tradition, innovation, and cultural heritage.
                        </p>
                    </div>
                    
                    <div className="grid gap-8 lg:grid-cols-3">
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
                            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={category.image} 
                                        alt={category.title} 
                                        className="h-80 w-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${category.gradient}`}>
                                            {category.itemCount}
                                        </span>
                                    </div>
                                    
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                                        <div className="w-8 h-8 bg-[#AD5618] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <a href="/products" className="inline-flex items-center gap-2 bg-[#AD5618] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#91530A] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                            View All Categories
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                    </div>
                </section>

            {/* Most Popular Products Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl text-[#AD5618] font-bold mb-2">Most Popular Products</h2>
                            <p className="text-gray-600">Discover our top-selling products that customers love</p>
                        </div>
                        <a href="/products" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                            View All →
                        </a>
                    </div>
                    <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
                        {popularProducts.map((product) => (
                            <div key={product.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                                <img src={product.image} alt={product.title} className="aspect-square w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 text-center">{product.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </section>

            {/* Unique Selling Proportions Section */}
            <section className="py-16 text-white" style={{ background: PRIMARY }}>
                <div className="container">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Have a Look at Our Unique Selling Proportions</h3>
                            <p className="text-lg opacity-90 mb-6">
                                We take pride in offering high-quality, locally sourced Rwandan products. Every item is thoughtfully designed and responsibly sourced to bring warmth and character into your home while preserving cultural heritage.
                            </p>
                            <a href="/about" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                                Read More →
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">99%</div>
                                <div className="text-lg opacity-90">Customer satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold mb-2">100%</div>
                                <div className="text-lg opacity-90">Quality made with love</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100 to-transparent rounded-full opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-100 to-transparent rounded-full opacity-30"></div>
                
                <div className="container relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Stories & Insights</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Dive into the world of Rwandan craftsmanship through our curated collection of stories, 
                            featuring artisans, techniques, and the cultural heritage behind every piece.
                        </p>
                    </div>
                    
                    {/* Featured Blog Post */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <div className="relative overflow-hidden rounded-2xl group">
                            <img 
                                src="/Basket weaving rwenzori mountains.png" 
                                alt="Featured Blog Post" 
                                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#AD5618] to-[#eb8034] rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">MU</span>
                                    </div>
                                    <div className="text-white">
                                        <div className="font-semibold">Marie Uwimana</div>
                                        <div className="text-sm font-semibold text-black opacity-90">Artisan & Cultural Expert</div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    The Art of Traditional Basket Weaving in Rwanda
                                </h3>
                                <p className="text-white/90 leading-relaxed">
                                    Come and Disver very wonderfull products here at Iby'iwacu.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-center">
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                                    Stories That Connect Us to Culture
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Our blog brings you closer to the heart of Rwandan craftsmanship. Each story is carefully curated 
                                    to showcase the passion, skill, and cultural heritage that makes every piece unique.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#AD5618] rounded-full"></div>
                                        <span className="text-sm text-gray-600">Cultural Heritage</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-[#AD5618] rounded-full"></div>
                                        <span className="text-sm text-gray-600">Artisan Stories</span>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="/blog" className="inline-flex items-center gap-2 bg-[#AD5618] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#91530A] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 w-fit">
                                Explore All Stories
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                image: "/Rwanda Bean Single-origin Rwandan coffee.png",
                                title: "Rwandan Coffee: A Journey from Farm to Cup",
                                excerpt: "Explore the rich flavors and sustainable practices behind Rwanda's world-renowned coffee production.",
                                author: "Jean Pierre Ndayisaba",
                                role: "Coffee Expert",
                                date: "12 Jan 2024",
                                readTime: "5 min read",
                                category: "Agriculture"
                            },
                            {
                                image: "/community 1.png",
                                title: "Building Community Through Art: Kigali's Creative Hub",
                                excerpt: "How local artists and craftsmen are coming together to preserve and promote Rwandan cultural heritage.",
                                author: "Grace Mukamurenzi",
                                role: "Community Leader",
                                date: "8 Jan 2024",
                                readTime: "7 min read",
                                category: "Community"
                            },
                            {
                                image: "/Artisan Crafted Braided Raffia (1).png",
                                title: "The Revival of Raffia Craftsmanship",
                                excerpt: "Discover how traditional raffia weaving techniques are being modernized while preserving cultural authenticity.",
                                author: "David Uwizeye",
                                role: "Craft Specialist",
                                date: "5 Jan 2024",
                                readTime: "6 min read",
                                category: "Crafts"
                            }
                        ].map((post, index) => (
                            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
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
                                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#AD5618] transition-colors line-clamp-2">
                                        {post.title}
                                    </h4>
                                    
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
                    
                    {/* Newsletter Signup */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-[#AD5618] to-[#91530A] rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Stay Connected with Our Stories</h3>
                            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                Get the latest updates on Rwandan craftsmanship, artisan stories, and cultural insights delivered to your inbox.
                            </p>
                            <div className="flex max-w-md mx-auto gap-3">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50" 
                                />
                                <button className="px-6 py-3 bg-white text-[#AD5618] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="grid gap-12 md:grid-cols-[400px,1fr] items-start">
                    <div>
                            <h2 className="text-3xl text-[#AD5618] text-center font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 mb-6 text-center">
                                Find answers about products, shipping, payments, and how your purchase supports Rwandan artisans. If you can't find what you're looking for, reach out and we'll help.
                            </p>
                            <a href="/contact" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                Ask A Question →
                            </a>
                        </div>
                        <InteractiveFAQ />
                    </div>
                </div>
                </section>
        </div>
    );
}

function InteractiveFAQ() {
    const faqs = [
        {
            q: "What makes your Rwandan products unique?",
            a: "Each piece is handcrafted by skilled artisans using time‑honored techniques and locally sourced materials. Subtle variations make every item one‑of‑a‑kind, preserving traditional Rwandan craftsmanship.",
        },
        {
            q: "How do you ensure the quality of your local Rwandan products?",
            a: "We work directly with established artisan communities and conduct regular quality inspections. Every product meets our high standards before reaching your home.",
        },
        {
            q: "What kinds of products can I find on your website?",
            a: "Home decor, textiles, tableware, wearable art and more—carefully curated to fit modern homes while celebrating Rwandan heritage and traditional craftsmanship.",
        },
        {
            q: "How does buying from your platform support Rwandan artisans?",
            a: "Your purchase provides fair compensation, reinvests in training programs, and helps sustain local artisan communities while preserving cultural traditions.",
        },
    ];

    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            {faqs.map((item, i) => (
                <div key={i} className={`p-6 ${i !== faqs.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="flex w-full items-center justify-between text-left"
                    >
                        <span className="text-lg font-medium text-gray-900">{item.q}</span>
                        <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-white text-lg" style={{ background: PRIMARY }}>
                            {openIndex === i ? "−" : "+"}
                        </span>
                    </button>
                    {openIndex === i && (
                        <p className="mt-4 text-gray-700 leading-relaxed">{item.a}</p>
                    )}
                </div>
            ))}
        </div>
    );
}

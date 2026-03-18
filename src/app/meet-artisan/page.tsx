"use client";

import Image from "next/image";

export default function MeetArtisanPage() {
  // Sample featured products data
  const featuredProducts = [
    {
      id: '1',
      name: 'Ibitenge',
      price: 82000,
      image: '/Basket weaving rwenzori mountains.png',
      category: 'Textiles'
    },
    {
      id: '2',
      name: 'Food & Drinks',
      price: 27000,
      image: '/Rwandan basket wall in Meg Biram\'s living room_.png',
      category: 'Beverages'
    },
    {
      id: '3',
      name: 'Furniture',
      price: 15000,
      image: '/Beautiful sitting corner.png',
      category: 'Home & Garden'
    },
    {
      id: '4',
      name: 'Crafts',
      price: 45000,
      image: '/Order_image.png',
      category: 'Handmade'
    },
    {
      id: '5',
      name: 'Crafts',
      price: 78000,
      image: '/Basket weaving rwenzori mountains.png',
      category: 'Handmade'
    },
    {
      id: '6',
      name: 'Furniture',
      price: 39000,
      image: '/Beautiful sitting corner.png',
      category: 'Home & Garden'
    }
  ];

  // Sample other artisans data
  const otherArtisans = [
    {
      id: '1',
      name: 'Sandrine UTUJE',
      description: 'Traditional basket weaver & artisans',
      image: '/Basket weaving rwenzori mountains.png'
    },
    {
      id: '2',
      name: 'Bonnette UMURERWA',
      description: 'Traditional shoes maker & artist',
      image: '/Rwandan basket wall in Meg Biram\'s living room_.png'
    },
    {
      id: '3',
      name: 'Moise ABAYO',
      description: 'Traditional  clothes maker & designer',
      image: '/Beautiful sitting corner.png'
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Artisan Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center">
            {/* Profile Picture */}
            <div className="relative mb-6">
              <Image
                src="/Basket weaving rwenzori mountains.png"
                alt="Marie uwimana"
                width={128}
                height={128}
                className="rounded-full object-cover mx-auto border-4 border-[#AD5618]"
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Marie uwimana</h1>
            <p className="text-lg text-gray-600 mb-4">Traditional Basket weaver & Artisan</p>

            {/* Bio */}
            <p className="text-gray-700 mb-6 text-md max-w-2xl mx-auto">
              Creating authentic Rwandan baskets using traditional effective techniques passed down
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button className="bg-[#AD5618] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#91530A] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Message
              </button>
              <button className="border-2 border-[#AD5618] text-[#AD5618] px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#AD5618] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Follow
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AD5618]">1.3k</div>
                <div className="text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AD5618]">355</div>
                <div className="text-gray-600">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#AD5618]">14</div>
                <div className="text-gray-600">items</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured products</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                <div className="relative mb-3 h-32 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#AD5618] font-bold text-lg">
                    {product.price.toLocaleString()} Fr
                  </span>
                  <div className="flex gap-2">
                    <button className="bg-[#AD5618] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#91530A] transition-colors">
                      Add to cart
                    </button>
                    <button className="border-2 border-[#AD5618] text-[#AD5618] px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#AD5618] hover:text-white transition-colors">
                      Order now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Other Artisans Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Meet other artisans</h2>
            <a href="#" className="text-[#AD5618] hover:text-[#91530A] font-medium">see all</a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherArtisans.map(artisan => (
              <div key={artisan.id} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="relative mb-4 w-20 h-20 mx-auto">
                  <Image
                    src={artisan.image}
                    alt={artisan.name}
                    fill
                    className="rounded-full object-cover border-2 border-[#AD5618]"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{artisan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{artisan.description}</p>
                <button className="bg-[#AD5618] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#91530A] transition-colors">
                  Meet the artisan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

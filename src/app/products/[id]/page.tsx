"use client";

import { useState } from "react";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const title = "Double Bed & Side Tables";
  const price = 54.98;
  const compareAt = 79.99;
  const images = [
    "/IBO STOOL, Awka Region, Nigeria  Alan Mann Collection.png",
    "/Beautiful sitting corner.png",
    "/Introducing Cesta Collective - Kassatex 1.png",
    "/Imigongo Rwanda 🇷🇼.png",
  ];

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const hasDiscount = compareAt > price;
  const discount = hasDiscount ? Math.round(100 - (price / compareAt) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-10">
      <div className="container">
        {/* Breadcrumbs */}
        <div className="mb-6 text-sm text-gray-600">
          <a href="/products" className="hover:text-[#AD5618]">Products</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium line-clamp-1 align-middle">{title}</span>
        </div>

        <div className="grid gap-6 md:grid-cols-[110px,1fr,420px]">
          {/* Thumbs */}
          <aside className="space-y-3 order-1 md:order-none">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`block w-full rounded-xl overflow-hidden border transition-all ${
                  active === i ? "border-[#AD5618] ring-2 ring-[#AD5618]/30" : "border-white/60"
                }`}
                aria-label={`Select image ${i + 1}`}
              >
                <img src={src} alt={`thumbnail ${i + 1}`} className="w-full h-24 object-cover" />
              </button>
            ))}
          </aside>

          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/60 bg-white shadow-xl">
            <img src={images[active]} alt={title} className="w-full h-full object-cover" />
            {hasDiscount && (
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black text-white text-xs font-semibold shadow">-{discount}%</div>
            )}
          </div>

          {/* Summary */}
          <aside className="bg-white rounded-2xl shadow-xl border border-white/60 p-6 md:sticky md:top-20 h-fit">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <div className="flex items-baseline gap-3 mb-3">
              {hasDiscount && (
                <span className="text-gray-500 line-through">${compareAt.toFixed(2)}</span>
              )}
              <span className="text-3xl font-extrabold text-gray-900">${price.toFixed(2)}</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Crafted with care and designed for everyday elegance. Elevate your space with durable materials and authentic aesthetics.
            </p>

            {/* Quantity */}
            <div className="mb-5">
              <div className="text-sm font-medium text-gray-700 mb-2">Quantity</div>
              <div className="inline-flex items-center rounded-xl border border-gray-300 bg-white overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 hover:bg-gray-50">-</button>
                <span className="px-5 py-2 border-x border-gray-300 select-none">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-2 hover:bg-gray-50">+</button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 rounded-xl bg-gradient-to-r from-[#AD5618] to-[#91530A] px-6 py-3 text-white font-semibold shadow-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 rounded-xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50">Buy Now</button>
            </div>

            {/* Trust badges */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
              <div className="rounded-lg bg-gray-50 p-2">Secure payment</div>
              <div className="rounded-lg bg-gray-50 p-2">Fast shipping</div>
              <div className="rounded-lg bg-gray-50 p-2">Easy returns</div>
            </div>
          </aside>
        </div>

        {/* Description / Details */}
        <section className="mt-10 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/60 bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold mb-3">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              Experience a blend of modern comfort and traditional craftsmanship. Each piece is carefully finished to highlight
              natural textures and long‑lasting quality suitable for contemporary homes.
            </p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-3">Specifications</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Material: Solid wood and metal accents</li>
              <li>• Finish: Natural matte</li>
              <li>• Warranty: 12 months</li>
              <li>• Origin: Rwanda</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}



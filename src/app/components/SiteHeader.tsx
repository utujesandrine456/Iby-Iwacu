"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/app/components/AuthProvider";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'rw'>('en');
  const { user, logout } = useAuth();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'rw' : 'en');
  };

  const getLanguageText = () => {
    return language === 'en' ? 'English' : 'Kinyarwanda';
  };

  const getLanguageLabel = () => {
    return language === 'en' ? 'English' : 'Kinyarwanda';
  };

  return (
    <header className="border-b border-black/5 bg-white backdrop-blur sticky top-0 z-50 p-2">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/Logoibyiwacu.png" alt="Iby'Iwacu" className="h-8 w-auto" />
          <h1 className="text-3xl text-black font-bold">Iby' <span className="text-[#cf671c]">Iwacu</span></h1>
        </Link>
        <nav className="hidden md:flex items-center font-medium text-black gap-10 text-normal">
          <Link href="/" className="hover:opacity-80">
            {language === 'en' ? 'Home' : 'Ahabanza'}
          </Link>
          <div className="relative">
            <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-1 hover:opacity-80">
              <span>{language === 'en' ? 'Categories' : 'Ibice'}</span>
              <span className="text-xs">▾</span>
            </button>
            {open && (
              <div className="absolute mt-2 w-44 rounded-lg border border-black/10 bg-white shadow">
                <ul className="p-1 text-sm">
                  <li><Link className="block rounded px-3 py-2 hover:bg-black/5" href="/products">
                    {language === 'en' ? 'All Products' : 'Ibicuruzwa Byose'}
                  </Link></li>
                  <li><Link className="block rounded px-3 py-2 hover:bg-black/5" href="/blog">
                    {language === 'en' ? 'Blog' : 'Inyandiko'}
                  </Link></li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/contact" className="hover:opacity-80">
            {language === 'en' ? 'Contact Us' : 'Twandikire'}
          </Link>
          <Link href="/blog" className="hover:opacity-80">
            {language === 'en' ? 'Blog' : 'Inyandiko'}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            {/* Cart Badge */}
            <span className="absolute -top-1 -right-1 bg-[#AD5618] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              3
            </span>
          </Link>

          {/* Auth area */}
          {user ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#AD5618] to-[#91530A] text-white flex items-center justify-center text-sm font-semibold">
                {(user.fullName || user.email).slice(0,1).toUpperCase()}
              </div>
              <button onClick={logout} className="text-sm text-[#AD5618] hover:text-[#91530A] font-semibold">Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="text-sm text-[#AD5618] hover:text-[#91530A] font-semibold">Login</Link>
              <span className="text-gray-300">|</span>
              <Link href="/signup" className="text-sm text-[#AD5618] hover:text-[#91530A] font-semibold">Sign Up</Link>
            </div>
          )}

          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="h-9 rounded-lg border-2 border-[#AD5618] px-4 font-semibold text-[14px] bg-white text-[#AD5618] hover:bg-[#AD5618] hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
            title={`Switch to ${language === 'en' ? 'Kinyarwanda' : 'English'}`}
          >
            <span>{getLanguageText()}</span>
          </button>
        </div>
      </div>
    </header>
  );
}



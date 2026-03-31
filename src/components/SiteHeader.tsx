"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/AuthProvider";
import { ShoppingBasket } from "lucide-react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'rw'>('en');
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'rw' : 'en');
  };

  const getLanguageText = () => {
    return language === 'en' ? 'Eng' : 'Kiny';
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`border-b border-black/5 bg-white/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg py-2' : 'py-3'
        }`}
    >
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.img
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            src="/Logoibyiwacu.png"
            alt="Iby&apos;Iwacu"
            className="h-8 w-auto"
          />
          <h1 className="text-3xl text-black font-bold">
            Iby&apos; <span className="text-[#cf671c] group-hover:text-[#AD5618] transition-colors">Iwacu</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center font-medium text-black gap-10 text-normal">
          <Link href="/" className="relative group hover:text-[#AD5618] transition-colors">
            {language === 'en' ? 'Home' : 'Ahabanza'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AD5618] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/products" className="relative group hover:text-[#AD5618] transition-colors">
            {language === 'en' ? 'Products' : 'Ibicuruzwa'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AD5618] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/about" className="relative group hover:text-[#AD5618] transition-colors">
            {language === 'en' ? 'About' : 'Turi Nande'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AD5618] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/contact" className="relative group hover:text-[#AD5618] transition-colors">
            {language === 'en' ? 'Contact Us' : 'Twandikire'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AD5618] group-hover:w-full transition-all duration-300" />
          </Link>
          <Link href="/blog" className="relative group hover:text-[#AD5618] transition-colors">
            {language === 'en' ? 'Blog' : 'Inyandiko'}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#AD5618] group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors group">
            <ShoppingBasket color="#000" />
          </Link>

          {/* Auth area */}
          {user ? (
            <div className="flex items-center gap-2">
              <button onClick={logout} className="text-md border-2 py-2 px-6 rounded-md border-[#AD5618] text-[#AD5618] cursor-pointer hover:text-[#91530A] font-semibold">Logout</button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="text-md border-2 py-2 px-6 rounded-md border-[#AD5618] text-[#AD5618] cursor-pointer hover:text-[#91530A] font-semibold">Login</Link>
              <span className="text-gray-300">|</span>
              <Link href="/signup" className="text-md border-2 py-2 px-6 rounded-md border-[#AD5618] text-[#AD5618] cursor-pointer hover:text-[#91530A] font-semibold">Sign Up</Link>
            </div>
          )}  
        </div>      
      </div>
    </motion.header>
  );
}



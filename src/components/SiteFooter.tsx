"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";

export default function SiteFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#121212] text-white relative overflow-hidden pt-10 pb-6 border-t border-white/5">
      {/* Traditional Rwandan Imigongo SVG Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="imigongo"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              {/* Geometric Imigongo Pattern: Zig-Zags and Diamonds */}
              <path
                d="M0 50 L25 0 L50 50 L75 100 L100 50 M0 0 L50 100 L100 0"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <rect x="45" y="45" width="10" height="10" transform="rotate(45 50 50)" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#imigongo)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block group">
              <h2 className="text-3xl font-bold tracking-tight text-[#AD5618] group-hover:text-white transition-colors duration-300">
                Iby&apos;Iwacu
              </h2>
              <div className="h-1 w-0 group-hover:w-full bg-[#AD5618] transition-all duration-300 rounded-full" />
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
              Celebrating Rwandan craftsmanship and the creative spirit that connects us all. Support local, shop authentic.
            </p>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'twitter'].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#AD5618] hover:border-[#AD5618] transition-all duration-300 group"
                  aria-label={social}
                >
                  <SocialIcon name={social} className="w-5 h-5 group-hover:text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={itemVariants} className="lg:pl-8">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center">
              Explore
              <span className="ml-2 h-px w-8 bg-[#AD5618]" />
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Products', 'Artisans', 'Blog'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-all flex items-center group overflow-hidden"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#AD5618] mr-0 group-hover:mr-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-xl mb-6 flex items-center">
              Support
              <span className="ml-2 h-px w-8 bg-[#AD5618]" />
            </h3>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping', 'Returns', 'FAQ', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-all flex items-center group overflow-hidden"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#AD5618] mr-0 group-hover:mr-2 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center">
              Newsletter
              <span className="ml-2 h-px w-8 bg-[#AD5618]" />
            </h3>
            <p className="text-gray-400">Join our community and get updates on new arrivals.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 focus:outline-none focus:border-[#AD5618] focus:bg-white/10 transition-all text-white placeholder-gray-500"
              />
              <button
                className="absolute right-2 top-2 bottom-2 px-2 cursor-pointer bg-[#AD5618] hover:bg-[#8f4714] text-white rounded-lg transition-colors font-medium text-sm"
              >
                <Send />
              </button>
            </div>
            <p className="text-xs text-gray-500 italic">
              By subscribing, you agree to our terms and conditions.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Iby&apos;Iwacu.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.5,
          y: showScrollTop ? 0 : 20
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#AD5618] text-white rounded-full flex items-center justify-center cursor-pointer shadow-2xl z-50 hover:bg-[#8f4714] transition-colors group"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
}

function SocialIcon({ name, className }: { name: string; className?: string }) {
  if (name === 'instagram') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059 1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (name === 'facebook') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (name === 'twitter') {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    );
  }
  return null;
}

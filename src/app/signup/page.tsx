"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/AuthProvider";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, UserPlus, Sparkles } from "lucide-react";

export default function SignupPage() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    try {
      const res = await signup({ email: formData.email, password: formData.password, fullName: formData.fullName });
      if (!res.ok) setError(res.message || "Something went wrong. Please try again.");
      else window.location.href = "/welcome";
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.fullName.trim().length >= 2 && /.+@.+\..+/.test(formData.email) && formData.password.length > 6 && formData.agreeToTerms;

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#fafafa] flex flex-col lg:flex-row-reverse relative">

      <div className="hidden lg:flex w-3/5 h-full relative p-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl"
        >
          {/* Main login.jpg - no stretching */}
          <Image
            src="/login.jpg"
            alt="Rwandan Artistic Community"
            fill
            className="object-cover object-center"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-tl from-black/80 via-black/20 to-transparent" />

          <div className="absolute top-12 right-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20"
            >
              <Image src="/Logoibyiwacu.png" alt="Logo" width={28} height={28} className="rounded-md" />
              <span className="text-white font-extrabold text-lg tracking-tight">Iby&apos;<span className="text-[#eb8034]">Iwacu</span></span>
            </motion.div>
          </div>

          <div className="absolute bottom-16 right-16 text-right max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-6xl font-black text-white leading-[1.1] mb-6"
            >
              Join Our <br />
              <span className="text-[#eb8034]">Artisan</span> World
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white/70 text-lg leading-relaxed font-medium"
            >
              Be part of a growing community dedicated to celebrating and preserving Rwandan cultural heritage.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* ── Left Side: Minimalist High-End Form (40%) ────────────── */}
      <div className="flex-1 h-full flex items-center justify-center relative p-6 bg-white lg:bg-transparent">

        {/* mobile logo - only shows below lg */}
        <div className="lg:hidden absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <Image src="/Logoibyiwacu.png" alt="Logo" width={40} height={40} className="rounded-xl shadow-lg" />
          <h1 className="text-2xl font-black text-gray-900">Iby&apos;<span className="text-[#AD5618]">Iwacu</span></h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-[420px] space-y-10"
        >
          {/* Header */}
          <div className="space-y-4">
            <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">Create your account</h3>
            <p className="text-gray-500 text-md font-medium">Discover your artistic potential today.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 bg-red-50 border border-red-100 rounded-md text-red-600 text-xs font-semibold flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shrink-0" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-md font-semibold text-gray-400 ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#AD5618] transition-colors" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-white border border-gray-100 rounded-md py-4 pl-12 pr-4 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 focus:border-[#AD5618] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-md font-semibold text-gray-400 ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#AD5618] transition-colors" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@ibyiwacu.com"
                    className="w-full bg-white border border-gray-100 rounded-md py-4 pl-12 pr-4 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 focus:border-[#AD5618] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-md font-semibold text-gray-400 ml-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#AD5618] transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full bg-white border border-gray-100 rounded-md py-4 pl-12 pr-12 text-gray-900 text-sm focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 focus:border-[#AD5618] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {formData.password.length > 0 && formData.password.length <= 6 && (
                  <p className="text-xs text-[#AD5618] mt-2 ml-1 font-medium animate-pulse">
                    Password must be more than 6 characters
                  </p>
                )}
              </div>
            </div>

            <div className="px-1 py-1">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="">
                  <input
                    type="checkbox"
                    className="hidden peer"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    name="agreeToTerms"
                    required
                  />
                  <div className="w-5 h-5 border border-gray-200 rounded-sm flex items-center justify-center bg-gray-50 peer-checked:bg-[#AD5618] peer-checked:border-[#AD5618] transition-all">
                    <div className="w-2.5 h-2.5 bg-white rounded-[1px] scale-0 peer-checked:scale-100 transition-transform" />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500 leading-relaxed">
                  I agree to the <Link href="#" className="font-bold text-[#AD5618]">Terms of Service</Link> and <Link href="#" className="font-bold text-[#AD5618]">Privacy Policy</Link>.
                </span>
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={!isFormValid || isSubmitting}
              type="submit"
              className={`w-full py-4 rounded-md font-semibold text-md flex items-center justify-center gap-3 transition-all ${isFormValid && !isSubmitting
                ? "bg-[#AD5618] hover:bg-[#91530A] text-white"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-md animate-spin" />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Footer inside panel */}
          <div className="pt-4 text-center">
            <p className="text-md font-medium text-gray-500">
              Already a member?{" "}
              <Link href="/login" className="text-[#AD5618] hover:text-[#91530A] transition-colors underline-offset-4 hover:underline font-semibold">
                Login here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>


      <div className="hidden lg:block absolute bottom-0 left-0 w-64 h-64 bg-[#AD5618]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 -z-10" />
    </div>
  );
}

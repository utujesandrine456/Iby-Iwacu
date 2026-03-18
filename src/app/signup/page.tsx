"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/components/AuthProvider";

export default function SignupPage() {
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsSubmitting(true);
    try {
      const res = await signup({ email: formData.email, password: formData.password, fullName: formData.fullName });
      if (!res.ok) {
        alert(res.message);
      } else {
        window.location.href = "/welcome";
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailValid = /.+@.+\..+/.test(formData.email);
  const nameValid = formData.fullName.trim().length >= 2;
  const passwordValid = formData.password.length >= 6;
  const isFormValid = emailValid && nameValid && passwordValid && formData.agreeToTerms;

  return (
    <div className="flex signup-page">
      {/* Left Side - Image Section */}
      <div className="w-1/2 relative">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/Black & White Imigongo Rwanda Painting_ African Handcraft Wall Decor_ Traditional African Art Work_ Unique African Pattern.png")'
          }}
        />
        {/* Overlay with Blurred Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-black/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-10 w-48 h-48 bg-black/15 rounded-full blur-xl"></div>
        </div>

        {/* Blurred Brand Text in Background */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl font-bold text-white/20 blur-sm select-none">Iby&apos;Iwacu</h1>
        </div>

        {/* Overlay Text */}
        <div className="absolute top-40 left-20 right-20">
          <h2 className="text-3xl font-bold text-[#AD5618] mb-4">Join Our Artisan Community</h2>
          <p className="text-white text-lg leading-relaxed">
            Connect with fellow art lovers and discover the stories behind each handcrafted piece.
            Be part of preserving and celebrating Rwandan cultural heritage.
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/Logoibyiwacu.png"
                alt="Iby&apos;Iwacu Logo"
                width={80}
                height={80}
                className="rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Iby&apos;Iwacu</h1>
            <p className="text-gray-600 text-lg">Create your account</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>



              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                    className={`w-full pr-12 px-4 py-3 bg-white border ${passwordValid ? 'border-gray-300' : 'border-red-300'} rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#AD5618] focus:border-transparent transition-all duration-300`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7 0-1.086.41-2.165 1.175-3.225M6.223 6.223C7.98 5.122 9.96 4.5 12 4.5c5 0 9 4 9 7 0 1.21-.426 2.394-1.2 3.483M3 3l18 18M9.88 9.88A3 3 0 0014.12 14.12" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7zm9.542-3a3 3 0 110 6 3 3 0 010-6z" /></svg>
                    )}
                  </button>
                </div>
                {!passwordValid && (
                  <p className="mt-1 text-xs text-red-600">Use at least 6 characters.</p>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#AD5618] border-gray-300 rounded focus:ring-[#AD5618] focus:ring-2 mt-1"
                  required
                />
                <label className="text-sm text-gray-700 leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-[#AD5618] hover:text-[#91530A] underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#AD5618] hover:text-[#91530A] underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Main Signup Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full px-4 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform shadow-lg ${isFormValid ? 'bg-gradient-to-r from-[#AD5618] to-[#91530A] hover:from-[#91530A] hover:to-[#7A4A09] hover:scale-105' : 'bg-gray-300 cursor-not-allowed'}`}
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* Separator */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm font-medium">or continue with</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Google Signup Button */}
              <button
                type="button"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>

              {/* Login Link */}
              <div className="text-center pt-4">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-[#AD5618] hover:text-[#91530A] font-semibold transition-colors">
                    Sign in here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



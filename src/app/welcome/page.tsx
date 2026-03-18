"use client";

import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { CheckCircle, ArrowRight, Sparkles, User, CreditCard, ShoppingBag } from "lucide-react";

export default function WelcomePage() {
  const { user } = useAuth();
  const name = user?.fullName || user?.email?.split("@")[0] || "Friend";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-16">
      <div className="container">
        {/* Hero */}
        <div className="bg-white rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#AD5618] text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" /> Welcome to Iby'Iwacu
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Great to have you, <span className="text-[#AD5618]">{name}</span>!
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your account is ready. Choose a quick start below or explore the platform—crafted to celebrate Rwandan art and craftsmanship.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white font-semibold shadow-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-all"
                >
                  <span className="inline-flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Go to Dashboard</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors font-semibold text-gray-900"
                >
                  <span className="inline-flex items-center gap-2"><ShoppingBag className="w-5 h-5 text-[#AD5618]" /> Explore Products</span>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </Link>
              </div>
            </div>

            {/* Right side features */}
            <div className="bg-gradient-to-br from-[#AD5618] to-[#91530A] text-white p-10 lg:p-14">
              <h2 className="text-2xl font-bold mb-6">Next steps</h2>
              <div className="space-y-4">
                <Link href="/profile/settings" className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Update your profile</div>
                    <div className="text-white/80 text-sm">Add your name and preferences</div>
                  </div>
                </Link>
                <Link href="/payment-methods" className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Add a payment method</div>
                    <div className="text-white/80 text-sm">Save a card for faster checkout</div>
                  </div>
                </Link>
                <Link href="/meet-artisan" className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">Meet the artisans</div>
                    <div className="text-white/80 text-sm">Discover stories behind each piece</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



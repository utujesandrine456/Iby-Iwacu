"use client";

import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  User,
  CreditCard,
  ShoppingBag,
  Settings,
  MessageSquare,
  ShieldCheck,
  Star
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function WelcomePage() {
  const { user } = useAuth();
  const name = user?.fullName || user?.email?.split("@")[0] || "Friend";

  const nextSteps = [
    {
      title: "Explore the Collection",
      desc: "Discover unique Rwandan artifacts and contemporary crafts.",
      icon: <ShoppingBag className="w-5 h-5" />,
      href: "/products",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Complete Your Profile",
      desc: "Tell us more about your interests to personalize your experience.",
      icon: <User className="w-5 h-5" />,
      href: "/profile/settings",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Meet the Artisans",
      desc: "Learn about the masters behind the beautiful creations.",
      icon: <Star className="w-5 h-5" />,
      href: "/meet-artisan",
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Payment Security",
      desc: "Set up your secure payment methods for faster checkout.",
      icon: <ShieldCheck className="w-5 h-5" />,
      href: "/payment-methods",
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#AD5618]/20 overflow-hidden relative">

      {/* ── Background Branding ─────────────────── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern-welcome" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L25 0 L50 50 L75 100 L100 50 M0 0 L50 100 L100 0" fill="none" stroke="black" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern-welcome)" />
        </svg>
      </div>

      <div className="container relative z-10 pt-24 pb-16 min-h-screen flex flex-col justify-center">

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-6xl mx-auto w-full"
        >
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[0.9]"
            >
              Hello, <span className="text-[#AD5618] italic">{name}</span> !
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-md md:text-xl max-w-2xl mx-auto font-normal"
            >
              Welcome to the Iby&apos;Iwacu community. Your journey into Rwandan craftsmanship starts here. How would you like to begin?
            </motion.p>
          </div>

          {/* Main Action Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Primary Dashboard Card */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-1 bg-[#121212] rounded-[40px] p-10 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:w-40 group-hover:h-40" />

              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight leading-none">Your portal <br /> is ready</h3>
                <p className="text-white/60 font-normal">Access your personal dashboard to track orders and manage your artisan favorites.</p>
              </div>

              <Link
                href="/dashboard"
                className="mt-12 inline-flex items-center justify-between w-full p-4 bg-white text-black rounded-lg font-semibold cursor-pointer text-md hover:bg-[#AD5618] hover:text-white transition-all shadow-xl shadow-black/20"
              >
                Go to Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Next Steps Checklist Grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {nextSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                >
                  <Link
                    href={step.href}
                    className="group h-full flex flex-col justify-between p-8 bg-white border border-black/5 rounded-[32px] hover:border-[#AD5618]/20 hover:shadow-xl transition-all relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 tracking-tight">{step.title}</h4>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-md font-medium text-gray-400 group-hover:text-[#AD5618] transition-colors">
                      Start Now <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#AD5618]/5 rounded-full blur-[120px] -mr-[10vw] -mt-[10vw] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-[#AD5618]/5 rounded-full blur-[100px] -ml-[5vw] -mb-[5vw] pointer-events-none" />
    </div>
  );
}

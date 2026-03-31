"use client";

import { usePathname } from "next/navigation";
import DashboardSidebar from "./DashboardSidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, Command } from "lucide-react";
import { useAuth } from "./AuthProvider";

export default function DashboardLayoutWrapper({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-[#FAFAFA]">
            <DashboardSidebar />

            <div className="flex-1 ml-72 flex flex-col relative min-h-screen">
                <header className="h-20 border-b border-black/5 flex items-center justify-between px-12 sticky top-0 z-40 backdrop-blur-xl bg-white/80">

                    <div className="flex items-center gap-8 flex-1">
                        <div className="relative group max-w-md w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#AD5618] transition-colors">
                                <Search className="w-4 h-4" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search dashboard..."
                                className="w-full bg-gray-50 border border-black/5 rounded-md py-2.5 pl-12 pr-16 text-sm font-semibold focus:outline-none focus:ring-4 focus:ring-[#AD5618]/5 focus:border-[#AD5618]/20 transition-all placeholder:text-gray-400 placeholder:font-normal"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 bg-white border border-black/5 rounded-md">
                                <Command className="w-3 h-3 text-gray-400" />
                                <span className="text-[10px] font-bold text-gray-400">K</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="w-10 h-10 rounded-md bg-gray-50 border cursor-pointer border-black/5 flex items-center justify-center text-gray-400 hover:text-[#AD5618] hover:bg-[#AD5618]/5 hover:border-[#AD5618]/10 transition-all relative">
                            <Bell className="w-5 h-5" />
                            <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#AD5618] rounded-full border-2 border-white shadow-sm" />
                        </button>

                        <div className="h-8 w-px bg-black/5" />

                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <div className="text-md font-bold text-gray-900">{user?.fullName || "Admin"}</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <main className="flex-1 p-12 overflow-y-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* Subtle Brand Background Pattern */}
                <div className="fixed bottom-0 right-0 opacity-[0.02] pointer-events-none -z-10 w-[60%] h-[60%] overflow-hidden rotate-12">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="pattern-dashboard-bg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path d="M0 50 L25 0 L50 50 L75 100 L100 50 M0 0 L50 100 L100 0" fill="none" stroke="black" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#pattern-dashboard-bg)" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

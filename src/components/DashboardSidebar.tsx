"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    ShoppingBag,
    Users,
    CreditCard,
    Settings,
    ChevronRight,
    Package2,
    LogOut
} from "lucide-react";
import Image from "next/image";
import { useAuth } from "./AuthProvider";


const menuItems = [
    { name: "Overview", icon: <LayoutDashboard className="w-5 h-5" />, href: "/dashboard" },
    { name: "Orders", icon: <ShoppingBag className="w-5 h-5" />, href: "/order" },
    { name: "Products", icon: <Package2 className="w-5 h-5" />, href: "/products" },
    { name: "Payment", icon: <CreditCard className="w-5 h-5" />, href: "/payment-methods" },
    { name: "Customers", icon: <Users className="w-5 h-5" />, href: "/profile" },
    { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/profile/settings" },
];

export default function DashboardSidebar() {
    const pathname = usePathname();
    const { logout, user } = useAuth();

    return (
        <aside className="w-72 h-screen fixed left-0 top-0 bg-[#1A1614] flex flex-col z-50 border-r border-white/5 shadow-2xl">
            {/* Brand */}
            <div className="p-8 pb-10">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-[#AD5618] rounded-md flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-[#AD5618]/20">
                        <Image src="/Logoibyiwacu.png" alt="Logo" width={24} height={24} />
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">
                        Iby&apos;<span className="text-[#AD5618]">Iwacu</span>
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-1.5">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group flex items-center justify-between px-4 py-3 rounded-md transition-all relative overflow-hidden ${isActive
                                ? "bg-[#AD5618] text-white shadow-lg shadow-[#AD5618]/10"
                                : "text-white/50 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <div className="flex items-center gap-4 relative z-10">
                                <span className={`${isActive ? "text-white" : "group-hover:text-[#AD5618]"} transition-colors`}>
                                    {item.icon}
                                </span>
                                <span className="font-normal text-lg tracking-tight">{item.name}</span>
                            </div>

                            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                        </Link>
                    );
                })}
            </nav>

            {/* User Section */}
            <div className="p-6 mt-auto">
                <div className="p-4 rounded-md bg-white/5 border border-white/5 space-y-4">
                    <button
                        onClick={logout}
                        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-white/5 hover:bg-red-500 cursor-pointer hover:text-white transition-all text-sm font-semibold border border-white/10"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                        Logout
                    </button>
                </div>

                {/* Decorative Imigongo Pattern at Bottom */}
                <div className="mt-6 h-1 w-full flex overflow-hidden opacity-10">
                    {[...Array(10)].map((_, i) => (
                        <svg key={i} width="40" height="10" viewBox="0 0 40 10" className="flex-shrink-0">
                            <path d="M0 10 L20 0 L40 10" fill="none" stroke="#AD5618" strokeWidth="2" />
                        </svg>
                    ))}
                </div>
            </div>
        </aside>
    );
}

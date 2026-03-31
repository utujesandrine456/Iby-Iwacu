"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  PlusCircle,
  Package2,
  Calendar,
  Filter,
  Download
} from "lucide-react";
import { motion } from "framer-motion";

type Metric = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
  color: string;
};

type Order = {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: "Processing" | "Shipped" | "Delivered" | "Refunded";
};

const demoSales = [12, 15, 13, 18, 22, 19, 24, 28, 26, 32, 30, 38];

export default function DashboardPage() {
  const metrics: Metric[] = [
    {
      label: "Total Revenue",
      value: "$24,380",
      change: "+12.4%",
      positive: true,
      icon: <DollarSign className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      label: "Active Orders",
      value: "1,248",
      change: "+4.1%",
      positive: true,
      icon: <ShoppingBag className="w-5 h-5" />,
      color: "bg-orange-50 text-[#AD5618]",
    },
    {
      label: "New Customers",
      value: "7,532",
      change: "+2.3%",
      positive: true,
      icon: <Users className="w-5 h-5" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      label: "Churn Rate",
      value: "3.9%",
      change: "-0.4%",
      positive: false,
      icon: <TrendingUp className="w-5 h-5" />,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  const recentOrders: Order[] = [
    { id: "ORD-1201", customer: "Alice N.", date: "Jan 22, 2025", total: 120.5, status: "Processing" },
    { id: "ORD-1198", customer: "Jean K.", date: "Jan 22, 2025", total: 86.0, status: "Shipped" },
    { id: "ORD-1194", customer: "Samuel D.", date: "Jan 21, 2025", total: 242.3, status: "Delivered" },
    { id: "ORD-1188", customer: "Grace M.", date: "Jan 20, 2025", total: 51.0, status: "Delivered" },
    { id: "ORD-1182", customer: "Claudine U.", date: "Jan 19, 2025", total: 310.0, status: "Refunded" },
  ];

  const salesPath = useMemo(() => buildSparklinePath(demoSales, 300, 100, 10), []);

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-black/5">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Overview</h1>
          <p className="text-gray-500 font-medium">Welcome back, here&apos;s what&apos;s happening with your store today.</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-black/5 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
            <Calendar className="w-4 h-4 text-[#AD5618]" />
            Last 30 Days
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#AD5618] text-white text-sm font-semibold shadow-lg shadow-[#AD5618]/20 hover:bg-[#91530A] transition-all">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, idx) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[16px] p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`p-3 rounded-md ${m.color} transition-transform group-hover:scale-110`}>
                {m.icon}
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${m.positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                <ArrowUpRight className={`w-3 h-3 ${m.positive ? "" : "rotate-180"}`} />
                {m.change}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-gray-900 tracking-tight">{m.value}</div>
              <div className="text-md font-medium text-gray-400">{m.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[24px] p-10 border border-black/5 shadow-sm relative overflow-hidden group">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">Sales analytics</h3>
              <p className="text-gray-400 text-sm font-medium">Revenue generated over the last 12 weeks</p>
            </div>
            <div className="flex gap-2">
              {["Revenue", "Orders"].map((t) => (
                <button key={t} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${t === "Revenue" ? "bg-[#AD5618] text-white" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64 w-full relative">
            <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none" className="overflow-visible">
              <defs>
                <linearGradient id="area-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#AD5618" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#AD5618" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d={salesPath}
                fill="url(#area-gradient)"
              />
              <motion.polyline
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                points={polylinePoints(demoSales, 300, 100, 10)}
                fill="none"
                stroke="#AD5618"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {demoSales.map((v, i) => {
                const stepX = (300 - 20) / (demoSales.length - 1);
                const max = Math.max(...demoSales);
                const min = Math.min(...demoSales);
                const y = 100 - ((v - min) / (max - min)) * 100;
                return (
                  <motion.circle
                    key={i}
                    cx={10 + i * stepX}
                    cy={y}
                    r="3"
                    fill="white"
                    stroke="#AD5618"
                    strokeWidth="1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.05 }}
                    className="cursor-pointer hover:r-6 transition-all"
                  />
                );
              })}
            </svg>
          </div>

          <div className="mt-8 flex justify-between px-2">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => (
              <span key={m} className="text-md font-medium text-gray-300">{m}</span>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-[16px] p-10 border border-black/5 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-8">Performance</h3>
          <div className="space-y-8">
            {[
              { name: "Imigongo Art", value: "78%", color: "bg-[#AD5618]", desc: "Top performing category" },
              { name: "Woven Baskets", value: "64%", color: "bg-[#eb8034]", desc: "High customer interest" },
              { name: "Artifacts", value: "42%", color: "bg-gray-900", desc: "Steady growth" }
            ].map(item => (
              <div key={item.name} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-sm font-bold text-gray-900 tracking-tight">{item.name}</div>
                    <div className="text-[14px] text-gray-400 font-medium">{item.desc}</div>
                  </div>
                  <div className="text-lg font-bold text-[#AD5618]">{item.value}</div>
                </div>
                <div className="h-2 bg-gray-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.value }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-[16px] p-10 border border-black/5 shadow-sm">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl font-semibold text-gray-900">Recent orders</h3>
          <Link href="/order" className="inline-flex items-center gap-2 text-md font-medium text-[#AD5618] hover:text-[#91530A] transition-colors">
            View All Orders
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-black/5">
                <th className="pb-6 text-[10px] font-bold text-gray-400 tracking-[0.2em] px-4">Order id</th>
                <th className="pb-6 text-[10px] font-bold text-gray-400 tracking-[0.2em] px-4">Customer</th>
                <th className="pb-6 text-[10px] font-bold text-gray-400 tracking-[0.2em] px-4">Date</th>
                <th className="pb-6 text-[10px] font-bold text-gray-400 tracking-[0.2em] px-4 text-right">Amount</th>
                <th className="pb-6 text-[10px] font-bold text-gray-400 tracking-[0.2em] px-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5">
              {recentOrders.map((o) => (
                <tr key={o.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 px-4 font-bold text-gray-900 text-sm tracking-tight">{o.id}</td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-600 tracking-tight">{o.customer}</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 text-sm font-medium text-gray-400">{o.date}</td>
                  <td className="py-6 px-4 text-right font-bold text-gray-900 text-sm">${o.total.toFixed(2)}</td>
                  <td className="py-6 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-bold tracking-widest ${o.status === "Delivered" ? "bg-green-50 text-green-600" :
                      o.status === "Shipped" ? "bg-blue-50 text-blue-600" :
                        o.status === "Processing" ? "bg-amber-50 text-amber-600" :
                          "bg-red-50 text-red-600"
                      }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${o.status === "Delivered" ? "bg-green-600" :
                        o.status === "Shipped" ? "bg-blue-600" :
                          o.status === "Processing" ? "bg-amber-600" :
                            "bg-red-600"
                        }`} />
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function buildSparklinePath(values: number[], width: number, height: number, padding: number): string {
  if (values.length === 0) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const stepX = (width - padding * 2) / (values.length - 1);
  const scaleY = (v: number) => {
    if (max === min) return height / 2;
    return height - ((v - min) / (max - min)) * height;
  };
  const points = values.map((v, i) => [padding + i * stepX, scaleY(v)] as const);
  const path = ["M", points[0][0], points[0][1], "L", ...points.slice(1).flat()];
  // Close area
  path.push("L", width - padding, height, "L", padding, height, "Z");
  return path.join(" ");
}

function polylinePoints(values: number[], width: number, height: number, padding: number): string {
  if (values.length === 0) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const stepX = (width - padding * 2) / (values.length - 1);
  const scaleY = (v: number) => {
    if (max === min) return height / 2;
    return height - ((v - min) / (max - min)) * height;
  };
  return values
    .map((v, i) => `${padding + i * stepX},${scaleY(v)}`)
    .join(" ");
}

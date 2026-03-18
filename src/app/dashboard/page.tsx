"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight, Users, ShoppingBag, DollarSign, TrendingUp, PlusCircle, Settings, CreditCard, Package2 } from "lucide-react";

type Metric = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
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
      label: "Revenue",
      value: "$24,380",
      change: "+12.4%",
      positive: true,
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      label: "Orders",
      value: "1,248",
      change: "+4.1%",
      positive: true,
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      label: "Customers",
      value: "7,532",
      change: "+2.3%",
      positive: true,
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Conv. Rate",
      value: "3.9%",
      change: "-0.4%",
      positive: false,
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const recentOrders: Order[] = [
    { id: "ORD-1201", customer: "Alice N.", date: "Jan 22, 2025", total: 120.5, status: "Processing" },
    { id: "ORD-1198", customer: "Jean K.", date: "Jan 22, 2025", total: 86.0, status: "Shipped" },
    { id: "ORD-1194", customer: "Samuel D.", date: "Jan 21, 2025", total: 242.3, status: "Delivered" },
    { id: "ORD-1188", customer: "Grace M.", date: "Jan 20, 2025", total: 51.0, status: "Delivered" },
    { id: "ORD-1182", customer: "Claudine U.", date: "Jan 19, 2025", total: 310.0, status: "Refunded" },
  ];

  const salesPath = useMemo(() => buildSparklinePath(demoSales, 280, 80, 10), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-8">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Overview of your store at a glance</p>
          </div>
          <div className="flex gap-2">
            <Link href="/products" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <Package2 className="w-4 h-4" /> Manage Products
            </Link>
            <Link href="/checkout/personal" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#AD5618] to-[#91530A] text-white shadow-lg hover:from-[#91530A] hover:to-[#7A4A09] transition-colors">
              <PlusCircle className="w-4 h-4" /> Create Order
            </Link>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white rounded-2xl shadow-xl border border-white/60 p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-500">{m.label}</div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#AD5618] to-[#91530A] text-white flex items-center justify-center">
                  {m.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">{m.value}</div>
              <div className={`mt-1 inline-flex items-center gap-1 text-xs ${m.positive ? "text-green-600" : "text-red-600"}`}>
                <ArrowUpRight className={`w-4 h-4 ${m.positive ? "rotate-0" : "rotate-180"}`} />
                {m.change} vs last week
              </div>
            </div>
          ))}
        </div>

        {/* Middle: Sales + Top products */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <section className="bg-white rounded-2xl shadow-xl border border-white/60 p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
              <div className="text-sm text-gray-500">Last 12 weeks</div>
            </div>
            <div className="relative">
              <svg width="100%" height="100" viewBox="0 0 300 100" preserveAspectRatio="none">
                <path d={salesPath} fill="url(#grad)" opacity="0.18" />
                <defs>
                  <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#AD5618" />
                    <stop offset="100%" stopColor="#91530A" />
                  </linearGradient>
                </defs>
                <polyline
                  points={polylinePoints(demoSales, 300, 80, 10)}
                  fill="none"
                  stroke="#AD5618"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl border border-white/60 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h2>
            <div className="space-y-4">
              {[
                { name: "Imigongo Panel", percent: 78 },
                { name: "Raffia Basket", percent: 64 },
                { name: "Coffee Beans", percent: 52 },
              ].map((p) => (
                <div key={p.name}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-700">{p.name}</span>
                    <span className="font-medium text-gray-900">{p.percent}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-[#AD5618] to-[#91530A]" style={{ width: `${p.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom: Recent orders + Quick actions */}
        <div className="grid lg:grid-cols-3 gap-6">
          <section className="bg-white rounded-2xl shadow-xl border border-white/60 p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <Link href="/order" className="text-[#AD5618] hover:text-[#91530A] text-sm font-medium">View all</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="py-3">Order ID</th>
                    <th className="py-3">Customer</th>
                    <th className="py-3">Date</th>
                    <th className="py-3">Total</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((o) => (
                    <tr key={o.id} className="border-t border-gray-100">
                      <td className="py-3 font-medium text-gray-900">{o.id}</td>
                      <td className="py-3">{o.customer}</td>
                      <td className="py-3 text-gray-600">{o.date}</td>
                      <td className="py-3 font-medium">${o.total.toFixed(2)}</td>
                      <td className="py-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${o.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : o.status === "Shipped"
                              ? "bg-blue-100 text-blue-700"
                              : o.status === "Processing"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-700"
                          }`}>
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl border border-white/60 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid gap-3">
              <Link href="/products" className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <span className="inline-flex items-center gap-2 text-gray-800"><Package2 className="w-4 h-4 text-[#AD5618]" /> Add Product</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/order" className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <span className="inline-flex items-center gap-2 text-gray-800"><ShoppingBag className="w-4 h-4 text-[#AD5618]" /> New Order</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/payment-methods" className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <span className="inline-flex items-center gap-2 text-gray-800"><CreditCard className="w-4 h-4 text-[#AD5618]" /> Payment Methods</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>
              <Link href="/profile/settings" className="inline-flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <span className="inline-flex items-center gap-2 text-gray-800"><Settings className="w-4 h-4 text-[#AD5618]" /> Settings</span>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </Link>
            </div>
          </section>
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



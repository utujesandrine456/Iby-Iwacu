"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AuthProvider from "@/components/AuthProvider";
import DashboardLayoutWrapper from "@/components/DashboardLayoutWrapper";

export default function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isDashboardRoute =
    pathname === "/dashboard" ||
    pathname === "/order" ||
    pathname === "/payment-methods" ||
    pathname.startsWith("/profile");

  if (isAuthPage) {
    return (
      <AuthProvider>
        <main>{children}</main>
      </AuthProvider>
    );
  }

  if (isDashboardRoute) {
    return (
      <AuthProvider>
        <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <SiteHeader />
      <main className="pt-14">{children}</main>
      <SiteFooter />
    </AuthProvider>
  );
}

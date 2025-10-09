"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import AuthProvider from "@/app/components/AuthProvider";

export default function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (isAuthPage) {
    return (
      <AuthProvider>
        <main>{children}</main>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </AuthProvider>
  );
}

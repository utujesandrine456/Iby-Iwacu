import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Iby'Iwacu",
  description: "Login to your Iby'Iwacu account",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {children}
    </div>
  );
}

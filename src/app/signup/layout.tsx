import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Iby'Iwacu",
  description: "Create your Iby'Iwacu account",
};

export default function SignupLayout({
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

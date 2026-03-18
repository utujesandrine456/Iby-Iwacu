import type { Metadata } from "next";
import "./globals.css";
import LayoutChrome from "@/components/LayoutChrome";

export const metadata: Metadata = {
  title: "Iby'Iwacu – Frames Gallery",
  description: "Beautiful interactive gallery of Frames",
  icons: {
    icon: "/Logoibyiwacu.png",
    shortcut: "/Logoibyiwacu.png",
    apple: "/Logoibyiwacu.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}

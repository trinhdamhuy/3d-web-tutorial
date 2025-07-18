import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { AutoBreadcrumb } from "./_components/auto-breadcrumb";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3D Web Tutorial - Learn Three.js with React Three Fiber",
  description:
    "Master 3D web development with React Three Fiber and Drei through hands-on tutorials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <Header />

        {/* Auto Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4">
          <AutoBreadcrumb />
        </div>

        {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-br from-background to-muted">
          {children}
        </main>
      </body>
    </html>
  );
}

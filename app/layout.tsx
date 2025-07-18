import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { BookOpen, Code, Box } from "lucide-react";
import Link from "next/link";

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
        {/* Navigation Header */}
        <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
              >
                <Box className="w-8 h-8" />
                <span className="text-xl font-bold">3D Web Tutorial</span>
              </Link>

              {/* Navigation Menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-white hover:text-blue-400 hover:bg-slate-800">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Tutorials
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <div className="space-y-3">
                          <h3 className="font-semibold text-slate-900">
                            Basic Level
                          </h3>
                          <div className="space-y-2">
                            <Link
                              href="/basic"
                              className="block p-2 rounded-md hover:bg-slate-100 transition-colors"
                            >
                              <div className="font-medium text-slate-900">
                                Getting Started
                              </div>
                              <div className="text-sm text-slate-600">
                                Fundamental 3D concepts
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-semibold text-slate-900">
                            Coming Soon
                          </h3>
                          <div className="space-y-2">
                            <div className="block p-2 rounded-md opacity-50">
                              <div className="font-medium text-slate-900">
                                Medium Level
                              </div>
                              <div className="text-sm text-slate-600">
                                Advanced techniques
                              </div>
                            </div>
                            <div className="block p-2 rounded-md opacity-50">
                              <div className="font-medium text-slate-900">
                                Advanced Level
                              </div>
                              <div className="text-sm text-slate-600">
                                Expert-level projects
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/basic" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:text-blue-400 hover:bg-slate-800 focus:bg-slate-800 focus:text-blue-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <Code className="w-4 h-4 mr-2" />
                        Start Learning
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
          {children}
        </main>
      </body>
    </html>
  );
}

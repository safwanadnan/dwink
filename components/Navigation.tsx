'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logo } from "../app/assets/products";

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClass = (path: string) => {
    const baseClass = "nav-link font-bold uppercase transition-colors";
    return isActive(path) 
      ? `${baseClass} text-red-600` 
      : `${baseClass} text-gray-900 hover:text-red-600`;
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className={getLinkClass("/")}>HOME</Link>
              <Link href="/products" className={getLinkClass("/products")}>PRODUCTS</Link>
            </nav>

            {/* Center Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Dwink Logo"
                width={180}
                height={90}
                className="h-14 md:h-14 w-auto"
                priority
              />
            </Link>

            {/* Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className={getLinkClass("/about")}>ABOUT US</Link>
              <Link href="/contact" className={getLinkClass("/contact")}>CONTACT US</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-red-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link 
              href="/" 
              className={`block py-2 font-bold uppercase ${isActive("/") ? "text-red-600" : "text-gray-900 hover:text-red-600"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className={`block py-2 font-bold uppercase ${isActive("/about") ? "text-red-600" : "text-gray-900 hover:text-red-600"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link 
              href="/products" 
              className={`block py-2 font-bold uppercase ${isActive("/products") ? "text-red-600" : "text-gray-900 hover:text-red-600"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link 
              href="/contact" 
              className={`block py-2 font-bold uppercase ${isActive("/contact") ? "text-red-600" : "text-gray-900 hover:text-red-600"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
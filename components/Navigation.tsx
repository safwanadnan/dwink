'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logo, freshmatelogo } from "../app/assets/products";

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
      ? `${baseClass}` 
      : `${baseClass} text-gray-900 hover:text-green-800`;
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-1">
        <div className="container-wide">
          <div className="flex justify-center">
            <Link href="https://shop.freshmate.pk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity mr-12">
              <Image
                src={freshmatelogo}
                alt="Freshmate Logo"
                width={200}
                height={95}
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white shadow-sm">
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className={getLinkClass("/")} style={isActive("/") ? {color: '#023E0B'} : {}}>HOME</Link>
              <Link href="/products" className={getLinkClass("/products")} style={isActive("/products") ? {color: '#023E0B'} : {}}>PRODUCTS</Link>
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
              <Link href="/about" className={getLinkClass("/about")} style={isActive("/about") ? {color: '#023E0B'} : {}}>ABOUT US</Link>
              <Link href="/contact" className={getLinkClass("/contact")} style={isActive("/contact") ? {color: '#023E0B'} : {}}>CONTACT US</Link>
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
              className={`block py-2 font-bold uppercase ${isActive("/") ? "" : "text-gray-900 hover:text-green-800"}`}
              onClick={() => setMobileMenuOpen(false)}
              style={isActive("/") ? {color: '#023E0B'} : {}}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className={`block py-2 font-bold uppercase ${isActive("/about") ? "" : "text-gray-900 hover:text-green-800"}`}
              onClick={() => setMobileMenuOpen(false)}
              style={isActive("/about") ? {color: '#023E0B'} : {}}
            >
              ABOUT US
            </Link>
            <Link 
              href="/products" 
              className={`block py-2 font-bold uppercase ${isActive("/products") ? "" : "text-gray-900 hover:text-green-800"}`}
              onClick={() => setMobileMenuOpen(false)}
              style={isActive("/products") ? {color: '#023E0B'} : {}}
            >
              PRODUCTS
            </Link>
            <Link 
              href="/contact" 
              className={`block py-2 font-bold uppercase ${isActive("/contact") ? "" : "text-gray-900 hover:text-green-800"}`}
              onClick={() => setMobileMenuOpen(false)}
              style={isActive("/contact") ? {color: '#023E0B'} : {}}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Gift, Settings, Palette, Package, Award, Truck } from "lucide-react";
import Navigation from "../components/Navigation";
import ContactPopup from "../components/ContactPopup";
import { products, certificates, logo, freshmatelogo } from "./assets/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Home" />



      {/* Hero Section - Large Banner Image */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center" style={{background: 'linear-gradient(135deg, #86efac 0%, #67e8f9 50%, #7dd3fc 100%)'}}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="text-center text-white z-10 max-w-6xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Image
              src={logo}
              alt="Dwink Logo"
              width={400}
              height={200}
              className="h-32 md:h-48 lg:h-64 w-auto"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Products
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-12" style={{color: '#023E0B'}}>
            CATEGORIES
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              { name: "BASIL SEED", image: products.find(p => p.category === 'Basil Seed')?.image, gradient: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50", filter: "Basil Seed" },
              { name: "NATA DE COCO", image: products.find(p => p.category === 'Nata de Coco')?.image, gradient: "bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50", filter: "Nata de Coco" },
              { name: "FALOODA", image: products.find(p => p.category === 'Falooda')?.image, gradient: "bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50", filter: "Falooda" },
              { name: "ALOE VERA", image: products.find(p => p.category === 'Aloe Vera')?.image, gradient: "bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50", filter: "Aloe Vera" },
              { name: "CHIA SEED", image: products.find(p => p.category === 'Chia Seed')?.image, gradient: "bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50", filter: "Chia Seed" },
            ].map((category) => (
              <Link key={category.name} href={`/products?filter=${encodeURIComponent(category.filter)}`} className="flex flex-col items-center group flex-shrink-0">
                <div className={`w-24 h-24 md:w-40 md:h-40 lg:w-64 lg:h-64 ${category.gradient} rounded-full flex items-center justify-center mb-3 md:mb-6 group-hover:scale-105 transition-transform overflow-hidden shadow-lg border-4 border-white`}>
                  {category.image && (
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      width={200} 
                      height={200} 
                      className="w-4/5 h-4/5 object-contain"
                    />
                  )}
                </div>
                <span className="text-sm md:text-base lg:text-xl font-bold text-gray-700 text-center">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>







      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2" style={{color: '#023E0B'}}>WHY CHOOSE US</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { title: "FREE SAMPLE", icon: Gift },
              { title: "OEM", icon: Settings },
              { title: "FREE LABEL DESIGN", icon: Palette },
              { title: "SMALL MOQ", icon: Package },
              { title: "STABLE QUALITY", icon: Award },
              { title: "FAST DELIVERY", icon: Truck },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg border-4 border-slate-100 overflow-hidden group hover:scale-105 transition-transform">
                  <feature.icon
                    size={48}
                    className="text-teal-600 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-700 uppercase">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8 bg-white border-none">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#023E0B'}}>CERTIFICATIONS</h2>
          </div>

          {/* Certification Logos */}
          <div className="flex justify-center gap-8 md:gap-12">
            {[
              { name: "ISO 22000", image: certificates.iso },
              { name: "INTERNATIONAL HALAL", image: certificates.halal }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 mb-2 flex items-center justify-center mx-auto">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-800">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-slate-100 text-gray-800 py-8">
        <div className="container-wide text-center">
          <div className="flex flex-col items-center mb-4">
            <Image
              src={logo}
              alt="Dwink Logo"
              width={150}
              height={75}
              className="h-16 w-auto mb-2"
            />
          </div>
          
          <div className="text-sm mb-4">
            <div className="flex justify-center space-x-6 mb-2">
              <span>Email: info@dwink.pk</span>
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <span>Parent Company:</span>
              <Link href="https://shop.freshmate.pk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" style={{color: '#023E0B'}}>
                freshmate.co
              </Link>
            </div>
            <div className="flex justify-center mb-2">
              <Link href="https://shop.freshmate.pk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src={freshmatelogo}
                  alt="Freshmate Logo"
                  width={170}
                  height={85}
                  className="h-16 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ContactPopup from "../components/ContactPopup";
import { products, certificates, logo } from "./assets/products";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  // Scroll detection for popup
  useEffect(() => {
    const handleScroll = () => {
      if (hasShownPopup) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 30) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownPopup]);
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Home" />

      {/* Hero Section - Large Banner Image */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center" style={{background: 'linear-gradient(135deg, #C2eaba 0%, white 100%)'}}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="text-center text-white z-10 max-w-6xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">Dwink</h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">Fresh Sip</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products" className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Products
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-green-600 text-center mb-6 md:mb-12">
            CATEGORIES
          </h2>

          <div className="flex justify-center gap-6 md:gap-12 lg:gap-20">
            {[
              { name: "BASIL SEED", image: products.find(p => p.category === 'Basil Seed')?.image, gradient: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50", filter: "Basil Seed" },
              { name: "NATA DE COCO", image: products.find(p => p.category === 'Nata de Coco')?.image, gradient: "bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50", filter: "Nata de Coco" },
              { name: "FALOODA", image: products.find(p => p.category === 'Falooda')?.image, gradient: "bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50", filter: "Falooda" },
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





      {/* <div className="section-divider"></div> */}

      {/* Good Taste - Good Health Section */}
      <section className="relative overflow-hidden" style={{background: 'linear-gradient(135deg, #C2eaba 0%, rgba(194, 234, 186, 0.8) 50%, rgba(194, 234, 186, 0.6) 100%)'}}>
        {/* Wave Background */}
        <div className="absolute top-0 left-0 w-full">
          <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity="0.25" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="white" opacity="0.5" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-2 md:mb-4 section-heading">
            Dwink
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6 section-heading">Good Taste - Good Health</h3>

          {/* Floating Fruits */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-14 h-14 bg-green-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
            <div className="absolute bottom-10 right-10 w-10 h-10 bg-red-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-purple-400 rounded-full opacity-20 animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1500"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-100">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-700 mb-2">WHY CHOOSE US</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { title: "FREE SAMPLE", image: products[0]?.image },
              { title: "OEM and ODM", image: products[1]?.image },
              { title: "FREE LABEL DESIGN", image: products[2]?.image },
              { title: "SMALL MOQ", image: products[3]?.image },
              { title: "STABLE QUALITY", image: products[4]?.image },
              { title: "FAST DELIVERY", image: products[5]?.image },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg border-4 border-slate-100 overflow-hidden group hover:scale-105 transition-transform">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={120}
                    height={120}
                    className="w-4/5 h-4/5 object-cover rounded-full group-hover:scale-110 transition-transform"
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
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">CERTIFICATIONS</h2>
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
            <h3 className="text-xl font-bold">Dwink</h3>
          </div>
          
          <div className="text-sm mb-4">
            <div className="flex justify-center space-x-6 mb-2">
              <span>Email: info@dwink.pk</span>
            </div>
            <div className="flex justify-center space-x-6 mb-2">
              <span>Parent Company: Info@freshmate.pk</span>
            </div>
            <div className="flex justify-center">
              <span>PO Box: 13002</span>
            </div>
          </div>

          <div className="border-t border-slate-300 pt-4 text-xs">
            <p className="mb-2">Dwink 2004 - 2023. All Rights Reserved Development by Dwink Beverage Company</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-green-600">About us</a>
              <span>|</span>
              <a href="#" className="hover:text-green-600">Contact us</a>
              <span>|</span>
              <a href="#" className="hover:text-green-600">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-green-600">Terms of Service Us</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      <ContactPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </div>
  );
}
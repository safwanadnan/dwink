'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Gift, Settings, Palette, Package, Award, Truck } from "lucide-react";
import Navigation from "../components/Navigation";
import ContactPopup from "../components/ContactPopup";
import { products, certificates, logo, freshmatelogo, getProductsByCategory } from "./assets/products";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Create 3 random product slides with mixed products
  const createRandomSlides = () => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(shuffled.slice(i * 16, (i + 1) * 16));
    }
    return slides;
  };
  
  const [productSlides] = useState(createRandomSlides());
  const gradients = [
    "from-emerald-400 via-teal-500 to-cyan-600",
    "from-emerald-400 via-teal-500 to-cyan-600", 
    "from-emerald-400 via-teal-500 to-cyan-600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [productSlides.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Home" />

      {/* Product Slider */}
      <section className="relative h-[80vh] min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          {productSlides.map((slideProducts, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`h-full bg-gradient-to-br ${gradients[index]} relative overflow-hidden`}>
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 max-w-7xl mx-auto mb-16">
                    {slideProducts.map((product) => (
                      <div key={product.id} className="group">
                        <div className="aspect-square bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3">
                          <Image 
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/products" className="bg-white text-gray-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                      Explore All Products
                    </Link>
                    <Link href="/contact" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 backdrop-blur-sm">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {productSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + productSlides.length) % productSlides.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % productSlides.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
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

      {/* Certifications Section */}
      <section className="py-8 bg-white border-none">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#023E0B'}}>CERTIFICATIONS</h2>
          </div>

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
            <div className="flex justify-center items-center gap-2 mb-1">
              <span>A Parent Company; Freshmate Co.</span>
            </div>
            <div className="flex justify-center mb-2">
              <Link href="https://shop.freshmate.pk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src={freshmatelogo}
                  alt="Freshmate Logo"
                  width={190}
                  height={95}
                  className="h-18 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
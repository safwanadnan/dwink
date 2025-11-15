'use client';

import Image from "next/image";
import Navigation from "../../components/Navigation";
import { products, logo, certificates } from "../assets/products";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="About Us" />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center" style={{background: 'linear-gradient(135deg, #C2eaba 0%, #b8e5a8 50%, #C2eaba 100%)'}}>
        <div className="text-center text-gray-800 z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>About Dwink</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">A Legacy of Excellence</p>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
            Building on 50+ years of family business experience across multiple industries
          </p>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-40 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-18 h-18 bg-red-400 rounded-full opacity-20 animate-pulse delay-3000"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dwink is the beverage division of a family legacy that has shaped Pakistan&apos;s food industry for decades. Founded by the same visionary family behind Freshmate, Pakistan&apos;s first ready-to-eat meal brand, we carry forward over 50 years of business experience across textiles, pharmaceuticals, poultry, and fruit farming — industries that taught us precision, quality, and consistency.
                </p>
                <p>
                  Building on the trust and success of Freshmate, we ventured into the beverage sector five years ago, determined to bring the same innovation and commitment to quality into a new category. Thus, Dwink was born — a line of premium, refreshing, and innovative beverages designed for modern consumers who value both taste and health.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={products[0]?.image || logo}
                  alt="Dwink Heritage"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm">Years Legacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Dwink Today Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={products[1]?.image || logo}
                    alt="Dwink Products"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={products[2]?.image || logo}
                    alt="Dwink Quality"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={products[3]?.image || logo}
                    alt="Dwink Innovation"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src={products[4]?.image || logo}
                    alt="Dwink Range"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Dwink Today</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  From Basil Seed Juices to Nata de Coco blends, every Dwink bottle reflects our promise of uncompromising quality, hygienic production, and authentic flavor. Today, Dwink stands as one of Pakistan&apos;s leading beverage brands, continually expanding its range to serve a wider audience across local and international markets.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
                  <div className="text-gray-600">Years in Beverages</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">#1</div>
                  <div className="text-gray-600">Leading Brand</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium beverages crafted with authentic flavors and uncompromising quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Basil Seed Drinks", 
                image: products.find(p => p.category === 'Basil Seed')?.image,
                description: "Refreshing and nutritious basil seed beverages with natural flavors"
              },
              { 
                name: "Nata de Coco", 
                image: products.find(p => p.category === 'Nata de Coco')?.image,
                description: "Tropical coconut gel drinks with authentic taste and texture"
              },
              { 
                name: "Falooda", 
                image: products.find(p => p.category === 'Falooda')?.image,
                description: "Traditional South Asian dessert drinks with modern appeal"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-square overflow-hidden">
                  <Image 
                    src={category.image || logo}
                    alt={category.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quality Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International standards ensuring the highest quality and safety
            </p>
          </div>

          <div className="flex justify-center gap-12 md:gap-16">
            {[
              { name: "ISO 22000", image: certificates.iso },
              { name: "INTERNATIONAL HALAL", image: certificates.halal }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mb-4 flex items-center justify-center mx-auto bg-white rounded-2xl shadow-lg">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="text-sm md:text-base font-bold text-gray-800">{cert.name}</div>
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
    </div>
  );
}
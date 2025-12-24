'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "../../components/Navigation";
import { getProductsByCategory, logo, freshmatelogo } from "../../app/assets/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("Show All");
  const [bottleFilter, setBottleFilter] = useState("All Bottles");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Handle URL filter parameter
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const filters = [
    "Show All", "Basil Seed", "Nata de Coco", "Falooda", "Aloe Vera", "Chia Seed"
  ];

  const bottleFilters = ["All Bottles", "Glass", "PET"];

  // Filter products based on active filter and bottle type
  let filteredProducts = getProductsByCategory(activeFilter);
  if (bottleFilter !== "All Bottles") {
    filteredProducts = filteredProducts.filter(product => product.bottleType === bottleFilter);
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleBottleFilterChange = (filter: string) => {
    setBottleFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Products" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-wide">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600 transition-colors">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Products</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="Dwink Logo"
              width={300}
              height={150}
              className="h-24 md:h-32 lg:h-40 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-teal-600 text-center mb-6 md:mb-12">
            DWINK BEVERAGE PRODUCTS
          </h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded transition-all duration-300 text-sm font-medium ${
                  activeFilter === category 
                    ? 'bg-teal-500 text-white shadow-lg transform scale-105' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Bottle Type Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {bottleFilters.map((bottle) => (
              <button
                key={bottle}
                onClick={() => handleBottleFilterChange(bottle)}
                className={`px-4 py-2 rounded transition-all duration-300 text-sm font-medium ${
                  bottleFilter === bottle 
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                }`}
              >
                {bottle}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
              {activeFilter !== "Show All" && (
                <span className="ml-2 text-red-600 font-medium">in {activeFilter}</span>
              )}
            </p>
          </div>

          {/* Product Grid - Responsive horizontal layout */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mb-10">
            {currentProducts.map((product) => {
              const getProductName = () => {
                if (product.category === 'Basil Seed') {
                  return {
                    line1: 'Basil Seed Drink',
                    line2: `${product.name.replace('Basil Seed ', '')} Flavour`
                  };
                } else if (product.category === 'Nata de Coco') {
                  const cleanName = product.name.replace(/^(Coco |Mr\. Coco |Nata de Coco )/i, '');
                  return {
                    line1: 'Nata de COCO Drink',
                    line2: `${cleanName} Flavour`
                  };
                } else if (product.category === 'Falooda') {
                  return {
                    line1: 'Falooda Drink',
                    line2: `${product.name.replace('Falooda ', '')} Flavour`
                  };
                } else if (product.category === 'Aloe Vera') {
                  return {
                    line1: 'Aloe Vera Drink',
                    line2: `${product.name.replace('Aloe Vera ', '')} Flavour`
                  };
                } else if (product.category === 'Chia Seed') {
                  return {
                    line1: 'Chia Seed Drink',
                    line2: `${product.name.replace('Chia Seed ', '')} Flavour`
                  };
                }
                return { line1: product.name, line2: '' };
              };
              
              const getProductDescription = () => {
                if (product.category === 'Falooda') {
                  return 'Non dairy milk';
                } else if (product.category === 'Chia Seed') {
                  const flavorName = product.name.replace('Chia Seed ', '');
                  return `Health drink, low sugar with real ${flavorName} pulp`;
                } else if (product.category === 'Aloe Vera') {
                  return '30% real aloe vera pulp';
                }
                return null;
              };
              
              const productName = getProductName();
              const productDescription = getProductDescription();
              
              return (
                <Link key={product.id} href={`/products/${product.id}`} className="group">
                  <div className="card-hover overflow-hidden">
                    <div className="w-full h-28 md:h-32 lg:h-48 overflow-hidden">
                      <Image 
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-1 md:p-2 lg:p-4">
                      <div className="text-xs md:text-sm lg:text-base font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-red-600 transition-colors text-center">
                        <div>{productName.line1}</div>
                        {productName.line2 && <div>{productName.line2}</div>}
                      </div>
                      {productDescription && (
                        <div className="text-xs text-gray-600 text-center">
                          {productDescription}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  const isCurrentPage = page === currentPage;
                  const isNearCurrent = Math.abs(page - currentPage) <= 2;
                  
                  if (!isNearCurrent && page !== 1 && page !== totalPages) {
                    return page === 2 || page === totalPages - 1 ? (
                      <span key={page} className="px-3 py-2 text-gray-400">...</span>
                    ) : null;
                  }
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 ${
                        isCurrentPage 
                          ? 'bg-red-600 text-white shadow-lg transform scale-110' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16" style={{background: 'linear-gradient(135deg, #C2eaba 0%, rgba(194, 234, 186, 0.8) 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Interested in Our Products?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us for samples, pricing, or custom manufacturing solutions. 
            We&apos;re here to help you find the perfect beverage for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105"
            >
              Contact Us
            </Link>
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
              <Link href="https://shop.freshmate.pk/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src={freshmatelogo}
                  alt="Freshmate Logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <ProductsContent />
    </Suspense>
  );
}

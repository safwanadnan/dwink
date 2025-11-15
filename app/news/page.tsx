'use client';

import Image from "next/image";
import { useState } from "react";
import Navigation from "../../components/Navigation";

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const featuredNews = [
    {
      id: 1,
      title: "From Sea to Spirit: Rita Team Building 2025 Inspires Unity and Joy in Ninh Chu - Vinh Hy",
      date: "15 October 2025",
      rating: 5,
      description: "Our amazing team building event brought together Rita warriors from across Vietnam for an unforgettable experience of unity, joy, and team spirit by the beautiful Ninh Chu - Vinh Hy coastline.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
      category: "Team Building"
    },
    {
      id: 2,
      title: "What Does Matcha Taste Like? Unlocking the Flavor, Culture, and Global Rise of Japan's Green Gold",
      date: "08 October 2025",
      rating: 5,
      description: "Discover the fascinating world of matcha - from its traditional Japanese roots to its modern global popularity. Learn about the unique flavor profile, cultural significance, and health benefits of this green gold.",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop",
      category: "Product Knowledge"
    },
    {
      id: 3,
      title: "Rita Steps into the Global Spotlight at Anuga - Germany 2025",
      date: "07 October 2025",
      rating: 5,
      description: "Rita proudly participated in Anuga 2025, one of the world's largest food and beverage trade fairs, showcasing our premium products and strengthening our global presence in Cologne, Germany.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      category: "Trade Fair"
    },
    {
      id: 4,
      title: "Joy rises with the moon as Rita honors every colleague and every partner across the world",
      date: "06 October 2025",
      rating: 5,
      description: "Celebrating the Mid-Autumn Festival with gratitude and joy, Rita honors all our colleagues and partners worldwide. Together, we continue to grow and succeed in the global beverage industry.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      category: "Company News"
    },
    {
      id: 5,
      title: "Explore Beijing 6D5N: An Exclusive Privilege for Rita Warriors",
      date: "02 October 2025",
      rating: 5,
      description: "An exclusive 6-day, 5-night journey to Beijing for our Rita warriors, exploring the rich culture and history of China while strengthening our international business relationships.",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop",
      category: "Company Trip"
    }
  ];

  const ritaNews = [
    {
      title: "A Trip to China Of Rita Company - A Journey Full",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=150&h=100&fit=crop",
      description: "Discover our amazing journey to China"
    },
    {
      title: "The Mekong Delta is The High-Quality Raw",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop",
      description: "Learn about our premium ingredient sources"
    },
    {
      title: "Rita's Commitment to Sustainability",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=100&fit=crop",
      description: "Our green initiatives and eco-friendly practices"
    },
    {
      title: "New Product Launch: Organic Coconut Water",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=100&fit=crop",
      description: "Introducing our latest organic beverage"
    },
    {
      title: "Rita Wins International Quality Award",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=100&fit=crop",
      description: "Recognition for our excellence in quality"
    }
  ];

  const relatedNews = [
    {
      title: "Vietnamese Beverage Industry Growth",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=150&h=100&fit=crop",
      description: "Market trends and opportunities"
    },
    {
      title: "Health Benefits of Natural Juices",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop",
      description: "Nutritional advantages of fresh fruits"
    },
    {
      title: "Export Success Stories",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=150&h=100&fit=crop",
      description: "Our global market achievements"
    },
    {
      title: "Innovation in Beverage Technology",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=100&fit=crop",
      description: "Latest manufacturing advancements"
    },
    {
      title: "Customer Success Stories",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=100&fit=crop",
      description: "How we help businesses grow"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="News" />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-2 h-full">
            {/* Left Side - Vietnamese Theme */}
            <div className="relative bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-white/30 rounded-full animate-bounce"></div>
                </div>
                <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">NATURAL FROM VIETNAM</h1>
                <p className="text-xl opacity-90 animate-fadeInUp animate-delay-200">Premium quality beverages</p>
              </div>
            </div>

            {/* Right Side - Factory */}
            <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <div className="w-48 h-32 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse"></div>
                  <div className="absolute inset-2 bg-white/30 rounded-lg animate-bounce"></div>
                </div>
                <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">OVER 50000 m² PRODUCTION BASES</h1>
                <p className="text-xl opacity-90 animate-fadeInUp animate-delay-200">Modern manufacturing facilities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="grid grid-cols-4 gap-2 mb-2">
              {["GMP", "FDA Approval", "ISO", "HACCP", "Halal", "USDA Organic", "BRC Food", "FSSC 22000"].map((cert, index) => (
                <div key={index} className="text-xs font-bold text-gray-800 text-center bg-gray-100 rounded px-2 py-1">
                  {cert}
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="text-sm font-semibold text-red-600">Since 2004</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main News Column */}
            <div className="lg:col-span-3 space-y-8">
              {featuredNews.map((article, index) => (
                <article key={article.id} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover-lift animate-fadeInUp animate-delay-${index * 100}`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Article Image */}
                    <div className="md:col-span-1">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <Image 
                          src={article.image}
                          alt={article.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-red-600 font-semibold bg-red-50 px-2 py-1 rounded">
                          {article.category}
                        </span>
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(article.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">({article.rating}/5)</span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <a href="#" className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
                          Read more...
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Pagination */}
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded transition-colors ${
                      currentPage === page 
                        ? 'bg-red-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, 10))}
                  className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={currentPage === 10}
                >
                  Next
                </button>
                
                <button 
                  onClick={() => setCurrentPage(10)}
                  className="px-3 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors ml-2"
                >
                  End
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Rita News */}
              <div className="bg-white rounded-lg shadow-md p-6 animate-fadeInRight">
                <h3 className="text-xl font-bold text-gray-900 mb-6">RITA NEWS</h3>
                <div className="space-y-4">
                  {ritaNews.map((news, index) => (
                    <div key={index} className="flex space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                      <div className="flex-shrink-0">
                        <Image 
                          src={news.image}
                          alt={news.title}
                          width={60}
                          height={40}
                          className="w-15 h-10 object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-red-600 transition-colors">
                          {news.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {news.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related News */}
              <div className="bg-white rounded-lg shadow-md p-6 animate-fadeInRight animate-delay-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">RELATED NEWS</h3>
                <div className="space-y-4">
                  {relatedNews.map((news, index) => (
                    <div key={index} className="flex space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                      <div className="flex-shrink-0">
                        <Image 
                          src={news.image}
                          alt={news.title}
                          width={60}
                          height={40}
                          className="w-15 h-10 object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-red-600 transition-colors">
                          {news.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {news.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Information */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">RITA FOOD AND DRINK CO.,LTD</h3>
              <div className="space-y-2 text-sm">
                <p>Add: No. 8, Thong Nhat Boulevard, Song Than 2 Industrial Park, Di An Ward, Ho Chi Minh City, Vietnam.</p>
                <p>Office:(84)274 3784 688 Sales: (84)274 3784 788 Fax: (84)274 3784 799 Tax Code: 3700574950</p>
                <p>Email: marketing@rita.com.vn Website: https://rita.com.vn</p>
              </div>
            </div>

            {/* Social Media & QR Code */}
            <div className="flex flex-col items-end">
              <div className="flex space-x-4 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">X</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">P</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <span className="text-red-600 text-xs font-bold">♫</span>
                </div>
              </div>
              
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mb-4">
                <div className="text-red-600 text-xs text-center">QR<br/>CODE</div>
              </div>

              <div className="bg-white rounded p-2">
                <div className="text-red-600 text-xs font-bold">Alibaba.com</div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-500 mt-8 pt-8">
            <div className="text-center text-sm mb-4">
              <p>Rita Food & Drink Co., Ltd. 2004-2023. All Rights Reserved Development by RITA Beverage Company</p>
            </div>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="hover:text-red-200 transition-colors">About us</a>
              <span className="text-red-400">|</span>
              <a href="#" className="hover:text-red-200 transition-colors">Contact us</a>
              <span className="text-red-400">|</span>
              <a href="#" className="hover:text-red-200 transition-colors">Privacy Policy</a>
              <span className="text-red-400">|</span>
              <a href="#" className="hover:text-red-200 transition-colors">Terms of Service Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

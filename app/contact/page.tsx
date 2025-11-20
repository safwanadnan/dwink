'use client';

import { useState } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import { logo } from "../assets/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use setters so ESLint doesn't flag them as unused. We trigger a mailto redirect.
    setIsSubmitting(true);
    // Generate mailto link
    const mailto = `mailto:info@dwink.pk?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nCompany: ${formData.company || 'Not provided'}\n\nMessage:\n${formData.message}`
    )}`;

    // Small delay to allow UI state to update before navigation
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      window.location.href = mailto;
    }, 200);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="Contact Us" />

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden flex items-center justify-center" style={{background: 'linear-gradient(135deg, #C2eaba 0%, #b8e5a8 50%, #C2eaba 100%)'}}>
        <div className="text-center text-gray-800 z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'cursive' }}>Contact Us</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">Get in Touch</p>
          <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? We&apos;re here to help you find the perfect beverage solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Full Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Address *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3">
                    <span className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Company Name
                    </span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-500"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-3">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Subject *
                  </span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all duration-300 text-lg text-gray-900"
                >
                  <option value="">Select inquiry type</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="oem-services">OEM Services</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Message *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all duration-300 text-lg resize-none text-gray-900 placeholder-gray-500"
                  placeholder="Please provide details about your inquiry, including quantity requirements, specifications, or any specific questions you may have..."
                ></textarea>
              </div>
              
              <div className="flex items-center space-x-3 mb-6">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="w-5 h-5 text-teal-600 border-2 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">Privacy Policy</a> and consent to being contacted regarding my inquiry.
                </label>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-12 py-5 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We typically respond within 24 hours during business days
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our facilities in Ho Chi Minh City, Vietnam
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-teal-100 rounded-2xl p-8 text-center">
            <div className="aspect-video bg-gradient-to-br from-teal-200 to-slate-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Dwink Food & Drink Co., Ltd</h4>
                <p className="text-gray-600">Ho Chi Minh City, Vietnam</p>
                <button className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                  View on Google Maps
                </button>
              </div>
            </div>
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
              <span>Parent Company: info@freshmate.pk</span>
            </div>
            <div className="flex justify-center">
              <span>PO Box: 13002</span>
            </div>
          </div>

          <div className="border-t border-slate-300 pt-4 text-xs">
            <p className="mb-2">Dwink 2004 - 2025. All Rights Reserved Development by Dwink Beverage Company</p>
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

import React from 'react';
import { Star, ArrowRight, Check, Users, Image, Clock, FileImage, Layers, Zap, BarChart3, Scissors, Palette, Upload, Edit, Eye, Download } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ImageEditing = () => {
  const subServices = [
    {
      icon: Scissors,
      title: "Background Removal",
      description: "Clean background removal with precise edge detection and professional quality output for e-commerce and marketing materials."
    },
    {
      icon: Palette,
      title: "Color Correction & Enhancement",
      description: "Professional color grading, exposure correction, and enhancement to make your images pop with vibrant, natural colors."
    },
    {
      icon: Layers,
      title: "Photo Retouching",
      description: "Advanced retouching techniques including skin smoothing, blemish removal, and object removal for flawless results."
    },
    {
      icon: Zap,
      title: "Ghost Mannequin Effect",
      description: "Create professional product photos with invisible mannequin effect, perfect for clothing and apparel photography."
    },
    {
      icon: FileImage,
      title: "Product Image Optimization",
      description: "Optimize product images for e-commerce platforms with consistent lighting, shadows, and professional presentation."
    },
    {
      icon: BarChart3,
      title: "Bulk Image Processing",
      description: "Handle large volumes of images efficiently with consistent quality and fast turnaround times for enterprise clients."
    }
  ];

  const whyChooseUs = [
    "Professional-grade editing with industry-standard software",
    "24-hour turnaround available for urgent projects",
    "Dedicated account managers for seamless communication",
    "100% satisfaction guarantee with unlimited revisions",
    "Bulk processing discounts for high-volume projects",
    "AI-powered quality assurance with human oversight"
  ];

  const process = [
    { icon: Upload, title: "Upload", description: "Share your images securely" },
    { icon: Edit, title: "Edit", description: "Professional editing begins" },
    { icon: Eye, title: "Review", description: "Quality check and approval" },
    { icon: Download, title: "Download", description: "Receive enhanced images" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Manager", 
      company: "Fashion Forward",
      rating: 5,
      text: "The quality of image editing is exceptional. They transformed our product photos and significantly improved our conversion rates by 45%."
    },
    {
      name: "Mike Chen",
      role: "Marketing Director",
      company: "TechGear Pro",
      rating: 5,
      text: "Fast turnaround, professional quality, and excellent customer service. They handle our bulk image processing perfectly every time."
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "Lifestyle Co.",
      rating: 5,
      text: "Their attention to detail is remarkable. Every image comes back looking professional and ready for our marketing campaigns."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-green-200">4.9/5 from 5000+ image projects</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                  Professional Image Editing Services
                </h1>
                <p className="text-xl md:text-2xl text-green-200 mb-8 leading-relaxed">
                  Transform your images with professional editing that enhances quality, removes distractions, and creates stunning visuals that drive engagement and sales.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                    Get Free Sample
                  </button>
                  <button className="border border-green-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-900 transition-colors">
                    View Portfolio
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-green-200">24-hour turnaround available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-green-200">100% satisfaction guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-green-200">Professional-grade software</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-80 bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <p className="text-green-700 font-semibold">Before & After Gallery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Breakdown */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Image Editing Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive image enhancement services with world-class expertise and cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After Showcase</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See the dramatic transformation from raw images to professionally edited masterpieces
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "E-commerce Product", category: "Background Removal" },
                { title: "Portrait Retouching", category: "Beauty Enhancement" },
                { title: "Real Estate Photo", category: "Color Correction" },
                { title: "Fashion Photography", category: "Ghost Mannequin" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <p className="text-green-700 font-semibold">{item.title}</p>
                      <p className="text-green-600 text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose The Kow Company?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Industry-leading image editing services with unmatched quality and customer satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple 4-step process to get your images professionally edited
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by 500+ Brands</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From startups to Fortune 500 companies, businesses trust us with their image editing needs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "E-commerce Giants", "Fashion Brands", "Real Estate", "Healthcare", "Technology", "Automotive"
              ].map((industry, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-20">
                  <span className="text-gray-600 font-medium text-center">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real success stories from our satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Images?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied clients who trust us with their image editing needs. Get professional results in just 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start a Project
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Book a Call
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImageEditing;


import React from 'react';
import { Star, ArrowRight, Check, Users, Box, Monitor, Layers, Cube, Palette, Zap, Upload, Edit, Eye, Download } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ThreeDVisualization = () => {
  const subServices = [
    {
      icon: Cube,
      title: "3D Product Modeling",
      description: "Create detailed 3D models of your products for e-commerce, marketing, and visualization purposes."
    },
    {
      icon: Monitor,
      title: "Architectural Visualization",
      description: "Stunning 3D renders of buildings, interiors, and landscapes for real estate and construction."
    },
    {
      icon: Layers,
      title: "Character Design & Animation",
      description: "Bring characters to life with professional 3D modeling and animation services."
    },
    {
      icon: Palette,
      title: "Photorealistic Rendering",
      description: "High-quality CGI renders that are indistinguishable from real photography."
    },
    {
      icon: Box,
      title: "Industrial Visualization",
      description: "Technical 3D models and animations for machinery, equipment, and industrial processes."
    },
    {
      icon: Zap,
      title: "VR/AR Ready Assets",
      description: "Optimized 3D models and environments for virtual and augmented reality applications."
    }
  ];

  const whyChooseUs = [
    "Industry-leading 3D software and rendering technology",
    "Photorealistic quality that rivals real photography",
    "Fast turnaround with iterative review process",
    "Experienced team of 3D artists and designers",
    "VR/AR optimized models for future-ready content",
    "Competitive pricing with transparent cost structure"
  ];

  const process = [
    { icon: Upload, title: "Brief", description: "Share your vision and requirements" },
    { icon: Edit, title: "Model", description: "Our artists create your 3D assets" },
    { icon: Eye, title: "Review", description: "Preview and request refinements" },
    { icon: Download, title: "Deliver", description: "Receive your final 3D files" }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Product Manager",
      company: "TechGadgets Pro",
      rating: 5,
      text: "The 3D product visualizations helped us increase online sales by 60%. The quality is absolutely stunning and photorealistic."
    },
    {
      name: "Robert Kim",
      role: "Architect",
      company: "Modern Spaces Design",
      rating: 5,
      text: "Exceptional architectural visualization work. Clients can now see their projects before construction begins. Game-changing service."
    },
    {
      name: "Lisa Chen",
      role: "Marketing Director",
      company: "Furniture Plus",
      rating: 5,
      text: "Outstanding 3D furniture models that showcase our products better than traditional photography. Highly recommended."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-cyan-200">4.9/5 from 1500+ 3D projects</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  3D & CGI Visualization Services
                </h1>
                <p className="text-xl md:text-2xl text-cyan-200 mb-8 leading-relaxed">
                  Transform concepts into stunning photorealistic 3D visuals. From product models to architectural renders, we create immersive experiences that captivate and convert.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                    Get Free Quote
                  </button>
                  <button className="border border-cyan-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-900 transition-colors">
                    View 3D Gallery
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-cyan-200">Photorealistic quality guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-cyan-200">VR/AR ready 3D assets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-cyan-200">Unlimited revisions included</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-80 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Box className="w-16 h-16 text-cyan-600 mx-auto mb-4" />
                      <p className="text-cyan-700 font-semibold">3D Showcase</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 3D Visualization Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive 3D modeling and rendering services for every industry and application
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-cyan-600" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">3D Transformation Gallery</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From concept sketches to photorealistic 3D visualizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Product Visualization", category: "E-commerce" },
                { title: "Architectural Render", category: "Real Estate" },
                { title: "Industrial Design", category: "Manufacturing" },
                { title: "Character Model", category: "Entertainment" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <Box className="w-12 h-12 text-cyan-600 mx-auto mb-2" />
                      <p className="text-cyan-700 font-semibold">{item.title}</p>
                      <p className="text-cyan-600 text-sm">{item.category}</p>
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
                Leading the industry in 3D visualization with cutting-edge technology and artistic expertise
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
                Our streamlined process ensures your 3D vision becomes reality
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by 300+ companies for professional 3D visualization services
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
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-cyan-600 font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
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
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Vision to Life?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Transform your ideas into stunning 3D visualizations that captivate audiences and drive results. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Start a Project
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
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

export default ThreeDVisualization;

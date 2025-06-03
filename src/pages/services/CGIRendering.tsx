
import React from 'react';
import { Star, ArrowRight, Check, Users, Monitor, Zap, Layers, Eye, Upload, Edit, Download, Settings } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CGIRendering = () => {
  const subServices = [
    {
      icon: Monitor,
      title: "Photorealistic Rendering",
      description: "Create stunning photorealistic CGI that's indistinguishable from real photography."
    },
    {
      icon: Layers,
      title: "3D Animation",
      description: "Bring your 3D models to life with professional animation and motion graphics."
    },
    {
      icon: Eye,
      title: "Visual Effects (VFX)",
      description: "Add spectacular visual effects to enhance your video content and storytelling."
    },
    {
      icon: Settings,
      title: "Lighting & Shading",
      description: "Expert lighting design and material shading for realistic visual outputs."
    },
    {
      icon: Zap,
      title: "Real-time Rendering",
      description: "Fast, high-quality rendering for interactive applications and quick turnarounds."
    },
    {
      icon: Layers,
      title: "Compositing",
      description: "Seamlessly blend CGI elements with live-action footage for realistic results."
    }
  ];

  const whyChooseUs = [
    "Industry-leading rendering technology and software",
    "Photorealistic quality that rivals real photography",
    "Fast rendering times with cloud-based infrastructure",
    "Experienced team of 3D artists and technical directors",
    "Full pipeline from modeling to final compositing",
    "Competitive pricing with transparent project costs"
  ];

  const process = [
    { icon: Upload, title: "Brief", description: "Share your creative vision and requirements" },
    { icon: Edit, title: "Render", description: "Our artists create stunning CGI visuals" },
    { icon: Eye, title: "Review", description: "Preview and request any adjustments" },
    { icon: Download, title: "Deliver", description: "Receive your final rendered assets" }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "Creative Director",
      company: "Visual Arts Studio",
      rating: 5,
      text: "The CGI quality is absolutely stunning. Our clients can't believe these aren't real photographs. Game-changing work."
    },
    {
      name: "Maria Santos",
      role: "Film Producer",
      company: "Cinematic Productions",
      rating: 5,
      text: "Outstanding VFX work that brought our vision to life. The team's technical expertise and creativity exceeded expectations."
    },
    {
      name: "James Wilson",
      role: "Brand Manager",
      company: "Luxury Automotive",
      rating: 5,
      text: "The photorealistic car renders saved us thousands in photography costs while delivering superior quality results."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-purple-200">4.9/5 from 800+ CGI projects</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  CGI Rendering Services
                </h1>
                <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed">
                  Transform your concepts into photorealistic CGI renders and stunning visual effects. From product visualization to cinematic VFX, we create visuals that captivate and inspire.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                    Get Free Sample
                  </button>
                  <button className="border border-purple-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors">
                    View CGI Reel
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-purple-200">Photorealistic quality guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-purple-200">Hollywood-grade VFX pipeline</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-purple-200">Fast cloud-based rendering</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                      <p className="text-purple-700 font-semibold">CGI Showcase</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our CGI Rendering Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional CGI and VFX services for film, advertising, and digital content
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-purple-600" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">CGI Transformation Gallery</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From concept sketches to photorealistic CGI renders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Product Render", category: "E-commerce" },
                { title: "Architectural VFX", category: "Real Estate" },
                { title: "Vehicle CGI", category: "Automotive" },
                { title: "Character Animation", category: "Entertainment" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <p className="text-purple-700 font-semibold">{item.title}</p>
                      <p className="text-purple-600 text-sm">{item.category}</p>
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
                Industry-leading CGI rendering with cutting-edge technology and artistic expertise
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
                Our streamlined CGI process from concept to final render
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
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
                Trusted by 200+ studios and brands for professional CGI rendering
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
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Stunning CGI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Transform your creative vision into photorealistic CGI renders and spectacular visual effects. Get started with a free sample today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Start a Project
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
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

export default CGIRendering;

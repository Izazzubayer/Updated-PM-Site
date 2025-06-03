
import React from 'react';
import { Camera, Video, Box, Monitor, Code, Bot, ArrowRight, CheckCircle, Star, Users, Clock, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Image Editing Services",
      description: "Professional photo editing, retouching, and enhancement services for all your visual content needs.",
      features: ["Background Removal", "Color Correction", "Photo Retouching", "Batch Processing", "Product Photography", "Portrait Enhancement"],
      price: "Starting at $29/month",
      gradient: "from-pink-500 to-rose-500",
      href: "/services/image-editing"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Complete video production services from concept to final delivery for marketing and promotional content.",
      features: ["Video Editing", "Motion Graphics", "Color Grading", "Sound Design", "Animation", "Post-Production"],
      price: "Starting at $99/month",
      gradient: "from-purple-500 to-indigo-500",
      href: "/services/video-production"
    },
    {
      icon: Box,
      title: "3D Modeling",
      description: "Create stunning 3D models for product visualization, architectural rendering, and immersive experiences.",
      features: ["Product Modeling", "Architectural Visualization", "Character Design", "Technical Modeling", "Asset Creation", "Texturing"],
      price: "Starting at $199/month",
      gradient: "from-blue-500 to-cyan-500",
      href: "/services/3d-modeling"
    },
    {
      icon: Monitor,
      title: "CGI Rendering",
      description: "High-quality CGI rendering services for photorealistic visualizations and animations.",
      features: ["Photorealistic Rendering", "Animation", "Lighting Design", "Post-Processing", "VFX", "Compositing"],
      price: "Starting at $149/month",
      gradient: "from-green-500 to-emerald-500",
      href: "/services/cgi-rendering"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration", "Cloud Solutions", "DevOps"],
      price: "Starting at $299/month",
      gradient: "from-orange-500 to-red-500",
      href: "/services/software-development"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Streamline your workflows with intelligent automation and AI-powered solutions.",
      features: ["Process Automation", "AI Integration", "Workflow Optimization", "Custom AI Models", "Data Analysis", "Machine Learning"],
      price: "Starting at $199/month",
      gradient: "from-violet-500 to-purple-500",
      href: "/services/ai-automation"
    }
  ];

  const stats = [
    { value: "500K+", label: "Projects Completed", icon: CheckCircle },
    { value: "50K+", label: "Happy Clients", icon: Users },
    { value: "99.9%", label: "Uptime Guarantee", icon: Clock },
    { value: "24/7", label: "Support Available", icon: Zap }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Digital Studios",
      rating: 5,
      text: "The quality of work and attention to detail is exceptional. They've transformed our entire visual identity.",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "CTO",
      company: "TechFlow Inc.",
      rating: 5,
      text: "Their software development team delivered beyond our expectations. The solutions are robust and scalable.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Global Brands",
      rating: 5,
      text: "From video production to AI automation, they handle everything with professionalism and expertise.",
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-300">Rated 4.9/5 by 10,000+ clients</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Professional Digital Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our comprehensive suite of creative and technical services. From image editing to AI automation, we deliver excellence at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions designed to elevate your business and streamline your workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-green-600">{service.price}</span>
                      <a 
                        href={service.href}
                        className="group/btn flex items-center space-x-2 text-gray-700 font-medium hover:text-green-600 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A streamlined approach to deliver exceptional results every time
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "We understand your needs and goals" },
                { step: "02", title: "Planning", description: "Create a detailed project roadmap" },
                { step: "03", title: "Execution", description: "Our experts bring your vision to life" },
                { step: "04", title: "Delivery", description: "Quality assurance and final delivery" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses worldwide for exceptional service delivery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">{testimonial.avatar}</span>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied clients who trust us with their most important projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

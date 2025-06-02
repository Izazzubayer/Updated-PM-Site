
import React from 'react';
import { Camera, Video, Box, Monitor, Code, Bot, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Image Editing Services",
      description: "Professional photo editing, retouching, and enhancement services for all your visual content needs.",
      features: ["Background Removal", "Color Correction", "Photo Retouching", "Batch Processing"],
      price: "Starting at $29/month"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Complete video production services from concept to final delivery for marketing and promotional content.",
      features: ["Video Editing", "Motion Graphics", "Color Grading", "Sound Design"],
      price: "Starting at $99/month"
    },
    {
      icon: Box,
      title: "3D Modeling",
      description: "Create stunning 3D models for product visualization, architectural rendering, and immersive experiences.",
      features: ["Product Modeling", "Architectural Visualization", "Character Design", "Technical Modeling"],
      price: "Starting at $199/month"
    },
    {
      icon: Monitor,
      title: "CGI Rendering",
      description: "High-quality CGI rendering services for photorealistic visualizations and animations.",
      features: ["Photorealistic Rendering", "Animation", "Lighting Design", "Post-Processing"],
      price: "Starting at $149/month"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      price: "Starting at $299/month"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Streamline your workflows with intelligent automation and AI-powered solutions.",
      features: ["Process Automation", "AI Integration", "Workflow Optimization", "Custom AI Models"],
      price: "Starting at $199/month"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your business with cutting-edge technology and creative expertise.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                    <service.icon className="w-8 h-8 text-gray-600 group-hover:text-green-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-green-600">{service.price}</span>
                    <button className="group/btn flex items-center space-x-2 text-green-500 font-medium hover:text-green-600 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a custom quote.
            </p>
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
              Get Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

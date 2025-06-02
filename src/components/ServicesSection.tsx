
import React from 'react';
import { Camera, Video, Box, Monitor, Code, Bot, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Camera,
      title: "Image Editing Services",
      description: "Enhance your online visual content with engaging and captivating image editing. We will elevate your brand.",
      link: "Learn More"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Create content for marketing, promotions, training and communications to reach your target audience with our video ads.",
      link: "Learn More"
    },
    {
      icon: Box,
      title: "3D Modelling",
      description: "Transform your business with advanced 3D models that create immersive experiences and drive customer engagement.",
      link: "Learn More"
    },
    {
      icon: Monitor,
      title: "CGI Rendering",
      description: "Transform your concepts into realistic visualizations with our professional CGI rendering services. High-quality output guaranteed.",
      link: "Learn More"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions and applications to streamline your business processes and enhance productivity.",
      link: "Learn More"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Leverage AI to automate business workflows and improve efficiency. Smart solutions for modern businesses.",
      link: "Learn More"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build, file, and manage cutting-edge digital e-commerce and creative solutions
          </p>
        </div>

        {/* Services Grid */}
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
              
              <button className="group/btn flex items-center space-x-2 text-green-500 font-medium hover:text-green-600 transition-colors">
                <span>{service.link}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React from 'react';
import { Cpu, Cloud, Zap, Shield, Code2, Brain } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Advanced machine learning algorithms for intelligent automation and decision-making processes."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions built on AWS, Google Cloud, and Azure for maximum reliability."
    },
    {
      icon: Cpu,
      title: "High-Performance Computing",
      description: "Cutting-edge processors and GPUs for lightning-fast rendering and processing capabilities."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols to protect your valuable digital assets."
    },
    {
      icon: Code2,
      title: "Modern Development",
      description: "Latest frameworks and technologies ensuring future-proof and maintainable solutions."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant results with our optimized algorithms and distributed computing architecture."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-product">
            <span className="gradient-text">Powered by Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 font-product max-w-3xl mx-auto">
            We leverage cutting-edge technologies to deliver exceptional results and stay ahead of industry trends
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-500 hover:-translate-y-3 micro-bounce relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <tech.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-product group-hover:text-blue-600 transition-colors duration-300">
                  {tech.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-product">
                  {tech.description}
                </p>
                
                {/* Animated border bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-700 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

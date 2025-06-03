
import React from 'react';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "150%",
      label: "Average ROI Increase",
      description: "for our clients"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Happy Clients",
      description: "worldwide"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "across the globe"
    },
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards",
      description: "and recognitions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-product gradient-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 font-product max-w-2xl mx-auto">
            Our commitment to excellence drives measurable results for businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/10">
                <stat.icon className="w-10 h-10 text-white group-hover:text-green-400 transition-colors duration-300" />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-2 font-product group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </h3>
              
              <p className="text-lg font-semibold text-gray-300 mb-1 font-product">
                {stat.label}
              </p>
              
              <p className="text-sm text-gray-400 font-product">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

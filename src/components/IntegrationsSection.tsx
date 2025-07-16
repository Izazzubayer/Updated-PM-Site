import React, { useState } from 'react';
import ScrollAnimateWrapper from './ScrollAnimateWrapper';

const IntegrationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const integrations = [
    {
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      color: "hover:scale-110"
    },
    {
      name: "Google",
      logo: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg",
      color: "hover:scale-110"
    },
    {
      name: "Adobe",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-1.svg",
      color: "hover:scale-110"
    },
    {
      name: "AWS",
      logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
      color: "hover:scale-110"
    },
    {
      name: "Microsoft",
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
      color: "hover:scale-110"
    },
    {
      name: "Slack",
      logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
      color: "hover:scale-110"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-100/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-100/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollAnimateWrapper animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">
              <span className="gradient-text">Apps & Integration</span>
            </h2>
            <p className="text-xl text-gray-600 font-product max-w-2xl mx-auto">
              Industry-leading Optimized APIs Customizable for exceptional results
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-6 rounded-full animate-pulse"></div>
          </div>
        </ScrollAnimateWrapper>

        {/* Integrations Grid */}
        <ScrollAnimateWrapper animation="scale-in" delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className={`group flex flex-col items-center space-y-4 p-6 rounded-2xl ${integration.color}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="w-20 h-20 flex items-center justify-center relative">
                  <img 
                    src={integration.logo} 
                    alt={integration.name} 
                    className="w-full h-full object-contain filter grayscale"
                  />
                </div>
                <span className="text-gray-700 font-medium font-product text-center">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimateWrapper>

        {/* Bottom CTA */}
        <ScrollAnimateWrapper animation="fade-up" delay={600}>
          <div className="text-center mt-16">
            <button className="btn-premium px-8 py-4 text-white font-semibold rounded-xl font-product shadow-lg">
              View All Integrations
            </button>
          </div>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};

export default IntegrationsSection;


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ToolsIntegrationSection = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Analytics & Ads"
    },
    {
      name: "WordPress",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      description: "CMS Platform"
    },
    {
      name: "WooCommerce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/WooCommerce_logo.svg",
      description: "E-commerce"
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
      description: "Creative Suite"
    },
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      description: "Design Tool"
    },
    {
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      description: "E-commerce Platform"
    }
  ];

  return (
    <section className="py-20 bg-white pixel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">
            Trusted Platform Partners
          </h2>
          <p className="text-xl text-gray-600 font-mono max-w-2xl mx-auto">
            We work with industry-leading platforms to deliver exceptional results
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`pixel-card p-6 text-center bg-white hover:animate-pixel-glow transition-all duration-300 ${
                hoveredIndex === index ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="font-pixel text-black text-sm mb-1">{partner.name}</h3>
              <p className="text-xs text-gray-600 font-mono">{partner.description}</p>
              
              {/* Pixel hover effect */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 border-2 border-mango-500 animate-pixel-glow pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="pixel-button px-8 py-4 font-pixel">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolsIntegrationSection;

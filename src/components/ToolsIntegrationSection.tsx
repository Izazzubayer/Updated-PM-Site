import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ToolsIntegrationSection = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const partners = [
    {
      name: "Google",
      logo: "https://crystalpng.com/wp-content/uploads/2025/05/google-logo.png",
      description: "Analytics & Ads"
    },
    {
      name: "WordPress",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      description: "CMS Platform"
    },
    {
      name: "WooCommerce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png",
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
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAG1sZJEG7XK4uH6271f8HKn458g1T4nZxQ&s",
      description: "E-commerce Platform"
    },
  {
    name: "Cursor",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cursor.png",
    description: "AI Code Editor"
  },
  {
    name: "MCP",
    logo: "https://cdn.prod.website-files.com/64ba53d096c21b6f0d1ffd9f/67ffc7eb0fabb1e3c98bc5e4_dfe.png",
    description: "Model Context Protocol"
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1200px-Notion-logo.svg.png",
    description: "Collaboration Platform"
  },
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
              className={`pixel-card p-6 text-center bg-white ${
                hoveredIndex === index ? '' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-20 h-20 flex items-center justify-center text-center">
                  <div className="text-xs font-bold">
                    {partner.name === "Google" && <span className="text-blue-500">G</span>}
                    {partner.name === "WordPress" && <span className="text-blue-600">W</span>}
                    {partner.name === "WooCommerce" && <span className="text-purple-600">WC</span>}
                    {partner.name === "Adobe" && <span className="text-red-500">A</span>}
                    {partner.name === "Figma" && <span className="text-purple-500">F</span>}
                    {partner.name === "Shopify" && <span className="text-green-600">S</span>}
                  </div>
                </div>
              </div>
              <h3 className="font-pixel text-black text-m mb-1">{partner.name}</h3>
              <p className="text-xs text-gray-600 font-mono">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsIntegrationSection;

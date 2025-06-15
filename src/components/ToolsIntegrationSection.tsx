
import React from 'react';
import { Figma, Chrome, Smartphone, Code, Palette, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ToolsIntegrationSection = () => {
  const { t } = useTranslation();

  const tools = [
    {
      category: "Design Tools",
      icon: Palette,
      items: ["Adobe Creative Suite", "Figma", "Sketch", "InVision", "Canva Pro"]
    },
    {
      category: "Development",
      icon: Code,
      items: ["WordPress", "Shopify", "WooCommerce", "React", "Custom HTML/CSS"]
    },
    {
      category: "Analytics & SEO",
      icon: Zap,
      items: ["Google Analytics", "SEO Optimization", "Google Search Console", "Hotjar", "GTmetrix"]
    },
    {
      category: "Integrations",
      icon: Chrome,
      items: ["Payment Gateways", "Email Marketing", "Social Media", "CRM Systems", "Booking Systems"]
    }
  ];

  const platforms = [
    { name: "WordPress", logo: "🌐" },
    { name: "Shopify", logo: "🛍️" },
    { name: "Figma", logo: "🎨" },
    { name: "Adobe", logo: "🎭" },
    { name: "Google", logo: "🔍" },
    { name: "Meta", logo: "📱" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Tools & Integrations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-product">
            We use industry-leading tools and platforms to deliver cutting-edge solutions that scale with your business.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-orange-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-xl flex items-center justify-center mb-4">
                <tool.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-jakarta">{tool.category}</h3>
              <ul className="space-y-2">
                {tool.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600 font-product flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Platform Partners */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-jakarta">Trusted Platform Partners</h3>
            <p className="text-gray-600 font-product">We're certified and experienced with industry-leading platforms</p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-110 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <span className="text-2xl">{platform.logo}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 font-product">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsIntegrationSection;

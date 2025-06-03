
import React from 'react';

const IntegrationsSection = () => {
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
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Apps & Integration</h2>
          <p className="text-xl text-gray-600 font-product">
            Industry-leading Optimized APIs Customizable for exceptional results
          </p>
        </div>

        {/* Integrations */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className={`group flex flex-col items-center space-y-4 ${integration.color} transition-transform duration-300`}
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src={integration.logo} 
                  alt={integration.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-gray-700 font-medium font-product">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

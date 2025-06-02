
import React from 'react';

const IntegrationsSection = () => {
  const integrations = [
    {
      name: "Shopify",
      logo: "S",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Google",
      logo: "G",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Revision Lab",
      logo: "R",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "NUREG",
      logo: "N",
      color: "bg-gray-100 text-gray-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apps & Integration</h2>
          <p className="text-xl text-gray-600">
            Industry-leading Optimized APIs Customizable for exceptional results
          </p>
        </div>

        {/* Integrations */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center space-y-4 hover:scale-110 transition-transform duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl ${integration.color} flex items-center justify-center text-2xl font-bold shadow-lg group-hover:shadow-xl transition-shadow`}>
                {integration.logo}
              </div>
              <span className="text-gray-700 font-medium">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

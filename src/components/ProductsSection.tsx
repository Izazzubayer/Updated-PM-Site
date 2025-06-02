
import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      title: "HoloSnap",
      subtitle: "Transform 2D Images Into Stunning 3D Models",
      description: "Bring your flat world into our responsive 3D reality. That makes every image an immersive experience. Perfect for e-commerce, marketing, and creative projects.",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png",
      demoLink: "Try For Free",
      documentationLink: "API Documentation",
      featured: true
    },
    {
      title: "Background AI",
      subtitle: "Not Just A Background Removal Tool",
      description: "Beyond basic removal our AI understands context to provide suggestions for alternative backgrounds and creative compositions for your images.",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png",
      demoLink: "Try Background AI",
      documentationLink: "See Documentation",
      featured: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Products We Have Created Here At TKCL
          </h2>
          <p className="text-xl text-gray-600">
            Explore some of our state-of-the-art projects
          </p>
        </div>

        {/* Products */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 transform group-hover:scale-105 transition-all duration-500">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-green-500 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{product.title}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                  {product.subtitle}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                    <span>{product.demoLink}</span>
                    <Play className="w-4 h-4" />
                  </button>
                  
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-green-500 hover:text-green-500 transition-colors flex items-center justify-center space-x-2">
                    <span>{product.documentationLink}</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

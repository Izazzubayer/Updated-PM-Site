
import React from 'react';
import { ExternalLink, Play, Star, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const products = [
    {
      title: "Retouched AI",
      subtitle: "AI-Powered Image Enhancement",
      description: "Advanced AI technology that automatically enhances and retouches images with professional quality results in seconds.",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png",
      features: ["Auto Enhancement", "Background Removal", "Skin Retouching", "Batch Processing"],
      rating: 4.9,
      users: "10,000+",
      link: "/products/retouched-ai",
      featured: true
    },
    {
      title: "HotSnap",
      subtitle: "Transform 2D Images Into Stunning 3D Models",
      description: "Revolutionary technology that converts flat 2D images into immersive 3D models perfect for e-commerce and virtual experiences.",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png",
      features: ["2D to 3D Conversion", "Real-time Preview", "Multiple Formats", "API Integration"],
      rating: 4.8,
      users: "5,000+",
      link: "/products/hotsnap",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative AI-powered tools and platforms designed to revolutionize your creative workflow.
            </p>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

                    {/* Stats */}
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{product.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold">{product.users} users</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link 
                        to={product.link}
                        className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      
                      <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-green-500 hover:text-green-500 transition-colors flex items-center justify-center space-x-2">
                        <span>Try Demo</span>
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Building Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and businesses using our products to enhance their workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Get Started Free
              </button>
              <Link 
                to="/pricing"
                className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-500 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;

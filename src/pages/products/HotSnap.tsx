
import React from 'react';
import { Play, Star, Users, CheckCircle, Download, Box } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HotSnap = () => {
  const features = [
    "2D to 3D Conversion",
    "Real-time Preview",
    "Multiple Export Formats",
    "API Integration",
    "Batch Processing",
    "Custom Lighting",
    "Texture Mapping",
    "WebGL Export"
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Create immersive product views for online stores"
    },
    {
      title: "Gaming",
      description: "Generate 3D assets from concept art"
    },
    {
      title: "Architecture",
      description: "Transform 2D plans into 3D visualizations"
    },
    {
      title: "Marketing",
      description: "Create engaging 3D content for campaigns"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Box className="w-4 h-4" />
                  <span>2D to 3D Conversion</span>
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  HotSnap
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Revolutionary technology that transforms flat 2D images into stunning 3D models. Perfect for e-commerce, gaming, and immersive experiences.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.8/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">5,000+ users</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                    <span>Try Live Demo</span>
                    <Play className="w-5 h-5" />
                  </button>
                  
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center space-x-2">
                    <span>Get API Access</span>
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png" 
                      alt="HotSnap 3D Conversion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced 3D Features</h2>
              <p className="text-xl text-gray-600">Everything you need for professional 3D conversion</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-xl text-gray-600">Discover how HotSnap can transform your workflow</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Box className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Creating 3D Content Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your 2D images into stunning 3D models with HotSnap's revolutionary technology.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
              Get Started Free
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HotSnap;


import React from 'react';
import { Play, Star, Users, CheckCircle, Download, Zap } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RetouchedAI = () => {
  const features = [
    "AI-Powered Auto Enhancement",
    "Professional Skin Retouching",
    "Background Removal & Replacement",
    "Batch Processing Capabilities",
    "Color Correction & Grading",
    "Real-time Preview",
    "Multiple Export Formats",
    "API Integration"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Fashion Photographer",
      content: "RetouchedAI has revolutionized my workflow. What used to take hours now takes minutes.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "E-commerce Manager",
      content: "The batch processing feature is incredible. We process thousands of product images effortlessly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>AI-Powered Image Enhancement</span>
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  RetouchedAI
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional-grade AI image enhancement that delivers stunning results in seconds. Perfect for photographers, designers, and businesses.
                </p>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">10,000+ users</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                    <span>Try Free Demo</span>
                    <Play className="w-5 h-5" />
                  </button>
                  
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:text-green-500 transition-colors flex items-center justify-center space-x-2">
                    <span>Download</span>
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
                    <img 
                      src="/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png" 
                      alt="RetouchedAI Interface"
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600">Everything you need for professional image enhancement</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Users Say</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Images?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals using RetouchedAI to enhance their workflow.
            </p>
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RetouchedAI;

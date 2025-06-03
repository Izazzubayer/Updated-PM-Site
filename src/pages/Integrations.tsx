
import React from 'react';
import { Code, Zap, Shield, Globe, CheckCircle, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Integrations = () => {
  const integrations = [
    {
      name: "Shopify",
      logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      description: "Seamlessly integrate with your Shopify store for automated product image processing."
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg",
      description: "Leverage Google Cloud's infrastructure for scalable image and video processing."
    },
    {
      name: "Adobe Creative",
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-1.svg",
      description: "Direct integration with Adobe Creative Suite for enhanced workflow efficiency."
    },
    {
      name: "AWS",
      logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
      description: "Utilize AWS services for robust, scalable cloud-based processing solutions."
    },
    {
      name: "Figma",
      logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      description: "Connect your Figma designs with our 3D modeling and rendering services."
    },
    {
      name: "Slack",
      logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
      description: "Receive notifications and updates directly in your Slack workspace."
    }
  ];

  const apiFeatures = [
    "RESTful API with comprehensive documentation",
    "Real-time webhooks for instant notifications",
    "Rate limiting and authentication",
    "SDKs for popular programming languages",
    "Sandbox environment for testing",
    "24/7 developer support"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-jakarta">
              Integrations & APIs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-product">
              Connect our powerful services with your existing tools and workflows. Build custom solutions with our comprehensive APIs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-colors font-product">
                View API Docs
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-purple-500 hover:text-purple-500 transition-colors font-product">
                Get API Key
              </button>
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Popular Integrations</h2>
              <p className="text-xl text-gray-600 font-product">
                Connect with the tools you already use
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <div 
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-20 h-20 flex items-center justify-center mb-6">
                    <img 
                      src={integration.logo} 
                      alt={integration.name} 
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-jakarta">{integration.name}</h3>
                  <p className="text-gray-600 mb-6 font-product">{integration.description}</p>
                  <button className="flex items-center space-x-2 text-purple-500 font-medium hover:text-purple-600 transition-colors font-product">
                    <span>Learn More</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-jakarta">
                  Powerful API Platform
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-product">
                  Build custom integrations and automate your workflows with our comprehensive API platform.
                </p>
                
                <div className="space-y-4">
                  {apiFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 font-product">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors font-product">
                    Get Started with API
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-product">API Example</span>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto font-mono">
{`curl -X POST \\
  https://api.kowcompany.com/v1/enhance \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "image_url": "https://example.com/image.jpg",
    "enhancements": ["auto_enhance", "background_removal"],
    "quality": "high"
  }'`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Why Choose Our Integrations?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-jakarta">Fast Implementation</h3>
                <p className="text-gray-600 font-product">Get up and running in minutes with our easy-to-use SDKs and comprehensive documentation.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-jakarta">Enterprise Security</h3>
                <p className="text-gray-600 font-product">Bank-grade security with encryption, authentication, and compliance with industry standards.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-jakarta">Global Scale</h3>
                <p className="text-gray-600 font-product">Reliable performance worldwide with our global infrastructure and 99.9% uptime guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 font-jakarta">Ready to Integrate?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-product">
              Start building with our APIs today. Get your free API key and explore our comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-colors font-product">
                Get Free API Key
              </button>
              <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-purple-500 transition-colors font-product">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Integrations;

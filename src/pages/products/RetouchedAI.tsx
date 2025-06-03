
import React from 'react';
import { Play, Star, Users, CheckCircle, Download, Zap, Upload, ArrowRight, Monitor, Layers, Clock, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RetouchedAI = () => {
  const features = [
    {
      icon: Zap,
      title: "Automatic Background Removal",
      description: "AI instantly detects and removes backgrounds with pixel-perfect precision"
    },
    {
      icon: Layers,
      title: "Hair and Edge Preservation",
      description: "Advanced algorithms preserve fine details like hair strands and complex edges"
    },
    {
      icon: Clock,
      title: "Batch Editing Capabilities",
      description: "Process hundreds of images simultaneously for maximum efficiency"
    },
    {
      icon: Monitor,
      title: "API Access for Developers",
      description: "Integrate our technology directly into your applications and workflows"
    },
    {
      icon: Download,
      title: "Multiple Export Options",
      description: "Export with white, transparent, or custom backgrounds in various formats"
    }
  ];

  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Upload your image or drag and drop"
    },
    {
      icon: Zap,
      title: "AI Detects",
      description: "Our AI analyzes and removes background"
    },
    {
      icon: Download,
      title: "Preview & Download",
      description: "Review results and download instantly"
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Processing",
      description: "Round-the-clock availability with lightning-fast processing times"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Privacy",
      description: "Your images are secure with enterprise-level data protection"
    },
    {
      icon: Users,
      title: "Trusted by 1000+ Teams",
      description: "Used by creative professionals and businesses worldwide"
    }
  ];

  const integrations = [
    "Shopify", "WordPress", "Adobe Photoshop", "Figma", "Canva", "WooCommerce"
  ];

  const pricingPlans = [
    {
      name: "Pay-per-Image",
      price: "$0.10",
      description: "Perfect for occasional use",
      features: ["High quality processing", "All export formats", "Email support", "No subscription required"],
      cta: "Start Processing"
    },
    {
      name: "Monthly Pro",
      price: "$29/month",
      description: "For regular users",
      features: ["500 images/month", "Priority processing", "API access", "Batch uploads", "Priority support"],
      cta: "Start Free Trial",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and businesses",
      features: ["Unlimited processing", "Custom integrations", "Dedicated support", "SLA guarantees", "White-label solutions"],
      cta: "Contact Sales"
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
                  <span>AI-Powered Background Removal</span>
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Instant, Pixel-Perfect Background Removal
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Retouched.Ai combines precision AI and human QA for flawless cutouts. Remove backgrounds instantly with professional quality results.
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
                    <span>Try Retouched.Ai</span>
                    <Play className="w-5 h-5" />
                  </button>
                  
                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:text-green-500 transition-colors flex items-center justify-center space-x-2">
                    <span>Explore API</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
                    <div className="text-center">
                      <Layers className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <p className="text-gray-500">Before/After Slider Demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-xl text-gray-600">Professional-grade tools for perfect background removal</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <feature.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Three simple steps to perfect background removal</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Retouched.Ai?</h2>
              <p className="text-xl text-gray-600">Trusted by professionals worldwide</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <reason.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrations</h2>
              <p className="text-xl text-gray-600">Works seamlessly with your favorite tools</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                  <div className="text-lg font-semibold text-gray-700">{integration}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Need a custom integration?</p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Plans & Pricing</h2>
              <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${plan.featured ? 'border-2 border-green-500 scale-105' : 'border border-gray-200'}`}>
                  {plan.featured && (
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.featured ? 'bg-green-500 text-white hover:bg-green-600' : 'border-2 border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-500'}`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Demo */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Results</h2>
              <p className="text-xl text-gray-600">Before and after examples from real users</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Layers className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Example {item}</h3>
                    <p className="text-gray-600">Professional background removal with preserved details</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Remove Backgrounds Like a Pro?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals using Retouched.Ai for perfect background removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Remove Backgrounds Now
              </button>
              <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-500 transition-colors">
                View API Docs
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RetouchedAI;

import React from 'react';
import { SEO } from '../../components/SEO';
import { Play, Star, Users, CheckCircle, Download, Box, Upload, Zap, Globe, ArrowRight, Monitor, Layers } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const HoloSnap = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Mesh Generation",
      description: "Advanced algorithms create accurate 3D topology from single images"
    },
    {
      icon: Monitor,
      title: "Supports Multiple Angles",
      description: "Upload multiple views for enhanced 3D reconstruction accuracy"
    },
    {
      icon: CheckCircle,
      title: "Clean Topology Output",
      description: "Optimized mesh structure ready for professional workflows"
    },
    {
      icon: Download,
      title: "Multiple Export Formats",
      description: "Export as GLB, FBX, OBJ, and other industry-standard formats"
    }
  ];

  const useCases = [
    {
      title: "E-commerce 3D Previews",
      description: "Transform product photos into interactive 3D models for online stores",
      icon: Globe
    },
    {
      title: "Product Design & Prototyping",
      description: "Convert concept sketches into workable 3D prototypes",
      icon: Box
    },
    {
      title: "Game Asset Creation",
      description: "Generate 3D assets from 2D concept art for games and simulations",
      icon: Play
    },
    {
      title: "AR/VR Applications",
      description: "Create immersive 3D content for augmented and virtual reality",
      icon: Monitor
    }
  ];

  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Upload your 2D image or multiple angles"
    },
    {
      icon: Zap,
      title: "AI Reconstruction",
      description: "Our AI analyzes and generates a 3D mesh"
    },
    {
      icon: Download,
      title: "3D Mesh Download",
      description: "Download your model in preferred format"
    }
  ];

  const pricingPlans = [
    {
      name: "Free Trial",
      price: "Free",
      description: "Perfect for testing",
      features: ["5 conversions", "Basic quality", "GLB export", "Email support"],
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$29/month",
      description: "For professionals",
      features: ["100 conversions/month", "High quality", "All export formats", "Priority support", "Batch processing"],
      cta: "Get Pro Access",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and businesses",
      features: ["Unlimited conversions", "Premium quality", "API access", "Dedicated support", "Custom integrations"],
      cta: "Contact Sales"
    }
  ];

  const integrations = [
    { name: "Blender", logo: "https://cdn.worldvectorlogo.com/logos/blender-2.svg" },
    { name: "Unity", logo: "https://cdn.worldvectorlogo.com/logos/unity-69.svg" },
    { name: "Unreal Engine", logo: "https://cdn.worldvectorlogo.com/logos/unreal-engine-1.svg" },
    { name: "Maya", logo: "https://cdn.worldvectorlogo.com/logos/autodesk-maya.svg" },
    { name: "3ds Max", logo: "https://cdn.worldvectorlogo.com/logos/autodesk-3ds-max.svg" },
    { name: "Cinema 4D", logo: "https://cdn.worldvectorlogo.com/logos/cinema-4d-1.svg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="HoloSnap - 2D to 3D AI Conversion Tool"
        description="HoloSnap uses AI to generate high-fidelity 3D meshes from any 2D input. Transform flat images into interactive 3D models in seconds."
        keywords="HoloSnap, 2D to 3D, AI 3D generation, mesh generation, 3D modeling, AI tools, Pixel Mango products"
      />
      <Header />
      <ScrollToTop />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium hover-lift">
                  <Box className="w-4 h-4" />
                  <span>2D to 3D Conversion</span>
                </div>

                <h1 className="text-6xl font-bold text-gray-900 leading-tight gradient-text">
                  Turn Images into 3D Models with One Click
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animate-delay-200">
                  HoloSnap uses AI to generate high-fidelity 3D meshes from any 2D input. Transform flat images into interactive 3D models in seconds.
                </p>

                <div className="flex items-center space-x-6 animate-fade-in-up animate-delay-300">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.8/5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold">5,000+ creators</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2">
                    <span>Try HoloSnap</span>
                    <Play className="w-5 h-5" />
                  </button>

                  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2">
                    <span>Book Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="bg-white rounded-3xl shadow-2xl p-8 glass-effect">
                  <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden flex items-center justify-center relative">
                    <Box className="w-24 h-24 text-green-500 animate-scale-in" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-in-right opacity-50"></div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/10 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse animate-delay-200"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Three simple steps to transform your 2D images into 3D models</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-xl text-gray-600">Discover how HoloSnap powers creativity across industries</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600">Everything you need for professional 3D conversion</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-6 p-8 bg-white border border-gray-200 rounded-2xl animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Seamless Integrations</h2>
              <p className="text-xl text-gray-600 font-product">Works with your favorite 3D software</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-lg font-semibold text-gray-700 font-product">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">See HoloSnap in Action</h2>
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <button className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                    <Play className="w-8 h-8 text-green-500 ml-1" />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide-in-right"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
              <p className="text-xl text-gray-600">Start free and scale as you grow</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up ${plan.featured ? 'border-2 border-green-500 scale-105' : 'border border-gray-200'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {plan.featured && (
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold ${plan.featured ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' : 'border-2 border-gray-300 text-gray-700'}`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Images?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators using HoloSnap to bring their 2D images to life in 3D.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Get Started with HoloSnap
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HoloSnap;

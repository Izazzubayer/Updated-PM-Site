
import React from 'react';
import { Star, ArrowRight, Check, Users, Bot, Zap, Settings, Brain, Upload, Edit, Eye, Download } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AIAutomation = () => {
  const subServices = [
    {
      icon: Bot,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI-powered solutions."
    },
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Develop tailored AI models for your specific business needs and requirements."
    },
    {
      icon: Zap,
      title: "Workflow Optimization",
      description: "Streamline your business processes with smart automation and AI integration."
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and platforms."
    },
    {
      icon: Brain,
      title: "Data Analysis & Insights",
      description: "Transform raw data into actionable insights with advanced AI analytics."
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "Create intelligent chatbots for customer service and user engagement."
    }
  ];

  const whyChooseUs = [
    "Cutting-edge AI technology and machine learning expertise",
    "Custom solutions tailored to your business needs",
    "Seamless integration with existing systems",
    "24/7 monitoring and optimization of AI workflows",
    "Scalable solutions that grow with your business",
    "Comprehensive training and ongoing support"
  ];

  const process = [
    { icon: Upload, title: "Analyze", description: "We assess your current workflows and identify opportunities" },
    { icon: Edit, title: "Design", description: "Create custom AI solutions for your specific needs" },
    { icon: Eye, title: "Test", description: "Rigorous testing and optimization of AI systems" },
    { icon: Download, title: "Deploy", description: "Full deployment with training and ongoing support" }
  ];

  const testimonials = [
    {
      name: "Rachel Kim",
      role: "Operations Director",
      company: "TechFlow Systems",
      rating: 5,
      text: "AI automation reduced our processing time by 80% and eliminated human errors. The ROI was immediate and substantial."
    },
    {
      name: "Michael Chang",
      role: "CEO",
      company: "DataDrive Solutions",
      rating: 5,
      text: "The custom AI models transformed how we analyze customer data. Insights that took weeks now happen in real-time."
    },
    {
      name: "Sophie Martinez",
      role: "Customer Success Manager",
      company: "ServiceFirst Inc",
      rating: 5,
      text: "Our AI chatbot handles 70% of customer inquiries automatically, freeing our team for complex problem-solving."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-emerald-200">4.9/5 from 600+ automation projects</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  AI Automation Services
                </h1>
                <p className="text-xl md:text-2xl text-emerald-200 mb-8 leading-relaxed">
                  Revolutionize your business with intelligent automation and AI-powered solutions. From workflow optimization to custom AI models, we help you work smarter, not harder.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                    Get Free Consultation
                  </button>
                  <button className="border border-emerald-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-900 transition-colors">
                    View AI Solutions
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-emerald-200">Custom AI solutions for your business</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-emerald-200">Seamless integration with existing systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-emerald-200">24/7 monitoring and optimization</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-green-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Bot className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                      <p className="text-emerald-700 font-semibold">AI Automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Breakdown */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Automation Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions to automate, optimize, and transform your business processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Transformation Results</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how AI automation transformed these business processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Customer Service Bot", category: "Support Automation", improvement: "80% faster response" },
                { title: "Data Processing", category: "Analytics Automation", improvement: "95% time reduction" },
                { title: "Inventory Management", category: "Supply Chain AI", improvement: "60% cost savings" },
                { title: "Lead Qualification", category: "Sales Automation", improvement: "3x conversion rate" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-emerald-100 to-green-200 flex items-center justify-center">
                    <div className="text-center">
                      <Bot className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
                      <p className="text-emerald-700 font-semibold">{item.title}</p>
                      <p className="text-emerald-600 text-sm">{item.category}</p>
                      <p className="text-green-600 text-xs font-medium mt-1">{item.improvement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose The Kow Company?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leading AI automation with proven results and cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg">{benefit}</p>
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
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our proven process for implementing AI automation solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by 400+ companies for AI automation and intelligent solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Transform your operations with intelligent AI automation. Increase efficiency, reduce costs, and scale your business with our custom AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Start a Project
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Book a Call
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAutomation;


import React from 'react';
import { Star, ArrowRight, Check, Users, Code, Database, Cloud, Smartphone, Globe, Zap, Upload, Edit, Eye, Download } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SoftwareDevelopment = () => {
  const subServices = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Custom web applications built with modern frameworks like React, Angular, and Node.js for scalable solutions."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences."
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description: "RESTful APIs, GraphQL endpoints, and seamless third-party integrations to connect your systems."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and Google Cloud deployment with scalable architecture and automated DevOps pipelines."
    },
    {
      icon: Code,
      title: "Custom Software Solutions",
      description: "Tailored software applications designed specifically for your business needs and workflows."
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Connect disparate systems and automate workflows for improved efficiency and data flow."
    }
  ];

  const whyChooseUs = [
    "Agile development methodology with regular updates",
    "Full-stack expertise across modern technologies",
    "Scalable architecture designed for growth",
    "24/7 support and maintenance packages available",
    "Security-first approach with best practices",
    "Transparent pricing with fixed-cost projects"
  ];

  const process = [
    { icon: Upload, title: "Discover", description: "Understand your requirements" },
    { icon: Edit, title: "Develop", description: "Build your custom solution" },
    { icon: Eye, title: "Test", description: "Quality assurance and testing" },
    { icon: Download, title: "Deploy", description: "Launch and ongoing support" }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CTO",
      company: "FinTech Innovations",
      rating: 5,
      text: "The team delivered a complex financial platform on time and under budget. Their technical expertise and communication were outstanding."
    },
    {
      name: "Maria Rodriguez",
      role: "Operations Director",
      company: "LogiFlow Systems",
      rating: 5,
      text: "Custom software solution transformed our operations. 300% improvement in efficiency and seamless integration with existing systems."
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      company: "NextGen Health",
      rating: 5,
      text: "From MVP to full platform in 6 months. Excellent development team that truly understood our vision and market needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364748B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-slate-300">4.9/5 from 800+ development projects</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Software & API Integration Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                  Custom software solutions that scale with your business. From web applications to mobile apps and API integrations, we build technology that drives growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                    Get Free Consultation
                  </button>
                  <button className="border border-slate-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                    View Case Studies
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Agile development methodology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Full-stack development expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">24/7 support and maintenance</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Code className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                      <p className="text-slate-700 font-semibold">Development Portfolio</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive software development services using cutting-edge technologies and best practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We work with modern technologies to build scalable, secure, and maintainable solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { category: "Frontend", techs: ["React", "Vue.js", "Angular", "TypeScript"] },
                { category: "Backend", techs: ["Node.js", "Python", ".NET", "Java"] },
                { category: "Mobile", techs: ["React Native", "Flutter", "iOS", "Android"] },
                { category: "Cloud", techs: ["AWS", "Azure", "Google Cloud", "Docker"] }
              ].map((stack, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.techs.map((tech, techIndex) => (
                      <li key={techIndex} className="text-gray-600">{tech}</li>
                    ))}
                  </ul>
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
                Delivering enterprise-grade software solutions with startup agility and innovation
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our proven development methodology ensures successful project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
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
                Trusted by startups and enterprises for mission-critical software development
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
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 font-semibold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
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
        <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your project requirements and build software that scales with your business. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Start a Project
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors">
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

export default SoftwareDevelopment;

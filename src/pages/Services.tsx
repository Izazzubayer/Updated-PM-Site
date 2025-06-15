
import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Zap, Palette, FileText, Monitor, Edit3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Craft distinctive visual identities that make your brand unforgettable in the digital landscape.",
      features: ["Logo Design", "Brand Guidelines", "Design System", "Color Palette"],
      price: "Starting at $299",
      gradient: "from-pink-500 to-rose-500",
      href: "/services/brand-identity"
    },
    {
      icon: FileText,
      title: "Print & Collateral",
      description: "Professional print materials that extend your brand presence into the physical world.",
      features: ["Business Card Design", "Social Media Kits", "Print Templates", "Marketing Materials"],
      price: "Starting at $199",
      gradient: "from-purple-500 to-indigo-500",
      href: "/services/print-collateral"
    },
    {
      icon: Monitor,
      title: "Digital UI/UX",
      description: "Create stunning user experiences that convert visitors into loyal customers.",
      features: ["UI Wireframes", "Prototypes", "WooCommerce Development", "Custom Websites"],
      price: "Starting at $499",
      gradient: "from-blue-500 to-cyan-500",
      href: "/services/ui-ux-design"
    },
    {
      icon: Edit3,
      title: "Content & Strategy",
      description: "Strategic content that speaks to your audience and drives meaningful engagement.",
      features: ["Website Content", "SEO Copywriting", "Content Strategy", "Messaging"],
      price: "Starting at $149",
      gradient: "from-green-500 to-emerald-500",
      href: "/services/content-strategy"
    }
  ];

  const whyPixelMango = [
    { icon: Star, title: "Premium Design", description: "Every pixel crafted to perfection" },
    { icon: Zap, title: "Fast Delivery", description: "Quick turnaround without compromising quality" },
    { icon: Users, title: "Full Stack Capabilities", description: "Complete solutions from design to development" },
    { icon: Clock, title: "Global Support", description: "24/7 support across all time zones" }
  ];

  return (
    <div className="min-h-screen bg-white pixel-grid-light">
      <Header />
      
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="py-20 bg-black text-white pixel-grid relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFA500' fill-opacity='0.3'%3E%3Crect x='18' y='18' width='4' height='4'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-pixel text-mango-500 mb-6 pixel-text animate-pixel-float">
                Our Services. Built Pixel-Perfect.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono leading-relaxed">
                From crafting bold brands to delivering seamless digital experiences — every pixel matters.
              </p>
              
              <button className="pixel-button px-8 py-4 font-pixel text-lg hover:animate-pixel-shift">
                EXPLORE SERVICES
              </button>
              
              {/* Animated pixel elements */}
              <div className="mt-12 flex justify-center space-x-4">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 bg-mango-500 animate-pixel-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Services Overview</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
                Comprehensive digital solutions designed with pixel-perfect precision
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group pixel-card bg-white p-8 hover:animate-pixel-shift transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 pixel-border group-hover:animate-pixel-glow`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-pixel text-black mb-4 pixel-text">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-mono">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-mango-500"></div>
                          <span className="text-gray-600 text-sm font-mono">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-pixel text-mango-500">{service.price}</span>
                      <a 
                        href={service.href}
                        className="group/btn flex items-center space-x-2 text-black font-mono hover:text-mango-500 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Pixel Mango Section */}
        <section className="py-20 bg-gray-50 pixel-grid-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Why Pixel Mango?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
                We deliver exceptional results through our pixel-perfect approach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyPixelMango.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-mango-500 mx-auto mb-6 pixel-border flex items-center justify-center group-hover:animate-pixel-glow">
                    <item.icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-lg font-pixel text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-mono text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-20 bg-black text-white pixel-grid relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-mango-500/20 to-transparent animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-pixel text-mango-500 mb-6 pixel-text">
              Let's Turn Your Brand Into Pixels That Sell.
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
              Ready to transform your business with pixel-perfect design? Let's create something amazing together.
            </p>
            
            <button className="pixel-button px-8 py-4 font-pixel text-lg hover:animate-pixel-shift">
              GET STARTED
            </button>
            
            {/* Animated pixel wave */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-8 bg-mango-500 animate-pulse"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      height: `${Math.random() * 40 + 20}px`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

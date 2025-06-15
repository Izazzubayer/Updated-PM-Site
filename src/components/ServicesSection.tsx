
import React from 'react';
import { Palette, Share2, Monitor, Code, PenTool, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Palette,
      title: "Brand Identity & Logo Design",
      description: "Complete brand identity systems with logos, guidelines, and business cards that make your brand unforgettable.",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Brand Assets Kit"],
      link: "/services/brand-identity"
    },
    {
      icon: Share2,
      title: "Social Media Design & Branding",
      description: "Consistent social media presence with custom templates, covers, and branding kits for all platforms.",
      features: ["Profile Design", "Templates", "Platform Optimization", "Visual Strategy"],
      link: "/services/social-media-branding"
    },
    {
      icon: Monitor,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions with wireframes, prototypes, and responsive interfaces that convert.",
      features: ["Wireframing", "UI Design", "Prototypes", "User Flow Design"],
      link: "/services/ui-ux-design"
    },
    {
      icon: Code,
      title: "Website Development & E-Commerce",
      description: "Custom websites and e-commerce solutions built with modern technologies and optimized for performance.",
      features: ["WooCommerce", "CMS Setup", "SEO Foundation", "Mobile Optimization"],
      link: "/services/website-development"
    },
    {
      icon: PenTool,
      title: "Website Content Writing & Copywriting",
      description: "Compelling copy and content that tells your story, engages your audience, and drives conversions.",
      features: ["Website Copy", "SEO Content", "Product Descriptions", "Content Strategy"],
      link: "/services/content-creation"
    },
    {
      icon: Users,
      title: "Brand Strategy & Creative Consultation",
      description: "Strategic guidance to position your brand effectively and maximize your creative investments.",
      features: ["Brand Positioning", "Market Analysis", "Strategy Sessions", "Monthly Consultation"],
      link: "/services/consultation-strategy"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 pixel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Our Creative Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
            Pixel-perfect solutions for every aspect of your brand
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="pixel-card p-8 bg-white hover:animate-pixel-glow transition-all duration-300"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-xl font-pixel text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-mono text-sm">{service.description}</p>
              
              <div className="mb-6">
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-mango-500"></div>
                      <span className="text-xs text-gray-600 font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                to={service.link}
                className="group flex items-center space-x-2 text-black font-pixel text-sm hover:text-mango-500 transition-all duration-300"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

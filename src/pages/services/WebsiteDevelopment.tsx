import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Code, Globe, Smartphone, Zap, Shield, Search, Database, Clock, Users, Layers, Palette, Cpu, MonitorSpeaker } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const WebsiteDevelopment = () => {
  const technologies = [
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "Next.js", icon: Zap, color: "text-gray-800" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "Node.js", icon: Database, color: "text-green-500" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "WordPress", icon: Globe, color: "text-blue-400" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Planning & Strategy",
      description: "Define project requirements, target audience, and technical architecture for optimal performance.",
      icon: Users
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes that align with your brand identity.",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build responsive, fast-loading websites with clean code and comprehensive testing.",
      icon: Code
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Deploy your website, optimize for search engines, and provide ongoing support.",
      icon: Zap
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Online Store",
      description: "Full-featured e-commerce website with payment integration and inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      results: "300% increase in online sales",
      technologies: ["React", "Node.js", "Stripe"]
    },
    {
      title: "Corporate Website",
      category: "Business",
      description: "Professional corporate website with CMS and lead generation features",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      results: "150% boost in lead generation",
      technologies: ["WordPress", "PHP", "MySQL"]
    },
    {
      title: "SaaS Landing Page",
      category: "Software",
      description: "High-converting landing page for software-as-a-service product",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      results: "85% conversion rate improvement",
      technologies: ["Next.js", "TypeScript", "Tailwind"]
    }
  ];

  const packageFeatures = {
    starter: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Google Analytics setup",
      "1 month free support",
      "2 rounds of revisions",
      "SSL certificate included"
    ],
    professional: [
      "Up to 15 pages",
      "Advanced responsive design",
      "Complete SEO optimization",
      "CMS integration",
      "E-commerce functionality",
      "Custom animations",
      "3 months free support",
      "4 rounds of revisions",
      "Performance optimization",
      "Social media integration"
    ],
    enterprise: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced SEO & analytics",
      "Multi-language support",
      "Custom CMS solution",
      "API integrations",
      "6 months free support",
      "Unlimited revisions",
      "Load balancing setup",
      "Security auditing",
      "Priority support",
      "Team training included"
    ]
  };

  const testimonials = [
    {
      name: "Fameta Baraka",
      business: "Founder @ Aizaan",
      rating: 5,
      text: "Pixel Mango transformed my Hijab/Abaya shop's entire identity. The branding is perfect - it captures exactly what I wanted to convey to my customers.",
      avatar: "FB"
    },
    {
      name: "Takiyona Muteshi",
      business: "Santoku Knife Shop",
      rating: 5,
      text: "The work Izaz has done for Santoku is splendid. He provided me details as to how to make my brand work better and he knows his craft",
      avatar: "TM"
    }
  ];

  const websiteTypes = [
    { name: "Business Websites", icon: Globe, color: "text-blue-500" },
    { name: "E-commerce Stores", icon: Smartphone, color: "text-green-500" },
    { name: "Landing Pages", icon: MonitorSpeaker, color: "text-purple-500" }
  ];

  const developmentServices = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Tailored websites built from scratch to meet your specific business requirements."
    },
    {
      icon: Smartphone,
      title: "E-commerce Development",
      description: "Powerful online stores with secure payment processing and inventory management."
    },
    {
      icon: Code,
      title: "CMS Development",
      description: "Content management systems that make it easy to update and maintain your website."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization to improve your website's visibility and rankings."
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Robust security measures and performance optimization for fast, secure websites."
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Seamless integration with third-party services and custom API development."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Website Development Services - Custom Web & E-commerce Solutions"
        description="Professional website development combining stunning design with robust functionality. Custom websites, e-commerce platforms, and web applications built with React, Next.js, and modern technologies."
        keywords="website development, web development services, e-commerce development, custom website design, React development, Next.js developer, WordPress development, responsive web design"
        url="/services/website-development"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Website Development', url: '/services/website-development' }
        ]}
        service={{
          name: "Website Development",
          description: "Custom website development services including business websites, e-commerce platforms, landing pages, and web applications with SEO optimization and responsive design."
        }}
        faqs={[
          {
            question: "What technologies do you use for web development?",
            answer: "We use modern technologies including React, Next.js, TypeScript, Node.js, and WordPress/WooCommerce depending on project requirements."
          },
          {
            question: "Do you provide website hosting?",
            answer: "We can recommend and help set up hosting solutions, though hosting costs are separate from development fees."
          },
          {
            question: "Is SEO included in website development?",
            answer: "Yes, all our websites are built with SEO best practices including proper meta tags, structured data, fast loading times, and mobile responsiveness."
          },
          {
            question: "How long does website development take?",
            answer: "Timeline varies by complexity: simple business sites take 3-4 weeks, while complex e-commerce or custom web applications take 6-12 weeks."
          }
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-mango-50 to-white pixel-grid-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-mango-500 text-black px-4 py-2 font-pixel text-sm mb-6">
                <Code className="w-4 h-4" />
                <span>WEBSITE DEVELOPMENT</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-pixel text-black mb-6 leading-tight">
                Build <span className="text-mango-500">Powerful</span> Websites That Convert
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-mono leading-relaxed">
                Professional website development services that combine stunning design with robust functionality. From business websites to complex e-commerce platforms, we create digital solutions that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="pixel-button px-8 py-4 font-pixel text-lg hover:animate-pixel-shift">
                  START YOUR PROJECT
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="pixel-card bg-white p-8 animate-pixel-float">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
                  alt="Website Development"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Types of Websites We Build</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              From simple business sites to complex web applications, we develop solutions for every need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-20 h-20 bg-mango-500 border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <type.icon className={`w-10 h-10 ${type.color}`} />
                </div>
                <h3 className="text-xl font-pixel text-black mb-3">{type.name}</h3>
                <p className="text-gray-600 font-mono text-sm">
                  Professional {type.name.toLowerCase()} designed to engage your audience and drive conversions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Cutting-edge technologies and frameworks to build fast, secure, and scalable websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4 mx-auto">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <h3 className="text-lg font-pixel text-black">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Comprehensive web development solutions to bring your digital vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-pixel text-black mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 font-mono leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 pixel-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              A structured approach that ensures your website is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="pixel-card bg-white p-8">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-3xl font-pixel text-mango-500">{step.step}</div>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-pixel text-black mb-3">{step.title}</h3>
                    <p className="text-gray-600 font-mono leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Recent Development Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Explore our portfolio of successful website development projects across various industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="pixel-card bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block bg-mango-500 text-black px-3 py-1 font-pixel text-xs mb-3">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-pixel text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-mono mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-mango-500 font-pixel text-sm">{item.results}</span>
                    <ArrowRight className="w-5 h-5 text-mango-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Website Development Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Choose the perfect development package for your business needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="pixel-card bg-white p-8">
              <h3 className="text-2xl font-pixel text-black mb-2">Starter</h3>
              <ul className="space-y-3 mb-8">
                {packageFeatures.starter.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mango-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Package */}
            <div className="pixel-card bg-white p-8 relative border-mango-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mango-500 text-black px-4 py-2 font-pixel text-sm">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-pixel text-black mb-2">Professional</h3>
              <ul className="space-y-3 mb-8">
                {packageFeatures.professional.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mango-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Package */}
            <div className="pixel-card bg-white p-8">
              <h3 className="text-2xl font-pixel text-black mb-2">Enterprise</h3>
              <ul className="space-y-3 mb-8">
                {packageFeatures.enterprise.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mango-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 font-mono">
              Success stories from businesses who transformed their online presence with our development services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pixel-speech bg-white p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-mango-500 border-2 border-black flex items-center justify-center mr-4">
                    <span className="font-pixel text-black text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-pixel text-black text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-600 font-mono">{testimonial.business}</p>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-mango-500 text-mango-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 font-mono text-sm leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mango-500 pixel-grid-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-pixel text-black mb-6">Ready to Build Your Dream Website?</h2>
          <p className="text-xl text-black font-mono mb-8 opacity-90">
            Let's create a powerful, fast, and beautiful website that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="pixel-button bg-black text-mango-500 border-black px-8 py-4 font-pixel text-lg hover:bg-white hover:text-black">
              START YOUR PROJECT
            </Link>
            <Button variant="outline" className="px-8 py-4 font-pixel border-2 border-black bg-transparent text-black hover:bg-black hover:text-mango-500">
              SCHEDULE A CALL
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;


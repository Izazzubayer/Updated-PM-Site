import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Palette, Target, Users, Zap, Clock, Shield } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const BrandIdentityDesign = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into your business, target audience, and competitive landscape to understand your unique positioning.",
      icon: Target,
      duration: "2-3 days"
    },
    {
      step: "02", 
      title: "Brand Strategy",
      description: "Define your brand personality, values, and messaging that will resonate with your target audience.",
      icon: Users,
      duration: "3-5 days"
    },
    {
      step: "03",
      title: "Visual Identity Creation",
      description: "Design your logo, color palette, typography, and visual elements that bring your brand to life.",
      icon: Palette,
      duration: "7-10 days"
    },
    {
      step: "04",
      title: "Brand Guidelines",
      description: "Create comprehensive brand guidelines to ensure consistent application across all touchpoints.",
      icon: Shield,
      duration: "2-3 days"
    }
  ];

  const portfolioItems = [
    {
      title: "Aizaan Store",
      category: "Hijab & Abaya Online Clothing",
      description: "Complete rebrand for a B2C retail brand",
      image: "/src/custom-assets/BID1.png",
      results: "300% increase in brand recognition (no cap)"
    }
    // {
    //   title: "Green Leaf Cafe",
    //   category: "Food & Beverage", 
    //   description: "Organic coffee shop brand identity",
    //   image: "/placeholder.svg",
    //   results: "150% increase in foot traffic"
    // },
    // {
    //   title: "Urban Fitness",
    //   category: "Health & Wellness",
    //   description: "Modern fitness studio branding",
    //   image: "/placeholder.svg",
    //   results: "200% membership growth"
    // }
  ];

  const packageFeatures = {
    essential: [
      "Logo design (3 concepts)",
      "Color palette",
      "Typography selection",
      "Basic brand guidelines",
      "2 rounds of revisions",
      "Final files (PNG, JPG, PDF)"
    ],
    professional: [
      "Logo design (5 concepts)",
      "Complete color system",
      "Typography hierarchy",
      "Business card design",
      "Letterhead design",
      "Comprehensive brand guidelines",
      "4 rounds of revisions",
      "All file formats (AI, EPS, PNG, JPG, PDF, SVG)"
    ],
    premium: [
      "Logo design (unlimited concepts)",
      "Complete visual identity system",
      "Brand messaging & strategy",
      "Business stationery suite",
      "Social media templates",
      "Website style guide",
      "Brand application mockups",
      "Comprehensive brand manual",
      "Unlimited revisions",
      "All source files + usage rights",
      "6 months of brand support"
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-mango-50 to-white pixel-grid-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-mango-500 text-black px-4 py-2 font-pixel text-sm mb-6">
                <Palette className="w-4 h-4" />
                <span>BRAND IDENTITY DESIGN</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-pixel text-black mb-6 leading-tight">
                Create a Brand That <span className="text-mango-500">Stands Out</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-mono leading-relaxed">
                Transform your business with a powerful brand identity that captures attention, builds trust, and drives growth. From logo design to complete visual systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="pixel-button px-8 py-4 font-pixel text-lg hover:animate-pixel-shift">
                  START YOUR PROJECT
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="pixel-card animate-pixel-float">
                <img 
                  src="/src/custom-assets/BID1.png" 
                  alt="Brand Identity Design Examples"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">What's Included in Brand Identity Design</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Everything you need to establish a strong, consistent brand presence across all touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Logo Design", desc: "Unique, memorable logo that represents your brand values" },
              { icon: Target, title: "Color Palette", desc: "Carefully chosen colors that evoke the right emotions" },
              { icon: Zap, title: "Typography", desc: "Font combinations that enhance your brand personality" },
              { icon: Shield, title: "Brand Guidelines", desc: "Comprehensive guide for consistent brand application" },
              { icon: Users, title: "Business Cards", desc: "Professional business card design and layout" },
              { icon: Clock, title: "Brand Strategy", desc: "Strategic foundation for all your brand decisions" }
            ].map((item, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-pixel text-black mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 font-mono leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              A proven methodology that ensures your brand identity is strategic, distinctive, and effective.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="pixel-card bg-white p-8">
                <div className="grid lg:grid-cols-4 gap-6 items-center">
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
                  <div className="lg:col-span-1 text-right">
                    <div className="inline-flex items-center space-x-2 bg-black text-mango-500 px-4 py-2 font-pixel text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
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
            <h2 className="text-4xl font-pixel text-black mb-4">Recent Brand Identity Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              See how we've helped businesses transform their brand presence and achieve remarkable results.
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
      <section className="py-20 bg-gray-50 pixel-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Brand Identity Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Choose the perfect package for your business needs and budget.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Essential Package */}
            <div className="pixel-card bg-white p-8">
              <h3 className="text-2xl font-pixel text-black mb-2">Essential</h3>
              {/* Price hidden */}
              <ul className="space-y-3 mb-8">
                {packageFeatures.essential.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mango-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/" onClick={e => { e.preventDefault(); document.getElementById('quick-intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="w-full pixel-button font-pixel block text-center cursor-pointer">GET STARTED</a>
            </div>

            {/* Professional Package */}
            <div className="pixel-card bg-white p-8 relative border-mango-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mango-500 text-black px-4 py-2 font-pixel text-sm">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-pixel text-black mb-2">Professional</h3>
              {/* <div className="text-4xl font-pixel text-mango-500 mb-6">$1,899</div> */}
              <ul className="space-y-3 mb-8">
                {packageFeatures.professional.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mango-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/" onClick={e => { e.preventDefault(); document.getElementById('quick-intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="w-full pixel-button font-pixel block text-center cursor-pointer">GET STARTED</a>
            </div>

            {/* Premium Package */}
            <div className="pixel-card bg-white p-8">
              <h3 className="text-2xl font-pixel text-black mb-2">Premium</h3>
              {/* <div className="text-4xl font-pixel text-mango-500 mb-6">$3,499</div> */}
              <ul className="space-y-3 mb-8">
                {packageFeatures.premium.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-mango-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 font-mono text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/" onClick={e => { e.preventDefault(); document.getElementById('quick-intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="w-full pixel-button font-pixel block text-center cursor-pointer">GET STARTED</a>
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
              Real results from real businesses who transformed their brand identity with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pixel-speech bg-white p-6 hover:animate-pixel-glow transition-all duration-300">
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
          <h2 className="text-4xl font-pixel text-black mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-xl text-black font-mono mb-8 opacity-90">
            Let's create a brand identity that sets you apart from the competition and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="pixel-button bg-black text-mango-500 border-black px-8 py-4 font-pixel text-lg hover:bg-white hover:text-black">
              START YOUR PROJECT
            </Link>
            {/* <Button variant="outline" className="px-8 py-4 font-pixel border-2 border-black bg-transparent text-black hover:bg-black hover:text-mango-500">
              SCHEDULE A CALL
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandIdentityDesign;

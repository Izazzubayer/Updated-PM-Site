import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Smartphone, Target, Users, Zap, Clock, Shield, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const SocialMediaBranding = () => {
  const processSteps = [
    {
      step: "01",
      title: "Brand Audit & Strategy",
      description: "Analyze your current social presence and develop a comprehensive strategy aligned with your brand goals.",
      icon: Target,
      duration: "3-5 days"
    },
    {
      step: "02",
      title: "Visual Identity System",
      description: "Create cohesive visual templates, color schemes, and brand elements for all social platforms.",
      icon: Smartphone,
      duration: "5-7 days"
    },
    {
      step: "03",
      title: "Content Templates",
      description: "Design versatile post templates, story formats, and branded graphics for consistent posting.",
      icon: Zap,
      duration: "7-10 days"
    },
    {
      step: "04",
      title: "Brand Guidelines",
      description: "Comprehensive social media brand guide with usage rules and content creation guidelines.",
      icon: Shield,
      duration: "2-3 days"
    }
  ];

  const portfolioItems = [
    {
      title: "FitLife Wellness",
      category: "Health & Fitness",
      description: "Complete social media rebrand for fitness studio",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      platforms: ["Instagram", "Facebook", "TikTok"],
      results: "400% increase in engagement"
    },
    {
      title: "Artisan Coffee Co.",
      category: "Food & Beverage",
      description: "Instagram-focused branding for local coffee roaster",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
      platforms: ["Instagram", "Facebook"],
      results: "250% follower growth"
    },
    {
      title: "TechStart Hub",
      category: "Technology",
      description: "Professional LinkedIn and Twitter presence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      platforms: ["LinkedIn", "Twitter", "YouTube"],
      results: "300% lead generation"
    }
  ];

  const packageFeatures = {
    starter: [
      "Brand audit & strategy",
      "Visual identity for 2 platforms",
      "10 post templates",
      "Profile optimization",
      "Basic brand guidelines",
      "2 rounds of revisions",
      "Template files (PNG, JPG)"
    ],
    professional: [
      "Comprehensive brand strategy",
      "Visual identity for 4 platforms",
      "25 post templates",
      "Story templates (10 designs)",
      "Profile & cover designs",
      "Content calendar template",
      "Detailed brand guidelines",
      "4 rounds of revisions",
      "All source files included"
    ],
    enterprise: [
      "Full social media brand audit",
      "Custom identity for all platforms",
      "50+ post templates",
      "Story & highlight templates",
      "Video intro templates",
      "Branded hashtag strategy",
      "Team training session",
      "Complete brand manual",
      "Unlimited revisions",
      "6 months of support",
      "Monthly strategy calls"
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

  const socialPlatforms = [
    { name: "Instagram", icon: Instagram, color: "text-pink-500" },
    { name: "Facebook", icon: Facebook, color: "text-blue-600" },
    { name: "Twitter", icon: Twitter, color: "text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
    { name: "YouTube", icon: Youtube, color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Social Media Branding Services - Instagram, Facebook & More"
        description="Create consistent, engaging social media branding that builds trust, increases followers, and drives real business results across Instagram, Facebook, LinkedIn, and all major platforms."
        keywords="social media branding, Instagram branding, Facebook marketing, social media templates, content creation, social media strategy, brand consistency, social media design services"
        url="/services/social-media"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Social Media Branding', url: '/services/social-media' }
        ]}
        service={{
          name: "Social Media Branding",
          description: "Complete social media branding services including profile design, post templates, story templates, and comprehensive brand guidelines for all platforms."
        }}
        faqs={[
          {
            question: "Which social media platforms do you design for?",
            answer: "We design for all major platforms including Instagram, Facebook, Twitter, LinkedIn, YouTube, TikTok, and Pinterest."
          },
          {
            question: "What's included in social media branding?",
            answer: "Our packages include profile optimization, cover designs, post templates, story templates, highlight covers, and a content calendar template."
          },
          {
            question: "Can I edit the templates myself?",
            answer: "Yes, all templates are delivered in editable formats like Canva, Figma, or Adobe files so you can easily create new content."
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
                <Smartphone className="w-4 h-4" />
                <span>SOCIAL MEDIA BRANDING</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-pixel text-black mb-6 leading-tight">
                Build a <span className="text-mango-500">Social Presence</span> That Converts
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-mono leading-relaxed">
                Create consistent, engaging social media branding that builds trust, increases followers, and drives real business results across all platforms.
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
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&h=400&fit=crop"
                  alt="Social Media Branding Examples"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">We Design for All Major Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Consistent branding across every social media platform your audience uses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4 mx-auto">
                  <platform.icon className={`w-8 h-8 ${platform.color}`} />
                </div>
                <h3 className="text-lg font-pixel text-black">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">What's Included in Social Media Branding</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Everything you need to maintain a consistent, professional social media presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Brand Strategy", desc: "Comprehensive social media strategy aligned with your goals" },
              { icon: Smartphone, title: "Post Templates", desc: "Ready-to-use templates for consistent posting" },
              { icon: Users, title: "Profile Design", desc: "Optimized profile and cover designs for all platforms" },
              { icon: Zap, title: "Story Templates", desc: "Engaging story formats and highlight covers" },
              { icon: Shield, title: "Brand Guidelines", desc: "Complete guide for maintaining brand consistency" },
              { icon: Clock, title: "Content Calendar", desc: "Strategic content planning and scheduling templates" }
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our Social Media Branding Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              A strategic approach that ensures your social media presence drives real results.
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
      <section className="py-20 bg-gray-50 pixel-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Recent Social Media Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              See how we've helped businesses transform their social media presence and grow their following.
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
                    {item.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-mono">
                        {platform}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Social Media Branding Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Choose the perfect package to elevate your social media presence.
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
              <a href="/" onClick={e => { e.preventDefault(); document.getElementById('quick-intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="w-full pixel-button font-pixel block text-center cursor-pointer">GET STARTED</a>
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
              <a href="/" onClick={e => { e.preventDefault(); document.getElementById('quick-intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="w-full pixel-button font-pixel block text-center cursor-pointer">GET STARTED</a>
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
              <a href="/" onClick={e => { e.preventDefault(); document.getElementById('quick-intake-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} className="w-full pixel-button font-pixel block text-center cursor-pointer">GET STARTED</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 font-mono">
              Real results from businesses who transformed their social media presence with us.
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
          <h2 className="text-4xl font-pixel text-black mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl text-black font-mono mb-8 opacity-90">
            Let's create a social media brand that builds community, drives engagement, and grows your business.
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

export default SocialMediaBranding;

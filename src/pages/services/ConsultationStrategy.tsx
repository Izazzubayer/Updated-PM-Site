import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Target, TrendingUp, Lightbulb, BarChart3, PieChart, Calendar, Clock, MessageSquare, FileText, Zap, Shield, Search, Brain, Compass, Award } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const ConsultationStrategy = () => {
  const serviceAreas = [
    { name: "Business Strategy", icon: Target, color: "text-blue-500" },
    { name: "Digital Transformation", icon: Zap, color: "text-purple-500" },
    { name: "Market Analysis", icon: BarChart3, color: "text-green-500" },
    { name: "Brand Positioning", icon: Compass, color: "text-orange-500" },
    { name: "Growth Planning", icon: TrendingUp, color: "text-red-500" },
    { name: "Competitive Intelligence", icon: Search, color: "text-indigo-500" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your business, analyzing current state, challenges, and opportunities through comprehensive audits.",
      icon: Search
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Develop customized strategies based on market research, competitive analysis, and your business objectives.",
      icon: Brain
    },
    {
      step: "03",
      title: "Roadmap Creation",
      description: "Create detailed implementation roadmaps with timelines, milestones, and resource allocation plans.",
      icon: FileText
    },
    {
      step: "04",
      title: "Implementation Support",
      description: "Provide ongoing guidance and support during strategy execution with regular check-ins and adjustments.",
      icon: Users
    }
  ];

  const portfolioItems = [
    {
      title: "Tech Startup Growth",
      category: "Digital Strategy",
      description: "Comprehensive growth strategy for a SaaS startup, including market positioning and scaling plan",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      results: "400% revenue growth in 18 months",
      deliverables: ["Market Analysis", "Growth Roadmap", "Pricing Strategy"]
    },
    {
      title: "Retail Brand Transformation",
      category: "Brand Strategy",
      description: "Complete brand repositioning and digital transformation for traditional retail company",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      results: "250% increase in online sales",
      deliverables: ["Brand Guidelines", "Digital Strategy", "Implementation Plan"]
    },
    {
      title: "Market Entry Strategy",
      category: "Business Strategy",
      description: "Strategic planning for international market expansion of manufacturing company",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      results: "Successful entry into 3 new markets",
      deliverables: ["Market Research", "Entry Strategy", "Risk Assessment"]
    }
  ];

  const packageFeatures = {
    essential: [
      "Business audit & assessment",
      "Market analysis report",
      "Strategic recommendations",
      "30-day action plan",
      "2 strategy sessions",
      "Email support",
      "Basic competitor analysis",
      "Performance metrics setup"
    ],
    professional: [
      "Comprehensive business analysis",
      "Detailed market research",
      "Custom strategy development",
      "90-day implementation roadmap",
      "6 strategy sessions",
      "Priority phone/email support",
      "Advanced competitor intelligence",
      "ROI tracking & analytics",
      "Brand positioning strategy",
      "Digital transformation plan"
    ],
    enterprise: [
      "Full organizational assessment",
      "Multi-market research",
      "Enterprise strategy framework",
      "12-month strategic roadmap",
      "Unlimited consultations",
      "Dedicated strategy manager",
      "Competitive intelligence dashboard",
      "Advanced analytics & reporting",
      "Change management support",
      "Team training & workshops",
      "Quarterly strategy reviews",
      "C-level executive briefings"
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

  const consultationTypes = [
    { name: "Strategic Planning", icon: Target, color: "text-blue-500" },
    { name: "Market Research", icon: PieChart, color: "text-green-500" },
    { name: "Business Analysis", icon: BarChart3, color: "text-purple-500" }
  ];

  const strategyServices = [
    {
      icon: Target,
      title: "Business Strategy Development",
      description: "Comprehensive strategic planning to align your business objectives with market opportunities."
    },
    {
      icon: BarChart3,
      title: "Market Research & Analysis",
      description: "In-depth market research and competitive analysis to inform strategic decisions."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy Planning",
      description: "Scalable growth strategies designed to accelerate your business expansion."
    },
    {
      icon: Compass,
      title: "Brand Positioning Strategy",
      description: "Strategic brand positioning to differentiate your business in competitive markets."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Technology adoption strategies to modernize operations and improve efficiency."
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Structured approach to managing organizational change and transformation initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Brand Strategy & Creative Consultation Services"
        description="Expert strategic consulting to help your business navigate challenges, identify opportunities, and achieve sustainable growth. Brand positioning, market analysis, and digital transformation guidance."
        keywords="brand strategy consulting, creative consultation, business strategy, digital transformation, market analysis, growth planning, brand positioning, strategic consulting services"
        url="/services/consultation-strategy"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Consultation & Strategy', url: '/services/consultation-strategy' }
        ]}
        service={{
          name: "Brand Strategy & Consultation",
          description: "Strategic consulting services including brand positioning, market analysis, competitive intelligence, and digital transformation guidance for business growth."
        }}
        faqs={[
          {
            question: "What does a strategy consultation include?",
            answer: "Our consultations include business analysis, market research, competitive analysis, strategic recommendations, and actionable implementation roadmaps."
          },
          {
            question: "How are consultation sessions conducted?",
            answer: "Sessions can be conducted via video call (Zoom/Google Meet) or in-person for local clients. We provide detailed reports and action plans after each session."
          },
          {
            question: "Is ongoing support available after the consultation?",
            answer: "Yes, our Professional and Enterprise packages include ongoing support with email access, priority support, and regular strategy review calls."
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
                <Brain className="w-4 h-4" />
                <span>CONSULTATION & STRATEGY</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-pixel text-black mb-6 leading-tight">
                Strategic <span className="text-mango-500">Consulting</span> That Drives Growth
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-mono leading-relaxed">
                Expert strategic consulting services to help your business navigate challenges, identify opportunities, and achieve sustainable growth. From market analysis to digital transformation, we provide the insights you need to succeed.
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
                  alt="Strategic Consultation"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Types of Consultation We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Specialized consulting services tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTypes.map((type, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-20 h-20 bg-mango-500 border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <type.icon className={`w-10 h-10 ${type.color}`} />
                </div>
                <h3 className="text-xl font-pixel text-black mb-3">{type.name}</h3>
                <p className="text-gray-600 font-mono text-sm">
                  Expert {type.name.toLowerCase()} services to drive your business forward.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Comprehensive consulting services across key business domains to maximize your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4 mx-auto">
                  <area.icon className={`w-8 h-8 ${area.color}`} />
                </div>
                <h3 className="text-lg font-pixel text-black">{area.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Strategic consulting solutions designed to address your unique business challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategyServices.map((service, index) => (
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
            <h2 className="text-4xl font-pixel text-black mb-4">Our Consulting Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              A proven methodology that ensures strategic recommendations are actionable, measurable, and aligned with your goals.
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
            <h2 className="text-4xl font-pixel text-black mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Real results from our strategic consulting engagements across various industries.
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
                    {item.deliverables.map((deliverable, deliverableIndex) => (
                      <span key={deliverableIndex} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-mono">
                        {deliverable}
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
            <h2 className="text-4xl font-pixel text-black mb-4">Consulting Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Flexible consulting packages designed to meet businesses of all sizes and strategic needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Essential Package */}
            <div className="pixel-card bg-white p-8">
              <h3 className="text-2xl font-pixel text-black mb-2">Essential</h3>
              <ul className="space-y-3 mb-8">
                {packageFeatures.essential.map((feature, index) => (
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
            <h2 className="text-4xl font-pixel text-black mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 font-mono">
              Hear from business leaders who transformed their organizations with our strategic guidance.
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
          <h2 className="text-4xl font-pixel text-black mb-6">Ready to Transform Your Business Strategy?</h2>
          <p className="text-xl text-black font-mono mb-8 opacity-90">
            Let's work together to unlock your business potential and create a roadmap for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="pixel-button bg-black text-mango-500 border-black px-8 py-4 font-pixel text-lg hover:bg-white hover:text-black">
              BOOK CONSULTATION
            </Link>
            <Button variant="outline" className="px-8 py-4 font-pixel border-2 border-black bg-transparent text-black hover:bg-black hover:text-mango-500">
              DOWNLOAD CASE STUDY
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultationStrategy;

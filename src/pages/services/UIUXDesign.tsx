import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Monitor, Smartphone, Tablet, Users, Eye, Brain, Zap, Clock, Shield, Layers, Palette, MousePointer } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '../../components/ui/button';

const UIUXDesign = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "Deep dive into your business goals, user needs, and market analysis to create a solid foundation for design decisions.",
      icon: Brain
    },
    {
      step: "02",
      title: "User Experience Strategy",
      description: "Develop user personas, journey maps, and information architecture to optimize the user experience.",
      icon: Users
    },
    {
      step: "03",
      title: "Wireframing & Prototyping",
      description: "Create low and high-fidelity wireframes and interactive prototypes to validate design concepts.",
      icon: Layers
    },
    {
      step: "04",
      title: "Visual Design & Testing",
      description: "Apply visual design principles, create the final UI, and conduct usability testing for optimization.",
      icon: Palette
    }
  ];

  const portfolioItems = [
    {
      title: "FinTech Mobile App",
      category: "Financial Technology",
      description: "Complete mobile banking app redesign with focus on user experience",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      results: "40% increase in user engagement",
      platforms: ["iOS", "Android", "Web"]
    },
    {
      title: "E-commerce Platform",
      category: "Retail & Commerce",
      description: "Responsive web application with enhanced shopping experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      results: "65% conversion rate improvement",
      platforms: ["Web", "Mobile", "Tablet"]
    },
    {
      title: "Healthcare Dashboard",
      category: "Healthcare",
      description: "Complex data visualization and patient management system",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      results: "50% reduction in task completion time",
      platforms: ["Web", "Desktop"]
    }
  ];

  const packageFeatures = {
    starter: [
      "UI/UX audit & analysis",
      "User research & personas",
      "Wireframes (5-10 screens)",
      "Mobile-responsive design",
      "Basic prototype",
      "Design system basics",
      "2 rounds of revisions",
      "Design files (Figma/Sketch)"
    ],
    professional: [
      "Comprehensive UX research",
      "User journey mapping",
      "Wireframes (15-25 screens)",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Complete design system",
      "Usability testing",
      "4 rounds of revisions",
      "Developer handoff package"
    ],
    enterprise: [
      "Full UX audit & strategy",
      "Advanced user research",
      "Wireframes (30+ screens)",
      "Custom UI components",
      "Advanced prototypes",
      "Comprehensive design system",
      "A/B testing setup",
      "Accessibility compliance",
      "Unlimited revisions",
      "3 months of support",
      "Team training sessions"
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

  const deviceTypes = [
    { name: "Desktop", icon: Monitor, color: "text-blue-500" },
    { name: "Mobile", icon: Smartphone, color: "text-green-500" },
    { name: "Tablet", icon: Tablet, color: "text-purple-500" }
  ];

  const designServices = [
    {
      icon: Eye,
      title: "User Research",
      description: "In-depth analysis of user behavior, needs, and pain points to inform design decisions."
    },
    {
      icon: Brain,
      title: "UX Strategy",
      description: "Strategic approach to user experience design aligned with business objectives."
    },
    {
      icon: Layers,
      title: "Wireframing",
      description: "Detailed wireframes and user flows to map out the optimal user journey."
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Beautiful, functional interfaces that enhance user experience and brand identity."
    },
    {
      icon: MousePointer,
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design concepts before development."
    },
    {
      icon: Shield,
      title: "Usability Testing",
      description: "Comprehensive testing to ensure optimal user experience and accessibility."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="UI/UX Design Services - User Experience & Interface Design"
        description="Create intuitive, engaging user interfaces and experiences that drive conversions and delight users. Expert UI/UX design for web apps, mobile apps, and digital products."
        keywords="UI/UX design services, user experience design, user interface design, mobile app design, web app design, wireframing, prototyping, Figma design, user research"
        url="/services/ui-ux-design"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'UI/UX Design', url: '/services/ui-ux-design' }
        ]}
        service={{
          name: "UI/UX Design",
          description: "User-centered design solutions including user research, wireframing, prototyping, visual design, and usability testing for web and mobile applications."
        }}
        faqs={[
          {
            question: "What's the difference between UI and UX design?",
            answer: "UX (User Experience) design focuses on the overall feel and usability of a product, while UI (User Interface) design focuses on the visual elements and aesthetics. We provide both for a complete solution."
          },
          {
            question: "What design tools do you use?",
            answer: "We primarily use Figma for design and prototyping, but also work with Sketch, Adobe XD, and other tools based on client preferences."
          },
          {
            question: "Do you conduct user testing?",
            answer: "Yes, our Professional and Enterprise packages include usability testing to validate designs and ensure optimal user experience."
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
                <Monitor className="w-4 h-4" />
                <span>UI/UX DESIGN</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-pixel text-black mb-6 leading-tight">
                Design <span className="text-mango-500">Experiences</span> Users Love
              </h1>
              <p className="text-xl text-gray-600 mb-8 font-mono leading-relaxed">
                Create intuitive, engaging user interfaces and experiences that drive conversions, increase engagement, and deliver exceptional user satisfaction across all devices.
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
                  src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=400&fit=crop"
                  alt="UI/UX Design Examples"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Responsive Design for All Devices</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Creating seamless experiences across desktop, mobile, and tablet platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deviceTypes.map((device, index) => (
              <div key={index} className="pixel-card p-6 bg-white">
                <div className="w-20 h-20 bg-mango-500 border-2 border-black flex items-center justify-center mb-6 mx-auto">
                  <device.icon className={`w-10 h-10 ${device.color}`} />
                </div>
                <h3 className="text-xl font-pixel text-black mb-3">{device.name}</h3>
                <p className="text-gray-600 font-mono text-sm">
                  Optimized user experience tailored for {device.name.toLowerCase()} usage patterns and interactions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our UI/UX Design Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Comprehensive design services to create exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Our UI/UX Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              A user-centered design approach that ensures every interface is intuitive and effective.
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
      <section className="py-20 bg-gray-50 pixel-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">Recent UI/UX Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              See how we've helped businesses create exceptional user experiences and drive measurable results.
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
            <h2 className="text-4xl font-pixel text-black mb-4">UI/UX Design Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
              Choose the perfect package to create exceptional user experiences for your digital products.
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
      <section className="py-20 bg-mango-50 pixel-grid-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-pixel text-black mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 font-mono">
              Real results from businesses who transformed their user experience with our UI/UX design services.
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
          <h2 className="text-4xl font-pixel text-black mb-6">Ready to Transform Your User Experience?</h2>
          <p className="text-xl text-black font-mono mb-8 opacity-90">
            Let's create intuitive, beautiful interfaces that your users will love and that drive real business results.
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

export default UIUXDesign;

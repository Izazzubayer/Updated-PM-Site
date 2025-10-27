import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Play, Zap, Target, Globe, Award, Code, Palette, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TextType from './TextType';

// Tilted Card Component

const TiltedCard = ({ children, className = "", style = {} }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 4;
    const rotateY = (centerX - x) / 4;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className={`relative transition-all duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
          isHovered ? 1.05 : 1
        }, ${isHovered ? 1.05 : 1}, ${isHovered ? 1.05 : 1})`,
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: 'translateZ(50px)',
        }}
      />
      {children}
    </div>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Ultra-fast delivery" },
    { icon: Target, title: "Precision Focused", description: "Pixel-perfect results" },
    { icon: Globe, title: "Global Reach", description: "Worldwide availability" },
    { icon: Award, title: "Award Winning", description: "Industry recognition" }
  ];

  const cardData = [
    {
      logo: "/assets/aizaan-logo.png",
      title: "Aizaan",
      type: "Web & Rebranding",
      description: "Modern e-commerce platform for modest fashion with elegant brand identity",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
      website: "https://aizaan.store" // Replace with actual URL
    },
    {
      logo: "https://theforgedblade.com/cdn/shop/files/hanzo-santoku-knife-5.jpg?v=1744325199&width=1080",
      title: "Santoku",
      type: "UX Study",
      description: "Comprehensive UX research and design study for knife store optimization",
      color: "bg-gradient-to-br from-mango-500 to-orange-600",
      website: "http://www.santoku-office.com/" // Replace with actual URL
    },
    {
      logo: "https://cdn.asp.events/CLIENT_CL_Gamin_A45C4908_5056_B725_6B2249A7AD85625A/sites/affiliate-summit-2023/media/libraries/sponsors-1/puffy.jpg/fit-in/700x9999/filters:no_upscale()",
      title: "Puffy",
      type: "Homepage Redesign",
      description: "Complete homepage redesign focusing on user experience and conversion",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
      website: "https://puffy.com/" // Replace with actual URL
    }
  ];

  const animateCounter = (target: number, setter: (value: number) => void, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  useEffect(() => {
    setIsVisible(true);
    
    setTimeout(() => {
      animateCounter(2, setProjectCount, 2500);
      animateCounter(99, setSatisfactionRate, 2000);
    }, 500);
    
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => {
      clearInterval(featureInterval);
    };
  }, []);

  const pixelElements = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-3 h-3 bg-mango-500"
      style={{
        left: `${10 + i * 4}%`,
        top: `${20 + (i % 5) * 15}%`,
        animationDelay: `${i * 0.1}s`,
      }}
    />
  ));

  const handleGetStarted = () => {
    navigate('/support/contact-us');
  };

  return (
    <section ref={heroRef} className="relative pt-24 pb-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center text-center gap-12 w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full max-w-lg mx-auto`}> 
            <h1 className="mb-4">
              <div className="text-sm font-pixel text-mango-500 mb-2 animate-pixel-shift">
                CRAFTING PIXEL-PERFECT DESIGNS
              </div>
              <div className="text-4xl lg:text-6xl font-pixel text-black-500 leading-tight mb-2" style={{ lineHeight: '120%' }}>
                <TextType 
                  text={["Anyone Can Build A Brand.", "We Make It Stand Out.", "Let's Create Together."]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  loop={true}
                  className="font-pixel"
                />
              </div>
            </h1>
            <p className="text-xl text-black-700 leading-relaxed mb-6 max-w-xl mx-auto font-mono">
              Premium branding, websites, and creative services for clothing brands, cafés, and more - without the premium agency price tag.
            </p>
            <div className="flex flex-col items-center gap-6 w-full">
              <button 
                type="button"
                className="pixel-button px-8 py-4 font-pixel mb-2 w-full max-w-xs" 
                onClick={handleGetStarted}
              >
                Get Started
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
            </div>
          </div>

          {/* Recent Works Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full`}>
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-pixel text-black-500 mb-2">
                Our Recent Works
              </h2>
              <p className="text-lg max-w-2xl mx-auto">
                Explore our latest projects and see how we've helped brands stand out
              </p>
            </div>
            
            {/* Mobile: Simple Cards */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 gap-6">
                {cardData.map((card, index) => (
                  <div key={index} className="pixel-card p-6 bg-white">
                                      <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center overflow-hidden rounded">
                      <img 
                        src={card.logo} 
                        alt={`${card.title} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                      <div className="bg-mango-500 text-black px-3 py-1 rounded-full text-xs font-pixel">
                        {card.type}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-pixel text-black mb-3">{card.title}</h3>
                    <p className="text-gray-600 font-mono text-base leading-relaxed mb-6">{card.description}</p>
                    
                    <button
                      onClick={() => window.open(card.website, '_blank')}
                      className="inline-flex items-center space-x-2 text-mango-500 border-2 border-mango-500 rounded-full px-4 py-2 text-sm font-bold group"
                    >
                      <span>View Work</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop: Simple Cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {cardData.map((card, index) => (
                <div key={index} className="pixel-card p-8 bg-white">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center overflow-hidden rounded">
                      <img 
                        src={card.logo} 
                        alt={`${card.title} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="bg-mango-500 text-black px-3 py-1 rounded-full text-xs font-pixel">
                      {card.type}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-pixel text-black mb-4">{card.title}</h3>
                  <p className="text-gray-600 font-mono text-base leading-relaxed mb-6">{card.description}</p>
                  
                  <button
                    onClick={() => window.open(card.website, '_blank')}
                    className="inline-flex items-center space-x-2 text-mango-500 border-2 border-mango-500 rounded-full px-4 py-2 text-sm font-bold group"
                  >
                    <span>View Work</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

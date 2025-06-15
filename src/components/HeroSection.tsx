
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Zap, Target, Globe, Award, Code, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Ultra-fast delivery" },
    { icon: Target, title: "Precision Focused", description: "Pixel-perfect results" },
    { icon: Globe, title: "Global Reach", description: "Worldwide availability" },
    { icon: Award, title: "Award Winning", description: "Industry recognition" }
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
      animateCounter(500, setProjectCount, 2500);
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

  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden pixel-grid">
      {/* Animated Pixel Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {pixelElements}
        <div className="absolute top-32 right-20 w-8 h-8 bg-mango-500 animate-pixel-float"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 bg-black animate-pixel-shift"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-mango-500 animate-pixel-glow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <h1 className="mb-8">
              <div className="text-lg font-pixel text-mango-500 mb-2 animate-pixel-shift">
                CRAFTING PIXEL-PERFECT DESIGNS
              </div>
              <div className="text-4xl lg:text-5xl font-pixel text-black leading-tight mb-4">
                Turning Pixels into Powerful Brands
              </div>
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-lg font-mono">
              Premium branding, websites, and creative services for clothing brands, cafés, and more - without the premium agency price tag.
            </p>

            {/* Feature highlights with pixel styling */}
            <div className="mb-8 pixel-card p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-mango-500 border-2 border-black flex items-center justify-center">
                  {React.createElement(features[currentFeature].icon, { 
                    className: "w-6 h-6 text-black" 
                  })}
                </div>
                <div>
                  <h3 className="font-pixel text-black">{features[currentFeature].title}</h3>
                  <p className="text-sm text-gray-600 font-mono">{features[currentFeature].description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="pixel-button px-8 py-4 font-pixel">
                Get Started
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
              
              <button className="border-3 border-black text-black px-8 py-4 font-pixel hover:bg-black hover:text-mango-500 transition-all duration-300">
                <Play className="w-5 h-5 inline mr-2" />
                View Portfolio
              </button>
            </div>

            {/* Pixel Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center pixel-card p-4">
                <div className="text-3xl font-pixel text-black mb-1">
                  {projectCount}+
                </div>
                <div className="text-sm text-gray-600 font-mono">Projects</div>
              </div>
              <div className="text-center pixel-card p-4">
                <div className="text-3xl font-pixel text-black mb-1">
                  {satisfactionRate}%
                </div>
                <div className="text-sm text-gray-600 font-mono">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Pixel Dashboard */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Pixel Dashboard */}
              <div className="pixel-card p-8 bg-white">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-pixel text-black">PIXEL DASHBOARD</h3>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-mango-500 animate-pixel-glow"></div>
                    <div className="w-4 h-4 bg-green-500"></div>
                    <div className="w-4 h-4 bg-red-500"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-mango-500 border-2 border-black flex items-center justify-center">
                      <Palette className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-pixel text-black text-sm">Creative Solutions</h4>
                      <p className="text-xs text-gray-600 font-mono">Pixel-perfect designs</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-600">Brand Identity</span>
                        <span className="text-xs font-pixel text-mango-500">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-3 border border-black">
                        <div className="bg-mango-500 h-full border-r border-black" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-600">Web Design</span>
                        <span className="text-xs font-pixel text-mango-500">88%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-3 border border-black">
                        <div className="bg-mango-500 h-full border-r border-black" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-600">Social Media</span>
                        <span className="text-xs font-pixel text-mango-500">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-3 border border-black">
                        <div className="bg-mango-500 h-full border-r border-black" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="pixel-border p-4 bg-mango-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-pixel text-black">ACTIVE PROJECTS</span>
                      <Code className="w-4 h-4 text-mango-500" />
                    </div>
                    <div className="text-2xl font-pixel text-black">
                      {projectCount > 0 ? projectCount : '---'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pixel Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-mango-500 animate-pixel-float"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-black animate-pixel-shift"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-mango-500 animate-pixel-glow"></div>
              <div className="absolute top-1/4 -right-6 w-3 h-3 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Sparkles, Star, Zap, Target, Globe, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [supportHours, setSupportHours] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  // Features carousel
  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Ultra-fast delivery" },
    { icon: Target, title: "Precision Focused", description: "Pixel-perfect results" },
    { icon: Globe, title: "Global Reach", description: "Worldwide availability" },
    { icon: Award, title: "Award Winning", description: "Industry recognition" }
  ];

  // Animated counter hook
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
    
    // Start animations after component mounts
    setTimeout(() => {
      animateCounter(500, setProjectCount, 2500);
      animateCounter(99, setSatisfactionRate, 2000);
      animateCounter(24, setSupportHours, 1500);
    }, 500);
    
    // Features carousel
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(featureInterval);
    };
  }, []);

  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 bg-orange-400/30 rounded-full animate-pulse`}
      style={{
        left: `${10 + i * 8}%`,
        top: `${20 + (i % 5) * 15}%`,
        animationDelay: `${i * 0.2}s`,
        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    />
  ));

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-green-50/30 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-100/40 to-yellow-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-green-100/40 to-orange-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-tr from-orange-200/20 to-yellow-200/20 rounded-full blur-2xl animate-ping" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        {floatingElements}
        
        {/* Additional geometric shapes */}
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-orange-200 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-product">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Transform Your Brand</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-jakarta">
              CRAFTING{' '}
              <span className="text-orange-500 relative inline-block">
                PIXEL-PERFECT
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 left-2 w-3/4 h-1 bg-gradient-to-r from-orange-300 to-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </span>{' '}
              DESIGNS
            </h1>
            
            <p className="text-2xl text-orange-600 leading-relaxed mb-4 max-w-lg font-jakarta font-semibold">
              Affordable creative services tailored for local businesses
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg font-product">
              Premium branding, websites, and creative services for clothing brands, cafés, and more - without the premium agency price tag.
            </p>

            {/* Feature highlights with animation */}
            <div className="mb-8 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-orange-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-xl flex items-center justify-center">
                  {React.createElement(features[currentFeature].icon, { 
                    className: "w-6 h-6 text-orange-500" 
                  })}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-jakarta">{features[currentFeature].title}</h3>
                  <p className="text-sm text-gray-600 font-product">{features[currentFeature].description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-gradient-to-r from-orange-500 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-2xl hover:scale-105 transform font-product">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-orange-300 text-orange-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 transform font-product">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Enhanced Animated Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-orange-200">
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-900 mb-1 font-jakarta group-hover:text-orange-500 transition-colors duration-300">
                  {projectCount}+
                </div>
                <div className="text-sm text-gray-600 font-product group-hover:text-gray-800 transition-colors duration-300">Projects</div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full transform origin-left animate-pulse" style={{ width: projectCount > 0 ? '100%' : '0%', transition: 'width 2s ease-out' }}></div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-900 mb-1 font-jakarta group-hover:text-orange-500 transition-colors duration-300">
                  {satisfactionRate}%
                </div>
                <div className="text-sm text-gray-600 font-product group-hover:text-gray-800 transition-colors duration-300">Satisfaction</div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-orange-500 rounded-full transform origin-left animate-pulse" style={{ width: satisfactionRate > 0 ? `${satisfactionRate}%` : '0%', transition: 'width 2s ease-out', animationDelay: '0.5s' }}></div>
                </div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-gray-900 mb-1 font-jakarta group-hover:text-orange-500 transition-colors duration-300">
                  {supportHours}/7
                </div>
                <div className="text-sm text-gray-600 font-product group-hover:text-gray-800 transition-colors duration-300">Support Available</div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-400 to-green-500 rounded-full transform origin-left animate-pulse" style={{ width: supportHours > 0 ? '100%' : '0%', transition: 'width 1.5s ease-out', animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Interactive Animation */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Interactive Dashboard Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl border border-orange-100 backdrop-blur-sm">
                <div className="absolute top-6 right-6 flex space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-orange-500 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 font-jakarta">Creative Solutions</h3>
                      <p className="text-sm text-gray-600 font-product">Pixel-perfect designs</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-3 group">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-product">Brand Identity</span>
                        <span className="text-sm font-medium text-orange-500 font-product">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full animate-pulse transition-all duration-1000 group-hover:scale-x-105 origin-left" style={{ width: '95%', animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 group">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-product">Web Design</span>
                        <span className="text-sm font-medium text-green-500 font-product">88%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-400 to-orange-500 h-2 rounded-full animate-pulse transition-all duration-1000 group-hover:scale-x-105 origin-left" style={{ width: '88%', animationDelay: '1s' }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 group">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-product">Social Media</span>
                        <span className="text-sm font-medium text-yellow-500 font-product">92%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full animate-pulse transition-all duration-1000 group-hover:scale-x-105 origin-left" style={{ width: '92%', animationDelay: '1.5s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive feature showcase */}
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Active Projects</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-orange-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 font-jakarta">
                      {projectCount > 0 ? projectCount : '---'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements with more variety */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-green-400 to-orange-500 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/4 -right-6 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
              
              {/* New floating elements */}
              <div className="absolute top-0 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-0 right-1/4 w-5 h-5 border-2 border-orange-400 rotate-45 animate-spin" style={{ animationDuration: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

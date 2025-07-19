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

  const handleScrollToIntake = () => {
    const el = document.getElementById('quick-intake-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 bg-white overflow-hidden pixel-grid-overlay">
      {/* Animated Pixel Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {pixelElements}
        <div className="absolute top-32 right-20 w-8 h-8 bg-mango-500 animate-pixel-float"></div>
        <div className="absolute bottom-32 left-20 w-6 h-6 bg-black animate-pixel-shift"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-mango-500 animate-pixel-glow"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center text-center gap-6 w-full">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} w-full max-w-lg mx-auto`}> 
            <h1 className="mb-4">
              <div className="text-sm font-pixel text-mango-500 mb-2 animate-pixel-shift">
                CRAFTING PIXEL-PERFECT DESIGNS
              </div>
              <div className="text-4xl lg:text-6xl font-pixel text-black-500 leading-tight mb-2">
                Anyone Can Build A Brand.
              </div>
            </h1>
            <p className="text-xl text-black-700 leading-relaxed mb-6 max-w-xl mx-auto font-mono">
              Premium branding, websites, and creative services for clothing brands, cafés, and more - without the premium agency price tag.
            </p>
            <div className="flex flex-col items-center gap-6 w-full">
              <button className="pixel-button px-8 py-4 font-pixel mb-2 w-full max-w-xs" onClick={handleScrollToIntake}>
                Get Started
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="text-center pixel-card p-4">
                  <div className="text-3xl font-pixel text-black mb-1">
                    4+
                  </div>
                  <div className="text-sm text-gray-600 font-mono">Projects Completed</div>
                </div>
                <div className="text-center pixel-card p-4">
                  <div className="text-3xl font-pixel text-black mb-1">
                    {satisfactionRate}%
                  </div>
                  <div className="text-sm text-gray-600 font-mono">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

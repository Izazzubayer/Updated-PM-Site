import React from 'react';
import { Target, Zap, Heart, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MissionSection = () => {
  const { t } = useTranslation();

  const values = [
    // {
    //   icon: Target,
    //   title: "Precision & Quality",
    //   description: "Every pixel matters. We deliver meticulous designs that exceed expectations."
    // },
    // {
    //   icon: Zap,
    //   title: "Speed & Efficiency", 
    //   description: "Fast turnarounds without compromising on quality or creativity."
    // },
    // {
    //   icon: Heart,
    //   title: "Passion-Driven",
    //   description: "We genuinely care about your brand's success and growth."
    // },
    // {
    //   icon: Star,
    //   title: "Premium Results",
    //   description: "Agency-level quality at prices that make sense for your business."
    // }
  ];

  return (
    <section className="py-20 bg-white pixel-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono leading-relaxed">
            Empowering growing businesses with premium creative solutions that don't break the bank. 
            We believe every brand deserves professional design, regardless of budget.
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Mission Statement */}
        <div className="pixel-card p-12 bg-white mb-16 text-center">
          <div className="w-20 h-20 bg-mango-500 border-2 border-black mx-auto mb-6 flex items-center justify-center">
            <Target className="w-10 h-10 text-black" />
          </div>
          <h3 className="text-2xl font-pixel text-black mb-6">
            "Turning Small Business Dreams into Big Brand Reality"
          </h3>
          <p className="text-lg text-gray-700 font-mono max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between expensive agencies and cheap solutions by providing 
            personalized, professional creative services that help local businesses compete 
            with larger brands through exceptional design and strategic thinking. - Izaz Zubayer
          </p>
        </div>

        {/* Values Grid */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="pixel-card p-6 bg-white text-center"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-pixel text-black mb-3">{value.title}</h3>
              <p className="text-sm text-gray-600 font-mono leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div> */}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <div className="text-center pixel-card p-6 bg-white">
            <div className="text-3xl font-pixel text-black mb-2">2</div>
            <div className="text-sm text-gray-600 font-mono">ACTIVE PROJECTS</div>
          </div> */}
          {/* <div className="text-center pixel-card p-6 bg-white">
            <div className="text-3xl font-pixel text-black mb-2">4+</div>
            <div className="text-sm text-gray-600 font-mono">Projects Delivered</div>
          </div>
          <div className="text-center pixel-card p-6 bg-white">
            <div className="text-3xl font-pixel text-black mb-2">99%</div>
            <div className="text-sm text-gray-600 font-mono">Client Satisfaction</div>
          </div>
          <div className="text-center pixel-card p-6 bg-white">
            <div className="text-3xl font-pixel text-black mb-2">5</div>
            <div className="text-sm text-gray-600 font-mono">Years Experience</div>
          </div>
          <div className="text-center pixel-card p-6 bg-white">
            <div className="text-3xl font-pixel text-black mb-2">24hr</div>
            <div className="text-sm text-gray-600 font-mono">Response Time</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

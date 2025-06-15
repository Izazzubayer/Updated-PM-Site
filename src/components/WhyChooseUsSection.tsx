
import React from 'react';
import { Shield, Clock, Award, Users, Star, Zap, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Get your projects completed in record time without compromising on quality."
    },
    {
      icon: Target,
      title: "Pixel-Perfect Precision",
      description: "Every element is crafted with meticulous attention to detail and precision."
    },
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "We're not happy until you're thrilled with the final result."
    },
    {
      icon: Award,
      title: "Award-Winning Designs",
      description: "Our work has been recognized by industry leaders and design communities."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Café Owner",
      business: "Pixel Brew Coffee",
      rating: 5,
      text: "Pixel Mango transformed our brand identity completely. The logo design is absolutely perfect and our customers love the new look!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Fashion Designer",
      business: "Urban Threads",
      rating: 5,
      text: "Their social media branding package was exactly what we needed. Our Instagram engagement has tripled since the rebrand.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Manager",
      business: "Fusion Bites",
      rating: 5,
      text: "The website they built for us is stunning and our online orders have increased by 200%. Highly recommend their services!",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 pixel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Why Choose Pixel Mango</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
            We combine creative excellence with technical expertise to deliver results that exceed expectations
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="pixel-card p-6 text-center bg-white hover:animate-pixel-glow transition-all duration-300"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black rounded-none flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-pixel text-black mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-mono">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-pixel text-black mb-4">What Our Clients Say</h3>
          <p className="text-lg text-gray-600 font-mono">
            Real feedback from real businesses we've helped grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Pixel Speech Bubble */}
              <div className="pixel-speech bg-white border-3 border-black p-6 mb-6 hover:animate-pixel-glow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-mango-500 text-mango-500" />
                  ))}
                </div>
                <p className="text-gray-700 font-mono text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
              </div>
              
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-mango-500 border-2 border-black flex items-center justify-center">
                  <span className="text-black font-pixel text-sm">{testimonial.avatar}</span>
                </div>
                <div className="text-left">
                  <div className="font-pixel text-black text-sm">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs font-mono">{testimonial.role}</div>
                  <div className="text-mango-500 text-xs font-pixel">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

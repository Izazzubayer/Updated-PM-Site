
import React from 'react';
import { Star, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprise costs. Clear, upfront pricing that fits your budget."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Most projects completed within 5-7 business days. Rush options available."
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Direct communication with designers. No account managers or middlemen."
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description: "Unlimited revisions until you're completely happy with the results."
    },
    {
      icon: Zap,
      title: "Premium Quality",
      description: "Agency-level design quality at freelancer-friendly prices."
    },
    {
      icon: Star,
      title: "Ongoing Support",
      description: "We don't disappear after delivery. Continued support for your brand's growth."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Bloom Coffee Roasters",
      rating: 5,
      text: "Pixel Mango transformed our coffee shop's entire identity. The branding is perfect - it captures exactly what we wanted to convey to our customers.",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      business: "Urban Threads Clothing",
      rating: 5,
      text: "Working with this team was incredible. They understood our vision immediately and delivered designs that exceeded our expectations. Highly recommend!",
      avatar: "MC"
    },
    {
      name: "Elena Rodriguez",
      business: "Fit & Flow Studio",
      rating: 5,
      text: "Professional, fast, and affordable. The website they built for our fitness studio has increased our online bookings by 300%. Amazing work!",
      avatar: "ER"
    },
    {
      name: "David Kim",
      business: "TechStart Solutions",
      rating: 5,
      text: "The UI/UX design they created for our app was spot-on. Clean, modern, and user-friendly. Our customers love the new interface.",
      avatar: "DK"
    }
  ];

  return (
    <section className="py-20 bg-white pixel-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Why Choose Pixel Mango?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
            We're not just another design agency. We're your creative partners committed to your success.
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="pixel-card p-6 bg-white hover:animate-pixel-glow transition-all duration-300"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-pixel text-black mb-3">{benefit.title}</h3>
              <p className="text-sm text-gray-600 font-mono leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-pixel text-center text-black mb-12 pixel-text">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="pixel-speech bg-white p-6 hover:animate-pixel-glow transition-all duration-300"
              >
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

        {/* Stats Row */}
        <div className="pixel-card p-8 bg-mango-50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-pixel text-black mb-2">500+</div>
              <div className="text-sm text-gray-600 font-mono">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-pixel text-black mb-2">99%</div>
              <div className="text-sm text-gray-600 font-mono">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-pixel text-black mb-2">5★</div>
              <div className="text-sm text-gray-600 font-mono">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-pixel text-black mb-2">24hr</div>
              <div className="text-sm text-gray-600 font-mono">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

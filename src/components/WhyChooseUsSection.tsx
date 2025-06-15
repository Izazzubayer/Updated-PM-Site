
import React from 'react';
import { Star, Clock, DollarSign, Users, Award, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Premium quality without the premium price tag. Get professional designs that fit your budget."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality. Most projects completed within 1-2 weeks."
    },
    {
      icon: Users,
      title: "Local Focus",
      description: "We understand local markets and help you connect with your community effectively."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our designs have helped hundreds of businesses increase their brand recognition and sales."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      business: "Bloom Coffee Co.",
      rating: 5,
      text: "Pixel Mango transformed our café's brand completely. Our customer base has grown by 40% since the rebrand!",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      business: "Street Style Apparel",
      rating: 5,
      text: "The team understood our vision perfectly. Our online sales doubled after launching the new website.",
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      business: "Green Leaf Wellness",
      rating: 5,
      text: "Professional, creative, and affordable. They delivered exactly what we needed to stand out.",
      avatar: "EW"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Why Choose Pixel Mango?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-product">
            We combine creative excellence with business understanding to deliver designs that don't just look good – they work.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-yellow-300 transition-all duration-300">
                <reason.icon className="w-8 h-8 text-orange-600 group-hover:text-orange-700 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-jakarta">{reason.title}</h3>
              <p className="text-sm text-gray-600 font-product">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-jakarta">What Our Clients Say</h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 font-product italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 font-jakarta">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 font-product">{testimonial.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

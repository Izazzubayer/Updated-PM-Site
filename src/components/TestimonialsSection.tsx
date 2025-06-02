
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "This first class service found exactly what they said they would and when. I would like to explore working with them more.",
      author: "Michael Owen",
      position: "Product Manager, TechFlow Inc",
      avatar: "MO"
    },
    {
      rating: 5,
      text: "An excellent and efficient. Exceptionally by quality. The help was very good! They work efficiently and resolve every problem.",
      author: "Sarah Johnson",
      position: "Senior R&D, Future Works",
      avatar: "SJ"
    },
    {
      rating: 5,
      text: "This first class service found exactly what they would and when. I would like to explore working with them more.",
      author: "David Peterson",
      position: "CEO of Creative Solutions",
      avatar: "DP"
    },
    {
      rating: 4,
      text: "The depth of service really sets high standards. Our workflows have become more efficient since my experience with them.",
      author: "Emily Davis",
      position: "Operations Manger, Growth Labs",
      avatar: "ED"
    },
    {
      rating: 5,
      text: "It's been absolutely amazing delivering our best work! The help, talent and skills offering from TKCL are second to none!",
      author: "Alex Thompson",
      position: "Director, Alpha Digital Solutions",
      avatar: "AT"
    },
    {
      rating: 5,
      text: "Working with TKCL has been an amazing experience. Outstanding quality and delivery. They're very professional team!",
      author: "Maria Rodriguez",
      position: "Design Lead, Beta Studio",
      avatar: "MR"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">
            Success stories from our image editing projects
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from 'react';
import { Star, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';

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
      description: "Most projects completed within 30 business days (based on the services taken)"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Direct communication with the founders. No hassle or middlemen."
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description: "Unlimited revisions until you're completely happy with the results."
    },
    {
      icon: Zap,
      title: "Premium Quality",
      description: "Agency-level design quality at studio-level pricing."
    },
    {
      icon: Star,
      title: "Ongoing Support",
      description: "We don't ghost after delivery. We provide continued support for your brand's growth."
    }
  ];

  const testimonials = [
    {
      name: "Fameta Baraka",
      business: "Founder @ Aizaan",
      rating: 5,
      text: "Pixel Mango transformed my Hijab/Abaya shop's entire identity. The branding is perfect - it captures exactly what I wanted to convey to my customers.",
      avatar: "FB"
    },
    // {
    //   name: "Mike Chen",
    //   business: "Urban Threads Clothing",
    //   rating: 5,
    //   text: "Working with this team was incredible. They understood our vision immediately and delivered designs that exceeded our expectations. Highly recommend!",
    //   avatar: "MC"
    // },
    {
      name: "Takiyona Muteshi",
      business: "Santoku Knife Shop",
      rating: 5,
      text: "The work Izaz has done for Santoku is splendid. He provided me details as to how to make my brand work better and he knows his craft",
      avatar: "TM"
    },
    // {
    //   name: "David Kim",
    //   business: "TechStart Solutions",
    //   rating: 5,
    //   text: "The UI/UX design they created for our app was spot-on. Clean, modern, and user-friendly. Our customers love the new interface.",
    //   avatar: "DK"
    // }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Why Choose Pixel Mango?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
            We're not just another design agency. We're your creative partners committed to your success.
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Mobile: Carousel */}
        <div className="block md:hidden mb-20">
          <BenefitsCarousel benefits={benefits} />
        </div>
        {/* Desktop/Tablet: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="pixel-card p-6 bg-white"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-pixel text-black mb-3">{benefit.title}</h3>
              <p className="text-base text-gray-600 font-mono leading-relaxed">{benefit.description}</p>
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
                <p className="text-gray-700 font-mono text-base leading-relaxed">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="pixel-card p-8 bg-mango-50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-pixel text-black mb-2">4+</div>
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

// Carousel implementation for benefits
function BenefitsCarousel({ benefits }) {
  const [emblaApi, setEmblaApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const slidesToShow = 1;

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const dotCount = Math.ceil(benefits.length / slidesToShow);

  return (
    <div className="relative px-4">
      <Carousel opts={{ align: 'start', slidesToScroll: slidesToShow }} setApi={setEmblaApi}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {benefits.map((benefit, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
              <div className="pixel-card p-4 md:p-6 bg-white h-full flex flex-col mx-2">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-3 md:mb-4">
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
                <h3 className="text-base md:text-lg font-pixel text-black mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-600 font-mono leading-relaxed">{benefit.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: dotCount }).map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full border-2 border-mango-500 transition-all duration-200 ${selectedIndex === i ? 'bg-mango-500' : 'bg-white'}`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

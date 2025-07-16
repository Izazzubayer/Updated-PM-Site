import React from 'react';
import { Palette, Share2, Monitor, Code, PenTool, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Palette,
      title: "Brand Identity & Logo Design",
      description: "Complete brand identity systems with logos, guidelines, and business cards that make your brand unforgettable.",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Brand Assets Kit"],
      link: "/services/brand-identity"
    },
    {
      icon: Share2,
      title: "Social Media Design & Branding",
      description: "Consistent social media presence with custom templates, covers, and branding kits for all platforms.",
      features: ["Profile Design", "Templates", "Platform Optimization", "Visual Strategy"],
      link: "/services/social-media-branding"
    },
    {
      icon: Monitor,
      title: "UI/UX Design & Prototyping",
      description: "User-centered design solutions with wireframes, prototypes, and responsive interfaces that convert.",
      features: ["Wireframing", "UI Design", "Prototypes", "User Flow Design"],
      link: "/services/ui-ux-design"
    },
    {
      icon: Code,
      title: "Website Development & E-Commerce",
      description: "Custom websites and e-commerce solutions built with modern technologies and optimized for performance.",
      features: ["WooCommerce", "CMS Setup", "SEO Foundation", "Mobile Optimization"],
      link: "/services/website-development"
    },
    {
      icon: PenTool,
      title: "Website Content & Copywriting",
      description: "Compelling copy and content that tells your story, engages your audience, and drives conversions.",
      features: ["Website Copy", "SEO Content", "Product Descriptions", "Content Strategy"],
      link: "/services/content-creation"
    },
    {
      icon: Users,
      title: "Brand Strategy & Creative Consultation",
      description: "Strategic guidance to position your brand effectively and maximize your creative investments.",
      features: ["Brand Positioning", "Market Analysis", "Strategy Sessions", "Monthly Consultation"],
      link: "/services/consultation-strategy"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 pixel-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Our Creative Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-mono">
            Pixel-perfect solutions for every aspect of your brand
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Mobile: Carousel */}
        <div className="block md:hidden">
          <ServicesCarousel services={services} />
        </div>
        {/* Desktop/Tablet: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="pixel-card p-8 bg-white"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-pixel text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 font-mono mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-mango-500"></div>
                    <span className="text-sm text-gray-600 font-mono">{feature}</span>
                  </div>
                ))}
              </div>
              <Link 
                to={service.link} 
                className="inline-flex items-center space-x-2 text-mango-500 font-pixel text-sm"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Carousel implementation for services
function ServicesCarousel({ services }) {
  const [emblaApi, setEmblaApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slidesToShow, setSlidesToShow] = React.useState(1);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Calculate number of dots
  const dotCount = Math.ceil(services.length / slidesToShow);

  return (
    <div className="relative">
      <Carousel opts={{ align: 'start', slidesToScroll: slidesToShow }} setApi={setEmblaApi}>
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index} className="px-2">
              <div className="pixel-card p-8 bg-white h-full flex flex-col">
                <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-pixel text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 font-mono mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-mango-500"></div>
                      <span className="text-sm text-gray-600 font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center space-x-2 text-mango-500 font-pixel text-sm mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
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

export default ServicesSection;

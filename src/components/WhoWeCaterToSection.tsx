
import React from 'react';
import { Coffee, Shirt, ShoppingBag, Utensils, Dumbbell, Scissors, Camera, Laptop } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhoWeCaterToSection = () => {
  const { t } = useTranslation();

  const businesses = [
    {
      icon: Coffee,
      title: "Cafés & Coffee Shops",
      description: "Warm, inviting branding that captures the perfect coffee culture vibe.",
      examples: ["Menu design", "Logo & branding", "Social media templates", "Loyalty cards"]
    },
    {
      icon: Shirt,
      title: "Clothing Brands",
      description: "Fashion-forward designs that make your apparel brand stand out.",
      examples: ["Brand identity", "Lookbook design", "E-commerce store", "Packaging design"]
    },
    {
      icon: ShoppingBag,
      title: "Retail Stores",
      description: "Professional retail branding that drives foot traffic and sales.",
      examples: ["Storefront design", "Price tags", "Promotional materials", "Online presence"]
    },
    {
      icon: Utensils,
      title: "Restaurants",
      description: "Appetizing visual identities that showcase your culinary excellence.",
      examples: ["Menu design", "Logo creation", "Food photography", "Website development"]
    },
    {
      icon: Dumbbell,
      title: "Fitness Studios",
      description: "Energetic branding that motivates and inspires your community.",
      examples: ["Gym branding", "Class schedules", "Membership cards", "Social content"]
    },
    {
      icon: Scissors,
      title: "Beauty Salons",
      description: "Elegant designs that reflect style, sophistication, and self-care.",
      examples: ["Salon branding", "Price lists", "Appointment cards", "Instagram templates"]
    },
    {
      icon: Camera,
      title: "Creative Professionals",
      description: "Portfolio-worthy branding for photographers, artists, and creators.",
      examples: ["Portfolio websites", "Business cards", "Watermarks", "Brand guidelines"]
    },
    {
      icon: Laptop,
      title: "Tech Startups",
      description: "Modern, innovative designs that communicate cutting-edge solutions.",
      examples: ["UI/UX design", "Pitch decks", "Website development", "Brand strategy"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 pixel-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-pixel text-black mb-4 pixel-text">Who We Cater To</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
            We specialize in helping local businesses across various industries establish strong, 
            memorable brand identities that resonate with their target audiences.
          </p>
          <div className="w-24 h-1 bg-mango-500 mx-auto mt-6"></div>
        </div>

        {/* Business Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businesses.map((business, index) => (
            <div 
              key={index}
              className="pixel-card p-6 bg-white hover:animate-pixel-glow transition-all duration-300"
            >
              <div className="w-16 h-16 bg-mango-500 border-2 border-black flex items-center justify-center mb-4">
                <business.icon className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-lg font-pixel text-black mb-3">{business.title}</h3>
              <p className="text-sm text-gray-600 mb-4 font-mono leading-relaxed">{business.description}</p>
              
              <div className="space-y-2">
                {business.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-mango-500"></div>
                    <span className="text-xs text-gray-600 font-mono">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="pixel-card p-8 bg-white">
            <h3 className="text-2xl font-pixel text-black mb-4">Don't See Your Industry?</h3>
            <p className="text-gray-600 mb-6 font-mono">
              We work with businesses of all types! Every brand has unique needs, and we're here to help.
            </p>
            <button className="pixel-button px-8 py-4 font-pixel">
              Tell Us About Your Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeCaterToSection;


import React from 'react';
import { Coffee, Shirt, Store, Utensils, Camera, Dumbbell, Stethoscope, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhoWeCaterToSection = () => {
  const { t } = useTranslation();

  const businesses = [
    {
      icon: Coffee,
      title: "Cafés & Coffee Shops",
      description: "Create a warm, inviting brand that draws customers in"
    },
    {
      icon: Shirt,
      title: "Clothing Brands",
      description: "Stand out in fashion with compelling visual identity"
    },
    {
      icon: Store,
      title: "Retail Stores",
      description: "Drive foot traffic with professional branding"
    },
    {
      icon: Utensils,
      title: "Restaurants",
      description: "Appetizing designs that showcase your cuisine"
    },
    {
      icon: Camera,
      title: "Creative Studios",
      description: "Portfolio websites that showcase your work"
    },
    {
      icon: Dumbbell,
      title: "Fitness Centers",
      description: "Energetic branding that motivates your members"
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Trustworthy, professional medical branding"
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Engaging designs for schools and training centers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Who We Cater To</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-product">
            We specialize in helping local businesses across various industries establish their unique brand presence and connect with their community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businesses.map((business, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-orange-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-orange-200 group-hover:to-yellow-300 transition-all duration-300">
                <business.icon className="w-8 h-8 text-orange-600 group-hover:text-orange-700 transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-jakarta">{business.title}</h3>
              <p className="text-sm text-gray-600 font-product">{business.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeCaterToSection;

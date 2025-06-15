
import React from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MissionSection = () => {
  const { t } = useTranslation();

  const missionPoints = [
    {
      icon: Target,
      title: "Precision & Quality",
      description: "Every pixel matters. We deliver designs that are not just beautiful, but strategically crafted to drive results."
    },
    {
      icon: Heart,
      title: "Local Business Focus",
      description: "We understand the unique challenges of local businesses and tailor our services to help you stand out in your community."
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Combining creative expertise with the latest design trends to give your brand a fresh, modern edge."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-product">
            To empower local businesses with premium design services that were once only accessible to large corporations. 
            We believe every business deserves exceptional branding and digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-200 group-hover:to-yellow-300 transition-all duration-300">
                <point.icon className="w-10 h-10 text-orange-600 group-hover:text-orange-700 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-jakarta">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed font-product">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

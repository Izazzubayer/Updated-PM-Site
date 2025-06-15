
import React from 'react';
import { MessageCircle, Lightbulb, Palette, Rocket, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowWeWorkSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Discovery & Consultation",
      description: "We start with a detailed consultation to understand your business, goals, and vision.",
      details: ["Initial consultation call", "Brand questionnaire", "Competitor analysis", "Project timeline"]
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "We develop a creative strategy tailored to your business and target audience.",
      details: ["Creative brief development", "Mood board creation", "Style guide planning", "Content strategy"]
    },
    {
      number: "03",
      icon: Palette,
      title: "Design & Development",
      description: "Our team brings your vision to life with pixel-perfect designs and functionality.",
      details: ["Initial concepts", "Revisions & refinements", "Final design delivery", "Development & testing"]
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "We ensure a smooth launch and provide ongoing support for your new brand.",
      details: ["Final review & approval", "Launch assistance", "Training & documentation", "Ongoing support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-jakarta">How We Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-product">
            Our proven 4-step process ensures we deliver exceptional results that exceed your expectations every time.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-0.5 w-0.5 h-96 bg-gradient-to-b from-orange-300 to-yellow-400"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                    <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <span className="text-3xl font-bold text-orange-500 font-jakarta">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-jakarta">{step.title}</h3>
                    <p className="text-gray-600 mb-6 font-product">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-product">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="lg:w-auto flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg font-jakarta">
                    {step.number}
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

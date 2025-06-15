
import React from 'react';
import { Palette, Share2, Monitor, Code, PenTool, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Palette,
      title: t('brandIdentity'),
      description: t('brandIdentityDesc'),
      link: "/services/brand-identity"
    },
    {
      icon: Share2,
      title: t('socialMediaBranding'),
      description: t('socialMediaBrandingDesc'),
      link: "/services/social-media-branding"
    },
    {
      icon: Monitor,
      title: t('uiuxDesign'),
      description: t('uiuxDesignDesc'),
      link: "/services/ui-ux-design"
    },
    {
      icon: Code,
      title: t('websiteDevelopment'),
      description: t('websiteDevelopmentDesc'),
      link: "/services/website-development"
    },
    {
      icon: PenTool,
      title: t('contentCreation'),
      description: t('contentCreationDesc'),
      link: "/services/content-creation"
    },
    {
      icon: Users,
      title: t('consultationStrategy'),
      description: t('consultationStrategyDesc'),
      link: "/services/consultation-strategy"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-jakarta">{t('servicesTitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-product">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-orange-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-yellow-300 transition-colors">
                <service.icon className="w-8 h-8 text-orange-600 group-hover:text-orange-700 transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-jakarta">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-product">{service.description}</p>
              
              <Link 
                to={service.link}
                className="group/btn flex items-center space-x-2 text-orange-500 font-medium hover:text-orange-600 transition-all duration-300 font-product"
              >
                <span>{t('learnMore')}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

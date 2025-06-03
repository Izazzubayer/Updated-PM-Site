
import React from 'react';
import { Camera, Video, Box, Monitor, Code, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Camera,
      title: t('imageEditing'),
      description: t('imageEditingDesc'),
      link: "/services/image-editing"
    },
    {
      icon: Video,
      title: t('videoProduction'),
      description: t('videoProductionDesc'),
      link: "/services/video-production"
    },
    {
      icon: Box,
      title: t('threeDModeling'),
      description: t('threeDModelingDesc'),
      link: "/services/3d-modeling"
    },
    {
      icon: Monitor,
      title: t('cgiRendering'),
      description: t('cgiRenderingDesc'),
      link: "/services/cgi-rendering"
    },
    {
      icon: Code,
      title: t('softwareDevelopment'),
      description: t('softwareDevelopmentDesc'),
      link: "/services/software-development"
    },
    {
      icon: Bot,
      title: t('aiAutomation'),
      description: t('aiAutomationDesc'),
      link: "/services/ai-automation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('servicesTitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-100 dark:group-hover:bg-green-900 transition-colors">
                <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-green-500 transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <Link 
                to={service.link}
                className="group/btn flex items-center space-x-2 text-green-500 font-medium hover:text-green-600 transition-all duration-300"
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

import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X, Camera, Video, Box, Monitor, Code, Bot, Info, Mail, Phone, Book } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    {
      icon: Camera,
      title: t('imageEditing'),
      description: t('imageEditingDesc'),
      href: "/services/image-editing"
    },
    {
      icon: Video,
      title: t('videoProduction'),
      description: t('videoProductionDesc'),
      href: "/services/video-production"
    },
    {
      icon: Box,
      title: t('threeDModeling'),
      description: t('threeDModelingDesc'),
      href: "/services/3d-modeling"
    },
    {
      icon: Monitor,
      title: t('cgiRendering'),
      description: t('cgiRenderingDesc'),
      href: "/services/cgi-rendering"
    },
    {
      icon: Code,
      title: t('softwareDevelopment'),
      description: t('softwareDevelopmentDesc'),
      href: "/services/software-development"
    },
    {
      icon: Bot,
      title: t('aiAutomation'),
      description: t('aiAutomationDesc'),
      href: "/services/ai-automation"
    }
  ];

  const products = [
    {
      icon: Box,
      title: "HoloSnap",
      description: "Transform 2D images into 3D models",
      href: "/products/holosnap"
    },
    {
      icon: Camera,
      title: "Retouched.Ai",
      description: "AI-powered background removal",
      href: "/products/retouched-ai"
    }
  ];

  const supportOptions = [
    {
      icon: Info,
      title: t('aboutUs'),
      description: "Learn more about our company",
      href: "/support/about-us"
    },
    {
      icon: Mail,
      title: t('contactUs'),
      description: "Get in touch with our team",
      href: "/support/contact-us"
    },
    {
      icon: Phone,
      title: t('faq'),
      description: "Frequently asked questions",
      href: "/support/faq"
    },
    {
      icon: Book,
      title: t('resources'),
      description: "Guides and documentation",
      href: "/support/resources"
    }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const handleLanguageChange = (language: any) => {
    i18n.changeLanguage(language.code);
    console.log(`Language changed to: ${language.name}`);
  };

  const getCurrentLanguage = () => {
    const current = languages.find(lang => lang.code === i18n.language);
    return current ? current.code.toUpperCase() : 'EN';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b' : 'bg-background'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-lg font-semibold text-foreground">{t('companyName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[active]:bg-gray-100 data-[state=open]:bg-gray-100">
                    {t('services')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.title} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                <service.icon className="w-5 h-5 text-gray-600 group-hover:text-green-500 transition-colors" />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none">{service.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[active]:bg-gray-100 data-[state=open]:bg-gray-100">
                    {t('products')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6">
                      {products.map((product) => (
                        <NavigationMenuLink key={product.title} asChild>
                          <Link
                            to={product.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                <product.icon className="w-5 h-5 text-gray-600 group-hover:text-green-500 transition-colors" />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none">{product.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[active]:bg-gray-100 data-[state=open]:bg-gray-100">
                    {t('support')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-6">
                      {supportOptions.map((option) => (
                        <NavigationMenuLink key={option.title} asChild>
                          <Link
                            to={option.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                <option.icon className="w-5 h-5 text-gray-600 group-hover:text-green-500 transition-colors" />
                              </div>
                              <div>
                                <div className="text-sm font-medium leading-none">{option.title}</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                  {option.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link 
              to="/integrations" 
              className={`transition-colors ${isActive('/integrations') ? 'text-green-500' : 'text-foreground hover:text-green-500'}`}
            >
              {t('integrations')}
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? 'text-green-500' : 'text-foreground hover:text-green-500'}`}
            >
              {t('pricing')}
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-2 text-foreground hover:text-green-500 transition-colors bg-transparent border-none cursor-pointer">
                <Globe className="w-4 h-4" />
                <span>{getCurrentLanguage()}</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4">
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <div className="text-sm font-medium mb-2">Select Language</div>
                    <div className="space-y-1 max-h-48 overflow-y-auto">
                      {languages.map((language) => (
                        <DropdownMenuItem 
                          key={language.code}
                          onClick={() => handleLanguageChange(language)}
                          className="flex items-center space-x-2 cursor-pointer hover:bg-accent p-2 rounded"
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span className="text-sm">{language.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                  <div className="w-1/2 pl-2 border-l">
                    <div className="text-sm font-medium mb-2">Global Reach</div>
                    <div className="bg-muted rounded-lg p-4 h-48 flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <Globe className="w-12 h-12 mx-auto mb-2 text-green-500" />
                        <p className="text-xs">Available worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-foreground">{t('services')}</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link 
                      key={service.title}
                      to={service.href} 
                      className="block text-foreground hover:text-green-500"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-foreground">{t('products')}</div>
                <div className="pl-4 space-y-2">
                  {products.map((product) => (
                    <Link 
                      key={product.title}
                      to={product.href} 
                      className="block text-foreground hover:text-green-500"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-foreground">{t('support')}</div>
                <div className="pl-4 space-y-2">
                  {supportOptions.map((option) => (
                    <Link 
                      key={option.title}
                      to={option.href} 
                      className="block text-foreground hover:text-green-500"
                    >
                      {option.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/integrations" className="block text-foreground hover:text-green-500">{t('integrations')}</Link>
              <Link to="/pricing" className="block text-foreground hover:text-green-500">{t('pricing')}</Link>
              <div className="pt-4 border-t space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-2 text-foreground hover:text-green-500 transition-colors">
                    <Globe className="w-4 h-4" />
                    <span>{getCurrentLanguage()}</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 p-4">
                    <div className="flex">
                      <div className="w-1/2 pr-2">
                        <div className="text-sm font-medium mb-2">Select Language</div>
                        <div className="space-y-1 max-h-48 overflow-y-auto">
                          {languages.map((language) => (
                            <DropdownMenuItem 
                              key={language.code}
                              onClick={() => handleLanguageChange(language)}
                              className="flex items-center space-x-2 cursor-pointer hover:bg-accent p-2 rounded"
                            >
                              <span className="text-lg">{language.flag}</span>
                              <span className="text-sm">{language.name}</span>
                            </DropdownMenuItem>
                          ))}
                        </div>
                      </div>
                      <div className="w-1/2 pl-2 border-l">
                        <div className="text-sm font-medium mb-2">Global Reach</div>
                        <div className="bg-muted rounded-lg p-4 h-48 flex items-center justify-center text-muted-foreground">
                          <div className="text-center">
                            <Globe className="w-12 h-12 mx-auto mb-2 text-green-500" />
                            <p className="text-xs">Available worldwide</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

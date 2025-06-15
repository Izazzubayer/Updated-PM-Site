
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navigation = [
    { name: t('home'), href: '/' },
    { 
      name: t('services'), 
      href: '/services',
      dropdown: [
        { name: t('brandIdentity'), href: '/services/brand-identity', icon: '🎨' },
        { name: t('socialMediaBranding'), href: '/services/social-media-branding', icon: '📱' },
        { name: t('uiuxDesign'), href: '/services/ui-ux-design', icon: '💻' },
        { name: t('websiteDevelopment'), href: '/services/website-development', icon: '🌐' },
        { name: t('contentCreation'), href: '/services/content-creation', icon: '✍️' },
        { name: t('consultationStrategy'), href: '/services/consultation-strategy', icon: '💡' }
      ]
    },
    { name: t('products'), href: '/products' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('support'), href: '/support' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b-3 border-black' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:animate-pixel-shift transition-all">
            <img 
              src="/lovable-uploads/59e78e85-cc0a-4c41-8037-5153fb6fd80c.png" 
              alt="Pixel Mango Logo" 
              className="h-10 w-10"
            />
            <span className="font-pixel text-xl text-black">PIXEL MANGO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 font-pixel text-sm transition-colors duration-200 hover:text-mango-500 ${
                    location.pathname === item.href ? 'text-mango-500' : 'text-black'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 pixel-card bg-white border-black z-50 animate-pixel-fade">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-black hover:bg-mango-50 hover:text-mango-500 transition-colors font-mono"
                        >
                          <span className="text-lg">{dropdownItem.icon}</span>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side - Language & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 text-black hover:text-mango-500 transition-colors font-mono"
                onClick={() => setActiveDropdown(activeDropdown === 'language' ? null : 'language')}
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{currentLanguage.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {activeDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-2 pixel-card bg-white border-black z-50">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        changeLanguage('en');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                        currentLanguage === 'en' 
                          ? 'bg-mango-500 text-black' 
                          : 'text-black hover:bg-mango-50 hover:text-mango-500'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('es');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                        currentLanguage === 'es' 
                          ? 'bg-mango-500 text-black' 
                          : 'text-black hover:bg-mango-50 hover:text-mango-500'
                      }`}
                    >
                      Español
                    </button>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="pixel-button px-6 py-2 font-pixel text-sm">
              GET STARTED
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 border-2 border-black hover:bg-mango-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t-2 border-black mt-2 pt-4 pb-4 pixel-card bg-white">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block py-2 px-4 font-pixel text-sm transition-colors ${
                      location.pathname === item.href 
                        ? 'text-mango-500 bg-mango-50' 
                        : 'text-black hover:text-mango-500 hover:bg-mango-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-center space-x-2 py-1 px-4 text-sm text-gray-600 hover:text-mango-500 transition-colors font-mono"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>{dropdownItem.icon}</span>
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="py-2 px-4 border-t border-gray-200 mt-4">
                <div className="font-pixel text-sm text-black mb-2">LANGUAGE</div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      changeLanguage('en');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-mono ${
                      currentLanguage === 'en' ? 'text-mango-500' : 'text-gray-600'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('es');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-mono ${
                      currentLanguage === 'es' ? 'text-mango-500' : 'text-gray-600'
                    }`}
                  >
                    ES
                  </button>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="block mt-4 mx-4 pixel-button text-center py-2 font-pixel text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                GET STARTED
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

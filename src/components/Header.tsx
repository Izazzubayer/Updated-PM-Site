import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
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
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Brand Identity Design', href: '/services/brand-identity', icon: '🎨' },
        { name: 'Social Media Branding', href: '/services/social-media', icon: '📱' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design', icon: '💻' },
        { name: 'Website Development', href: '/services/website-development', icon: '🌐' },
        { name: 'Content Creation', href: '/services/content-creation', icon: '✍️' },
        { name: 'Consultation & Strategy', href: '/services/consultation-strategy', icon: '💡' }
      ]
    },
    { 
      name: 'Portfolio', 
      href: '/portfolio',
      dropdown: [
        { 
          name: 'Aizaan Ecommerce & Rebranding', 
          href: '/portfolio/aizaan-ecommerce-rebranding', 
          icon: '🧕🏻',
        },
        { 
          name: 'Santoku Knife Store UX Study', 
          href: '/portfolio/santoku-knife-store-ux', 
          icon: '🔪',
        },
        { 
          name: 'Puffy Homepage Redesign', 
          href: '/portfolio/puffy-homepage-redesign', 
          icon: '💤',
        },
        { 
          name: 'SFU Snap App Redesign', 
          href: '/portfolio/sfu-snap-app-redesign', 
          icon: '📱',
        }
      ]
    },
    { 
      name: 'Support', 
      href: '/support',
      dropdown: [
        { name: 'FAQ', href: '/support/faq', icon: '❓' },
        { name: 'About Us', href: '/support/about-us', icon: '👥' },
        { name: 'Contact Us', href: '/support/contact-us', icon: '📧' }
      ]
    }
  ];

  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white border-b-3 border-black' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
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
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.dropdown ? (
                  <button
                    type="button"
                    className={`group flex items-center space-x-1 font-pixel text-sm transition-all duration-200 bg-transparent border-none outline-none cursor-pointer
                      ${activeDropdown === item.name ? 'text-[#FFA500] font-bold' : 'text-black font-normal'}
                      hover:text-[#FFA500] hover:font-bold
                    `}
                    style={{ position: 'relative' }}
                    onClick={e => e.preventDefault()}
                  >
                    <span className="relative group-hover:scale-105 transition-transform duration-200">
                      {item.name}
                      <span
                        className={`block h-0.5 transition-all duration-200 origin-left
                          ${activeDropdown === item.name ? 'bg-[#FFA500] w-full scale-x-100' : 'bg-[#FFA500] w-0 group-hover:w-full group-hover:scale-x-100'}`}
                        style={{ marginTop: '2px' }}
                      ></span>
                    </span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`group flex items-center space-x-1 font-pixel text-sm transition-all duration-200
                      ${location.pathname === item.href ? 'text-[#FFA500] font-bold' : 'text-black font-normal'}
                      hover:text-[#FFA500] hover:font-bold
                    `}
                    style={{ position: 'relative' }}
                  >
                    <span className="relative group-hover:scale-105 transition-transform duration-200">
                      {item.name}
                      <span
                        className={`block h-0.5 transition-all duration-200 origin-left
                          ${location.pathname === item.href ? 'bg-[#FFA500] w-full scale-x-100' : 'bg-[#FFA500] w-0 group-hover:w-full group-hover:scale-x-100'}`}
                        style={{ marginTop: '2px' }}
                      ></span>
                    </span>
                  </Link>
                )}
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 pt-1 w-64 z-[70]"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="bg-white border-2 border-black shadow-lg animate-fade-in">
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-center space-x-3 px-4 py-3 text-sm text-black font-mono group transition-colors duration-200 hover:bg-[#FFA500] hover:text-white"
                          >
                            <span className="text-lg">{dropdownItem.icon}</span>
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
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
                <div className="absolute top-full right-0 mt-2 bg-white border-2 border-black shadow-lg z-[70]">
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
                        changeLanguage('fr');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                        currentLanguage === 'fr' 
                          ? 'bg-mango-500 text-black' 
                          : 'text-black hover:bg-mango-50 hover:text-mango-500'
                      }`}
                    >
                      Français
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
                    <button
                      onClick={() => {
                        changeLanguage('bn');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                        currentLanguage === 'bn' 
                          ? 'bg-mango-500 text-black' 
                          : 'text-black hover:bg-mango-50 hover:text-mango-500'
                      }`}
                    >
                      বাংলা
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('hi');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                        currentLanguage === 'hi' 
                          ? 'bg-mango-500 text-black' 
                          : 'text-black hover:bg-mango-50 hover:text-mango-500'
                      }`}
                    >
                      हिन्दी
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('ko');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                        currentLanguage === 'ko' 
                          ? 'bg-mango-500 text-black' 
                          : 'text-black hover:bg-mango-50 hover:text-mango-500'
                      }`}
                    >
                      한국어
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('ja');
                        setActiveDropdown(null);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
                        currentLanguage === 'ja' 
                          ? 'bg-mango-500 text-black' 
                          : 'text-black hover:bg-mango-50 hover:text-mango-500'
                      }`}
                    >
                      日本語
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              className="pixel-button px-6 py-2 font-pixel text-sm hover:animate-pixel-shift"
              onClick={() => {
                if (location.pathname === '/') {
                  const el = document.getElementById('quick-intake-form');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                } else {
                  navigate('/', { replace: false });
                  setTimeout(() => {
                    const el = document.getElementById('quick-intake-form');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 500);
                }
              }}
            >
              {t('getStarted')}
            </button>
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
          <div className="lg:hidden border-t-2 border-black mt-2 pt-4 pb-4 bg-white border-2 border-black shadow-lg">
            <nav className="space-y-2 pl-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="group">
                      <button
                        type="button"
                        className={`group flex items-center space-x-1 font-pixel text-sm transition-all duration-200 bg-transparent border-none outline-none cursor-pointer
                          ${activeDropdown === item.name ? 'text-[#FFA500] font-bold' : 'text-black font-normal'}
                          hover:text-[#FFA500] hover:font-bold
                        `}
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span className="relative group-hover:scale-105 transition-transform duration-200">
                          {item.name}
                          <span
                            className={`block h-0.5 transition-all duration-200 origin-left
                              ${activeDropdown === item.name ? 'bg-[#FFA500] w-full scale-x-100' : 'bg-[#FFA500] w-0 group-hover:w-full group-hover:scale-x-100'}`}
                            style={{ marginTop: '2px' }}
                          ></span>
                        </span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-8 pl-2 mt-2 space-y-1">
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
                  ) : (
                    <Link
                      to={item.href}
                      className={`group flex items-center space-x-1 font-pixel text-sm transition-all duration-200
                        ${location.pathname === item.href ? 'text-[#FFA500] font-bold' : 'text-black font-normal'}
                        hover:text-[#FFA500] hover:font-bold
                      `}
                      style={{ position: 'relative' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="relative group-hover:scale-105 transition-transform duration-200">
                        {item.name}
                        <span
                          className={`block h-0.5 transition-all duration-200 origin-left
                            ${location.pathname === item.href ? 'bg-[#FFA500] w-full scale-x-100' : 'bg-[#FFA500] w-0 group-hover:w-full group-hover:scale-x-100'}`}
                          style={{ marginTop: '2px' }}
                        ></span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="py-2 px-4 border-t border-gray-200 mt-4">
                <div className="font-pixel text-sm text-black mb-2">LANGUAGE</div>
                <div className="flex flex-wrap gap-2">
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
                      changeLanguage('fr');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-mono ${
                      currentLanguage === 'fr' ? 'text-mango-500' : 'text-gray-600'
                    }`}
                  >
                    FR
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
                  <button
                    onClick={() => {
                      changeLanguage('bn');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-mono ${
                      currentLanguage === 'bn' ? 'text-mango-500' : 'text-gray-600'
                    }`}
                  >
                    BN
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('hi');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-mono ${
                      currentLanguage === 'hi' ? 'text-mango-500' : 'text-gray-600'
                    }`}
                  >
                    HI
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('ko');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-mono ${
                      currentLanguage === 'ko' ? 'text-mango-500' : 'text-gray-600'
                    }`}
                  >
                    KO
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('ja');
                      setIsMenuOpen(false);
                    }}
                    className={`text-sm font-mono ${
                      currentLanguage === 'ja' ? 'text-mango-500' : 'text-gray-600'
                    }`}
                  >
                    JA
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

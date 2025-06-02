
import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-lg font-semibold text-gray-900">The Kow Company Ltd</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#products" className="text-gray-700 hover:text-green-500 transition-colors">Products</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition-colors">
                <span>Integrations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#career" className="text-gray-700 hover:text-green-500 transition-colors">Career</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition-colors">
                <span>Support</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#blog" className="text-gray-700 hover:text-green-500 transition-colors">Blog</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Book a Call
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500 transition-colors">
              <Globe className="w-4 h-4" />
              <span>Language</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <a href="#services" className="block text-gray-700 hover:text-green-500">Services</a>
              <a href="#products" className="block text-gray-700 hover:text-green-500">Products</a>
              <a href="#integrations" className="block text-gray-700 hover:text-green-500">Integrations</a>
              <a href="#career" className="block text-gray-700 hover:text-green-500">Career</a>
              <a href="#support" className="block text-gray-700 hover:text-green-500">Support</a>
              <a href="#blog" className="block text-gray-700 hover:text-green-500">Blog</a>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

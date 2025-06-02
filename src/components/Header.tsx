
import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-lg font-semibold text-gray-900">The Kow Company Ltd</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            >
              Services
            </Link>
            <Link 
              to="/products" 
              className={`transition-colors ${isActive('/products') ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            >
              Products
            </Link>
            <Link 
              to="/integrations" 
              className={`transition-colors ${isActive('/integrations') ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            >
              Integrations
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            >
              Pricing
            </Link>
            <Link 
              to="/career" 
              className={`transition-colors ${isActive('/career') ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            >
              Career
            </Link>
            <Link 
              to="/support" 
              className={`transition-colors ${isActive('/support') ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            >
              Support
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${isActive('/blog') ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/signin"
              className="text-gray-700 hover:text-green-500 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/signup"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Sign Up
            </Link>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-green-500 transition-colors">
              <Globe className="w-4 h-4" />
              <span>EN</span>
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
              <Link to="/services" className="block text-gray-700 hover:text-green-500">Services</Link>
              <Link to="/products" className="block text-gray-700 hover:text-green-500">Products</Link>
              <Link to="/integrations" className="block text-gray-700 hover:text-green-500">Integrations</Link>
              <Link to="/pricing" className="block text-gray-700 hover:text-green-500">Pricing</Link>
              <Link to="/career" className="block text-gray-700 hover:text-green-500">Career</Link>
              <Link to="/support" className="block text-gray-700 hover:text-green-500">Support</Link>
              <Link to="/blog" className="block text-gray-700 hover:text-green-500">Blog</Link>
              <div className="pt-4 border-t space-y-4">
                <Link to="/signin" className="block text-gray-700 hover:text-green-500">Sign In</Link>
                <Link to="/signup" className="block w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-center">
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

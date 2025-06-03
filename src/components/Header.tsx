
import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe, Menu, X, Camera, Video, Box, Monitor, Code, Bot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
      title: "Image Editing Services",
      description: "Professional photo editing and retouching",
      href: "/services/image-editing"
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Complete video production services",
      href: "/services/video-production"
    },
    {
      icon: Box,
      title: "3D Modeling",
      description: "Stunning 3D models and visualizations",
      href: "/services/3d-modeling"
    },
    {
      icon: Monitor,
      title: "CGI Rendering",
      description: "High-quality CGI rendering services",
      href: "/services/cgi-rendering"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions",
      href: "/services/software-development"
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions",
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[active]:bg-gray-100 data-[state=open]:bg-gray-100">
                    Services
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
              </NavigationMenuList>
            </NavigationMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition-colors outline-none">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border shadow-lg">
                {products.map((product) => (
                  <DropdownMenuItem key={product.title} asChild className="cursor-pointer">
                    <Link
                      to={product.href}
                      className="flex items-center space-x-3 p-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <product.icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.title}</div>
                        <p className="text-xs text-gray-500">{product.description}</p>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Services</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link 
                      key={service.title}
                      to={service.href} 
                      className="block text-gray-700 hover:text-green-500"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900">Products</div>
                <div className="pl-4 space-y-2">
                  {products.map((product) => (
                    <Link 
                      key={product.title}
                      to={product.href} 
                      className="block text-gray-700 hover:text-green-500"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
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

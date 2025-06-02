
import React from 'react';
import { Book, Video, Download, ExternalLink, FileText, Code } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Getting Started",
      icon: Book,
      color: "green",
      resources: [
        {
          title: "Quick Start Guide",
          description: "Get up and running with our products in minutes",
          type: "guide",
          icon: FileText
        },
        {
          title: "Product Overview Video",
          description: "Watch a comprehensive overview of all our tools",
          type: "video",
          icon: Video
        },
        {
          title: "Best Practices Guide",
          description: "Learn the best ways to use our tools effectively",
          type: "guide",
          icon: Book
        }
      ]
    },
    {
      title: "Tutorials",
      icon: Video,
      color: "blue",
      resources: [
        {
          title: "AI Image Enhancement Tutorial",
          description: "Step-by-step guide to using Retouched AI",
          type: "video",
          icon: Video
        },
        {
          title: "2D to 3D Conversion Workshop",
          description: "Master the art of converting images to 3D models",
          type: "video",
          icon: Video
        },
        {
          title: "Automation Workflows",
          description: "Set up automated workflows for your projects",
          type: "guide",
          icon: FileText
        }
      ]
    },
    {
      title: "API Documentation",
      icon: Code,
      color: "purple",
      resources: [
        {
          title: "API Reference",
          description: "Complete documentation for our REST APIs",
          type: "documentation",
          icon: Code
        },
        {
          title: "SDK Downloads",
          description: "Download SDKs for popular programming languages",
          type: "download",
          icon: Download
        },
        {
          title: "Integration Examples",
          description: "Sample code and integration examples",
          type: "guide",
          icon: Code
        }
      ]
    },
    {
      title: "Downloads",
      icon: Download,
      color: "orange",
      resources: [
        {
          title: "Desktop Application",
          description: "Download our desktop app for offline editing",
          type: "download",
          icon: Download
        },
        {
          title: "Sample Assets",
          description: "Free sample images and 3D models for testing",
          type: "download",
          icon: Download
        },
        {
          title: "Brand Assets",
          description: "Logos, icons, and brand guidelines",
          type: "download",
          icon: Download
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "bg-green-100 text-green-500",
      blue: "bg-blue-100 text-blue-500",
      purple: "bg-purple-100 text-purple-500",
      orange: "bg-orange-100 text-orange-500"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const getTypeIcon = (type: string) => {
    const iconMap = {
      guide: FileText,
      video: Video,
      documentation: Code,
      download: Download
    };
    return iconMap[type as keyof typeof iconMap] || FileText;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get the most out of our products. From tutorials to API documentation, we've got you covered.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${getColorClasses(category.color)}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => {
                    const TypeIcon = getTypeIcon(resource.type);
                    
                    return (
                      <div 
                        key={resourceIndex}
                        className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-200 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                            <TypeIcon className="w-5 h-5 text-gray-600 group-hover:text-green-500 transition-colors" />
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm">{resource.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Resources</h2>
              <p className="text-lg text-gray-600">Most accessed guides and tutorials by our community.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Video className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-green-600">Most Watched</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI Image Enhancement Masterclass
                </h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive 45-minute tutorial covering advanced techniques for professional image enhancement.
                </p>
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                  Watch Tutorial →
                </button>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Book className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-blue-600">Most Downloaded</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Complete API Integration Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step instructions for integrating our APIs into your applications with code examples.
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Download Guide →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with other users, share your creations, and get help from our community of creators and developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Join Discord
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-500 hover:text-green-500 transition-colors">
                Follow on Twitter
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;

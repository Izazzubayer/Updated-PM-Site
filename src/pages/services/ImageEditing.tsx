
import React from 'react';
import { Star, ArrowRight, Check, Users, Image, Clock, FileImage, Layers, Zap, BarChart3 } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ImageEditing = () => {
  const features = [
    {
      icon: FileImage,
      title: "Background Removal",
      description: "Clean background removal with precise edge detection and professional quality output for e-commerce and marketing materials."
    },
    {
      icon: Layers,
      title: "Professional Retouching",
      description: "Advanced retouching techniques including skin smoothing, blemish removal, and color correction for portrait and product photography."
    },
    {
      icon: Zap,
      title: "Ghost Mannequin Effect",
      description: "Create professional product photos with invisible mannequin effect, perfect for clothing and apparel photography."
    },
    {
      icon: Image,
      title: "Product Masking",
      description: "Precise clipping path and masking services for product catalogs, ensuring clean cutouts and professional presentation."
    },
    {
      icon: BarChart3,
      title: "Bulk Processing",
      description: "Handle large volumes of images efficiently with consistent quality and fast turnaround times for enterprise clients."
    },
    {
      icon: Clock,
      title: "Image Optimization",
      description: "Optimize images for web and print with proper compression, resizing, and format conversion while maintaining quality."
    }
  ];

  const orderSteps = [
    {
      step: 1,
      title: "Upload",
      description: "Share your images"
    },
    {
      step: 2,
      title: "Brief",
      description: "Describe your requirements"
    },
    {
      step: 3,
      title: "Process",
      description: "We edit your images"
    },
    {
      step: 4,
      title: "Review",
      description: "Check & approve results"
    },
    {
      step: 5,
      title: "Deliver",
      description: "Download final files"
    },
    {
      step: 6,
      title: "Support",
      description: "Ongoing assistance"
    }
  ];

  const stats = [
    { value: "500K+", label: "Images Edited" },
    { value: "50K+", label: "Happy Clients" },
    { value: "3M+", label: "Projects Completed" },
    { value: "600K+", label: "Hours Saved" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Fashion Forward",
      rating: 5,
      text: "The quality of image editing is exceptional. They transformed our product photos and significantly improved our conversion rates."
    },
    {
      name: "Mike Chen",
      role: "E-commerce Manager", 
      company: "TechGear Pro",
      rating: 5,
      text: "Fast turnaround, professional quality, and excellent customer service. They handle our bulk image processing perfectly."
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "Lifestyle Co.",
      rating: 5,
      text: "Their attention to detail is remarkable. Every image comes back looking professional and ready for our marketing campaigns."
    },
    {
      name: "David Kim",
      role: "Creative Director",
      company: "Studio Plus",
      rating: 5,
      text: "We've been using their services for over a year. Consistent quality and reliable delivery every single time."
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "Home Essentials",
      rating: 5,
      text: "The ghost mannequin effect they create for our clothing line is flawless. It's elevated our brand image significantly."
    },
    {
      name: "Alex Wong",
      role: "Photography Lead",
      company: "Visual Arts Inc.",
      rating: 5,
      text: "Professional retouching that maintains the natural look while enhancing the overall quality. Highly recommended."
    }
  ];

  const integrations = [
    { name: "Shopify", logo: "/placeholder.svg" },
    { name: "Google Drive", logo: "/placeholder.svg" },
    { name: "Dropbox", logo: "/placeholder.svg" },
    { name: "Adobe", logo: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.9/5 from 1000+ reviews</span>
                </div>
                
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Professional Image Enhancement at Scale
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  From background removal to advanced retouching, we deliver high-quality image editing services that help your business stand out in the digital marketplace.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                    Get Started
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                    View Portfolio
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Free trial available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">24-hour turnaround available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Before & After Gallery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                End-to-end image editing services with world-class expertise and cutting-edge technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Guide Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Order Guide</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Review our simple process and discover how to have your images edited professionally by our team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
              {orderSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Success Record Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Record</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how we've helped countless businesses achieve their image editing goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apps & Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apps & Integration</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Industry-leading software and experienced talent for exceptional results
              </p>
            </div>

            <div className="flex justify-center items-center space-x-12">
              {integrations.map((integration, index) => (
                <div key={index} className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center">
                  <span className="text-gray-500 font-semibold">{integration.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Success stories from our growing editing community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Flexible plans built with pricing that grows with you. No setup fees or commitments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-gray-900 mb-6">$29<span className="text-lg font-normal text-gray-600">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>50 images/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Basic editing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>48-hour delivery</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Standard Plan */}
              <div className="bg-green-500 text-white rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Standard</h3>
                <div className="text-3xl font-bold mb-6">$99<span className="text-lg font-normal opacity-80">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5" />
                    <span>200 images/month</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5" />
                    <span>Advanced editing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5" />
                    <span>24-hour delivery</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5" />
                    <span>Quality assurance</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-green-500 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
                <div className="text-3xl font-bold text-gray-900 mb-6">$299<span className="text-lg font-normal text-gray-600">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Unlimited images</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Premium editing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>12-hour delivery</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Dedicated manager</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom workflows</span>
                  </li>
                </ul>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ImageEditing;

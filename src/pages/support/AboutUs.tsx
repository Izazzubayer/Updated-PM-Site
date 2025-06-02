
import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and creative technology."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together toward common goals."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our products to our customer service."
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We're committed to creating technology that makes a positive impact on our users and society."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation and AI development.",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png"
    },
    {
      name: "Mike Chen",
      role: "CTO",
      bio: "Technical architect specializing in machine learning and scalable systems.",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png"
    },
    {
      name: "Alex Rivera",
      role: "Head of Design",
      bio: "Creative director passionate about user experience and visual storytelling.",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About The Kow Company
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a creative technology company dedicated to democratizing professional-grade tools through the power of artificial intelligence.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  To empower creators, businesses, and individuals with cutting-edge AI technology that makes professional-quality results accessible to everyone, regardless of their technical expertise.
                </p>
                <p className="text-lg text-gray-600">
                  Founded in 2020, we've been at the forefront of AI innovation in creative technology, developing tools that transform how people work with images, videos, and 3D content.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">50K+</div>
                    <div className="text-gray-600">Happy Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">1M+</div>
                    <div className="text-gray-600">Images Processed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">99.9%</div>
                    <div className="text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">24/7</div>
                    <div className="text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These core values guide every decision we make and every product we build.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The brilliant minds behind our innovative solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to be part of the future of creative technology? Explore our products or join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors">
                Try Our Products
              </button>
              <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-500 transition-colors">
                View Careers
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

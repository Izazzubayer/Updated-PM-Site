
import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Image Editing",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we edit and enhance images, making professional-quality results accessible to everyone.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "2D",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png",
      readTime: "5 min read"
    },
    {
      title: "Creating Stunning 3D Models from 2D Images",
      excerpt: "Learn the techniques and technologies behind converting flat images into immersive 3D models for e-commerce and virtual experiences.",
      author: "Mike Chen",
      date: "2024-01-10",
      category: "3D",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png",
      readTime: "8 min read"
    },
    {
      title: "Automation in Creative Workflows",
      excerpt: "Discover how automation tools are streamlining creative processes and helping designers focus on what matters most - creativity.",
      author: "Alex Rivera",
      date: "2024-01-05",
      category: "All Posts",
      image: "/lovable-uploads/19e006a2-4b3a-425b-8304-8bc9e9240e55.png",
      readTime: "6 min read"
    }
  ];

  const categories = ["All Posts", "2D", "3D"];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and updates from the world of creative technology and AI innovation.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    index === 0 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                        <Calendar className="w-4 h-4 ml-2" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      
                      <button className="group/btn flex items-center space-x-1 text-green-500 font-medium hover:text-green-600 transition-colors">
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, tutorials, and product updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;

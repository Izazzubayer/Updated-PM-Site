import React from 'react';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-green-500 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium font-product">Ready to Transform Your Business?</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 font-product leading-tight">
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 font-product leading-relaxed">
            Join thousands of satisfied clients who have transformed their digital presence with our innovative solutions. 
            Your success story starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-white text-purple-600 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center space-x-3 font-product">
              <Rocket className="w-6 h-6" />
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-sm font-product">
              <span>Schedule a Call</span>
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold font-product">24/7</div>
              <div className="text-sm font-product">Support</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold font-product">30-Day</div>
              <div className="text-sm font-product">Money Back</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold font-product">Free</div>
              <div className="text-sm font-product">Consultation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

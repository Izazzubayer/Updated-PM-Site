import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

const Santoku = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20">
    <SEO
      title="Santoku Knife Store UX Study - E-commerce Optimization Case Study"
      description="Explore our UX study for Santoku, a premium knife store. Learn how we optimized the e-commerce experience and improved conversion rates through user research and design improvements."
      keywords="Santoku, knife store UX, e-commerce UX study, user experience case study, conversion optimization, Pixel Mango portfolio"
      url="/portfolio/santoku-knife-store-ux"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Santoku Knife Store UX', url: '/portfolio/santoku-knife-store-ux' }
      ]}
    />
    <h1 className="text-3xl font-pixel text-mango-500 mb-6">Santoku Knife Store UX Study</h1>
    <p className="text-lg text-gray-700 font-mono mb-6 text-center max-w-xl">
      We'll post the case study soon.<br />
      In the meanwhile, read the case study of Aizaan.
    </p>
    <Link
      to="/portfolio/aizaan-ecommerce-rebranding"
      className="pixel-button px-6 py-3 font-pixel text-white bg-mango-500 hover:bg-mango-600 rounded transition"
    >
      Read Aizaan Case Study
    </Link>
  </div>
);

export default Santoku; 
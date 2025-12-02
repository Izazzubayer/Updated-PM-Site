import React from 'react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

const Puffy = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-20">
    <SEO
      title="Puffy Homepage Redesign - Conversion-Focused Design Case Study"
      description="See how we redesigned Puffy's homepage to improve user experience and conversion rates. A case study on modern homepage design principles and user engagement optimization."
      keywords="Puffy, homepage redesign, conversion optimization, landing page design, UX design case study, Pixel Mango portfolio"
      url="/portfolio/puffy-homepage-redesign"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Puffy Homepage Redesign', url: '/portfolio/puffy-homepage-redesign' }
      ]}
    />
    <h1 className="text-3xl font-pixel text-mango-500 mb-6">Puffy Homepage Redesign</h1>
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

export default Puffy; 
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Masonry Gallery Component
const MasonryGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to previous image
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Navigate to next image
  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!selectedImage) return;
      
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        goToNext();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  // Set current index when image is selected
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openModal(image, index)}
          >
            <div className="relative overflow-hidden rounded-lg border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            {image.title && (
              <p className="mt-2 text-sm font-pixel text-gray-700">{image.title}</p>
            )}

          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain rounded-lg"
            />
            

            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-pixel text-sm hover:bg-gray-200 transition-colors"
            >
              ×
            </button>
            
            {/* Previous arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            
            {/* Next arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            )}
            

          </div>
        </div>
      )}
    </>
  );
};

const BlockCard = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <section className={`pixel-card bg-white p-8 mb-12 rounded-lg border-mango-500 shadow-lg ${className}`}>
    <h2 className="font-pixel text-2xl text-mango-500 mb-6">{title}</h2>
    <div className="[&>p]:mb-3 [&_ul]:pl-6">{children}</div>
  </section>
);

const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-5">
    <h3 className="font-pixel text-lg text-black mb-3">{title}</h3>
    <div className="font-mono text-gray-700 leading-relaxed text-sm">{children}</div>
  </div>
);

const Aizaan = () => {
  // Aizaan portfolio gallery images organized by category
  const galleryImages = [
    // Logo & Brand Identity
    {
      src: "/assets/aizaan-logo.png",
      alt: "Aizaan Final Logo Design",
      title: "Final Logo Design",
      category: "Logo Design"
    },
    {
      src: "/assets/Logo Variations during ideation.png",
      alt: "Aizaan Logo Variations and Development Process",
      title: "Logo Development Process",
      category: "Logo Design"
    },
    
    // Brand Guidelines & Assets
    {
      src: "/assets/Primary Branding Colors.png",
      alt: "Aizaan Brand Color Palette System",
      title: "Brand Color Palette",
      category: "Brand Guidelines"
    },
    {
      src: "/assets/Font.png",
      alt: "Aizaan Typography System and Font Guidelines",
      title: "Typography System",
      category: "Brand Guidelines"
    },
    {
      src: "/assets/Patterns.png",
      alt: "Aizaan Brand Pattern and Design Elements",
      title: "Brand Pattern System",
      category: "Brand Guidelines"
    },
    
    // Print Design & Collateral
    {
      src: "/assets/Two business cards mockup with natural colors for minimal branding design concept (1).png",
      alt: "Aizaan Business Cards in Natural Setting",
      title: "Business Cards - Natural Mockup",
      category: "Print Design"
    },
    {
      src: "/assets/Business card variation.png",
      alt: "Aizaan Business Card Design Variations",
      title: "Business Card Variations",
      category: "Print Design"
    },
    {
      src: "/assets/Pair of fashion label tag mockups 1.png",
      alt: "Aizaan Fashion Label Tags Design",
      title: "Product Label Tags",
      category: "Print Design"
    },
    // {
    //   src: "/assets/Pair of fashion label tag mockups 1 copy.png",
    //   alt: "Aizaan Alternative Label Tag Design",
    //   title: "Alternative Label Tags",
    //   category: "Print Design"
    // },
    {
      src: "/assets/Label on clothing fabric 1.png",
      alt: "Aizaan Clothing Fabric Label Application",
      title: "Fabric Label Application",
      category: "Print Design"
    },
    
    // Packaging Design
    {
      src: "/assets/Shopping Bag Mockup.png",
      alt: "Aizaan Branded Shopping Bags",
      title: "Branded Shopping Bags",
      category: "Packaging"
    },
    {
      src: "/assets/Poly Mailer.png",
      alt: "Aizaan Shipping Poly Mailer Design",
      title: "Shipping Poly Mailers",
      category: "Packaging"
    },
    {
      src: "/assets/Branded Delivery Box Design.png",
      alt: "Aizaan Branded Delivery Box Design",
      title: "Branded Shipping Box",
      category: "Packaging"
    },
    {
      src: "/assets/Tote Bag.png",
      alt: "Aizaan Branded Tote Bag Design",
      title: "Branded Tote Bag",
      category: "Merchandise"
    },
    
    // Digital & Social Media
    {
      src: "/assets/Instagram Board.png",
      alt: "Aizaan Instagram Social Media Templates",
      title: "Instagram Templates",
      category: "Social Media"
    },
    {
      src: "/assets/Facebook Board.png",
      alt: "Aizaan Facebook Social Media Templates",
      title: "Facebook Templates", 
      category: "Social Media"
    },
    
    // Web Design
    {
      src: "/assets/website mockup.png",
      alt: "Aizaan E-commerce Website Design Mockup",
      title: "E-commerce Website Design",
      category: "Web Design"
    },
    
    // Brand Strategy & Mood
    {
      src: "/assets/Moodboard.png",
      alt: "Aizaan Brand Mood Board and Visual Identity",
      title: "Brand Mood Board",
      category: "Brand Strategy"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Logo Design", "Brand Guidelines", "Print Design", "Packaging", "Merchandise", "Web Design", "Social Media", "Brand Strategy"];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
  <div className="min-h-screen bg-mango-50 flex flex-col">
    <Header />

    <main className="flex-1 pt-28 pb-20 px-2 sm:px-6 flex flex-col items-center pixel-grid relative">
        <div className="max-w-6xl w-full">
        {/* Hero Section */}
        <section className="mb-14">
          <div className="pixel-card bg-white p-10 md:p-16 rounded-lg flex flex-col items-center border-mango-500 shadow-lg text-center">
            <img 
              src="/assets/aizaan-logo.png" 
              alt="Aizaan Logo" 
              className="w-32 h-auto md:w-44 mb-6" 
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <span className="inline-block bg-mango-500 text-black font-pixel px-4 py-2 text-base mb-6">
                PORTFOLIO SHOWCASE
            </span>
              <h1 className="text-4xl md:text-5xl font-pixel text-mango-500 mb-3">
              Aizaan Ecommerce &amp; Rebranding
            </h1>
              <p className="text-sm text-gray-700 font-mono mb-0">Complete Brand Transformation Gallery</p>
          </div>
        </section>

          {/* Project Overview - Kept from original */}
        <BlockCard title="Project Overview">
          <SubSection title="Introduction">
            <p>
              Aizaan, a retailer of hijabs, abayas, and modest fashion accessories in Dhaka, sought to redefine its brand identity and launch a modern e-commerce platform to capture the growing online market for modest fashion.
            </p>
          </SubSection>
          <SubSection title="Goal">
            <ul className="list-disc ">
              <li>Create a cohesive, elegant brand identity</li>
              <li>Deliver a seamless online shopping experience</li>
              <li>Increase visibility, drive sales, and empower independent management</li>
            </ul>
            <p className="mt-3">
              The primary goal was a cohesive, elegant brand identity and seamless shopping that would increase Aizaan's visibility, drive sales, and empower the team to manage the platform independently.
            </p>
          </SubSection>
          <SubSection title="Problems">
            <ul className="list-disc ">
              <li>Outdated branding lacked cohesion, failing to resonate with modern consumers.</li>
              <li>Website was not user-friendly, with poor navigation and no mobile optimization.</li>
              <li>Limited social media presence hindered customer engagement and brand awareness.</li>
            </ul>
          </SubSection>
          <SubSection title="Challenges">
            <ul className="list-disc ">
              <li>Tight timeline for exhibitions required rapid iteration and delivery.</li>
              <li>Balancing aesthetic elegance with functional simplicity.</li>
              <li>Ensuring the team could manage the site with minimal training.</li>
            </ul>
          </SubSection>
          <SubSection title="Responsibilities">
            <ul className="list-disc ">
              <li>Conducted stakeholder interviews to define requirements.</li>
              <li>Designed new logo, brand guidelines, and social media assets.</li>
              <li>Created wireframes, prototypes, and high-fidelity mockups.</li>
              <li>Developed the site on WordPress (WooCommerce), integrated payments, delivery and sales tracking.</li>
            </ul>
          </SubSection>
        </BlockCard>

          {/* Portfolio Stats */}
          <BlockCard title="Project Scope & Deliverables">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
                <div className="text-sm text-gray-600 font-mono">Design Assets</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
                <div className="text-sm text-gray-600 font-mono">Categories</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600 font-mono">Brand Coverage</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-sm text-gray-600 font-mono">Months Duration</div>
              </div>
            </div>
          </BlockCard>

          {/* Design Gallery */}
          <BlockCard title="Complete Brand Transformation Gallery">
            <p className="mb-8 text-gray-600 font-mono">
              Explore the complete transformation of Aizaan's brand identity through our comprehensive design system. Filter by category to view specific aspects of the rebranding project.
            </p>
            
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium font-mono transition-all ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
                </div>
              <div className="text-center mt-4 text-sm text-gray-500 font-mono">
                Showing {filteredImages.length} of {galleryImages.length} assets
              </div>
            </div>
            
            <MasonryGallery images={filteredImages} />
        </BlockCard>

        {/* Project Impact */}
        <BlockCard title="Project Impact" className="bg-white border-mango-500">
            <p className="text-gray-600 font-mono">
              To Be Posted Soon.
            </p>
        </BlockCard>
      </div>
    </main>
    <Footer />
  </div>
);
};

export default Aizaan;


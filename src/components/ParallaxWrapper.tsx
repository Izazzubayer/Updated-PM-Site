
import React, { useEffect, useRef } from 'react';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  depth: number; // 0-1, where 1 is normal speed and lower values are slower
  className?: string;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ 
  children, 
  depth, 
  className = '' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const yPos = -(scrolled - elementTop) * (1 - depth);
        const scale = 1 + (scrolled - elementTop) * 0.0001 * (1 - depth);
        
        element.style.transform = `translate3d(0, ${yPos}px, 0) scale(${Math.min(scale, 1.1)})`;
      }
    };

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [depth]);

  return (
    <div 
      ref={ref}
      className={`relative will-change-transform ${className}`}
      style={{ 
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxWrapper;

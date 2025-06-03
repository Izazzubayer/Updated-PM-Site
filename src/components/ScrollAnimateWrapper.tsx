
import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimateWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'float';
}

const ScrollAnimateWrapper: React.FC<ScrollAnimateWrapperProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-left':
        return 'animate-slide-in-left';
      case 'slide-right':
        return 'animate-slide-in-right';
      case 'scale-in':
        return 'animate-scale-in';
      case 'float':
        return 'animate-float';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ${
        isVisible ? `opacity-100 ${getAnimationClass()}` : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimateWrapper;

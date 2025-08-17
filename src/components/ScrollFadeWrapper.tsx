import React, { useRef, ReactNode } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import { useIsMobile } from '../hooks/use-mobile';

interface ScrollFadeWrapperProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  duration?: number;
}

const ScrollFadeWrapper: React.FC<ScrollFadeWrapperProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  duration = 0.8
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { isVisible } = useScrollFade(ref, { threshold, triggerOnce });

  const getTransform = () => {
    // On mobile, don't apply any transform
    if (isMobile || isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 60px, 0)';
      case 'down':
        return 'translate3d(0, -60px, 0)';
      case 'left':
        return 'translate3d(60px, 0, 0)';
      case 'right':
        return 'translate3d(-60px, 0, 0)';
      default:
        return 'translate3d(0, 60px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isMobile || isVisible ? 1 : 0,
        transform: getTransform(),
        transition: isMobile ? 'none' : `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        willChange: isMobile ? 'auto' : 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeWrapper; 
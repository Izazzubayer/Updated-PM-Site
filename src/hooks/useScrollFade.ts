import { useEffect, useState, RefObject } from 'react';

interface ScrollFadeOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollFade = (
  ref: RefObject<HTMLElement>,
  options: ScrollFadeOptions = {}
) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.unobserve(element);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, threshold, rootMargin, triggerOnce]);

  return { isVisible, scrollY };
};

export const useParallaxFade = (ref: RefObject<HTMLElement>, speed: number = 0.5) => {
  const [transform, setTransform] = useState('translateY(0px)');
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrolled = window.scrollY;

      // Calculate if element is in viewport
      const elementBottom = elementTop + elementHeight;
      const viewportTop = scrolled;
      const viewportBottom = scrolled + windowHeight;

      if (elementBottom >= viewportTop && elementTop <= viewportBottom) {
        // Element is in viewport
        const relativePos = (scrolled - elementTop + windowHeight) / (windowHeight + elementHeight);
        const yPos = -(scrolled - elementTop) * speed;
        const opacityValue = Math.max(0, Math.min(1, 1 - Math.abs(relativePos - 0.5) * 2));
        
        setTransform(`translateY(${yPos}px)`);
        setOpacity(opacityValue);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed]);

  return { transform, opacity };
}; 
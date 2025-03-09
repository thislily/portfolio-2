import React, { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function useScrollAnimation(threshold = 0.2) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return [ref, controls];
}

export function useParallaxAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const calculateParallaxValue = (speed, offset = 0) => {
    return -(scrollY * speed / 100) + offset;
  };

  return { scrollY, calculateParallaxValue };
}
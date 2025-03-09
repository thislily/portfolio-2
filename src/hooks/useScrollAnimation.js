/**
 * @name useScrollAnimation
 * @description A custom hook that allows for easy creation of scroll animations using Framer Motion.
 * The hook uses the useInView hook from react-intersection-observer to detect when an element is in view.
 * When the element is in view, the hook triggers the animation using the useAnimation hook from Framer Motion.
 * The hook returns a ref that should be attached to the element to be animated and the controls to trigger the animation.
 * The threshold prop can be used to adjust the sensitivity of the intersection observer.
 * The default threshold is 0.2.
 * The triggerOnce prop can be used to determine if the animation should only trigger once.
 * The default value is false.
 */

import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function useScrollAnimation(threshold = 0.2) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateParallaxValue = (speed, offset = 0) => {
    return -((scrollY * speed) / 100) + offset;
  };

  return { scrollY, calculateParallaxValue };
}

/**
 * @name ParallaxBackground.jsx
 * This component creates a parallax effect with a background that changes based on the mode.
 * It uses the framer-motion library for animations and the useScroll and useTransform hooks for parallax effects.
 *
 */

import React, { useEffect, useState } from "react";
//eslint-disable-next-line
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxBackground = ({ mode }) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const { scrollY } = useScroll();

  // Different transforms based on scroll position
  const y1 = useTransform(scrollY, [0, height], [0, height * 0.15]);
  const y2 = useTransform(scrollY, [0, height], [0, height * -0.1]);
  const y3 = useTransform(scrollY, [0, height], [0, height * 0.05]);
  const y4 = useTransform(scrollY, [0, height], [0, height * -0.08]);
  const y5 = useTransform(scrollY, [0, height], [0, height * 0.12]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once initially to ensure proper setup

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simpler cloud rendering for light mode
  const renderClouds = () => {
    // Cloud data
    const cloudPositions = [
      { x: 10, y: 10, size: 150, opacity: 0.85, motion: y3 },
      { x: 30, y: 15, size: 180, opacity: 0.8, motion: y2 },
      { x: 50, y: 8, size: 140, opacity: 0.9, motion: y1 },
      { x: 80, y: 12, size: 160, opacity: 0.85, motion: y4 },
      { x: 20, y: 25, size: 120, opacity: 0.75, motion: y5 },
      { x: 60, y: 22, size: 150, opacity: 0.8, motion: y3 },
      { x: 90, y: 30, size: 140, opacity: 0.75, motion: y2 },
      { x: 75, y: 35, size: 160, opacity: 0.85, motion: y1 },
      { x: 40, y: 40, size: 150, opacity: 0.9, motion: y4 },
      { x: 15, y: 45, size: 180, opacity: 0.75, motion: y3 },
      { x: 55, y: 50, size: 140, opacity: 0.8, motion: y2 },
      { x: 85, y: 55, size: 150, opacity: 0.85, motion: y5 },
      { x: 25, y: 60, size: 160, opacity: 0.75, motion: y1 },
      { x: 70, y: 65, size: 150, opacity: 0.8, motion: y4 },
      { x: 50, y: 70, size: 140, opacity: 0.9, motion: y3 },
      { x: 20, y: 75, size: 180, opacity: 0.75, motion: y2 },
      { x: 80, y: 80, size: 160, opacity: 0.8, motion: y1 },
      { x: 40, y: 85, size: 150, opacity: 0.85, motion: y5 },
      { x: 60, y: 90, size: 140, opacity: 0.75, motion: y4 },
    ];

    // Simple cloud path
    const cloudPath =
      "M 0,20 C 15,0 40,-5 65,10 C 90,-5 115,5 130,25 C 150,10 165,35 155,60 C 170,85 140,105 115,95 C 95,115 65,110 45,90 C 25,105 0,90 -10,65 C -30,50 -15,25 0,20 Z";

    return (
      <>
        {/* Sun */}
        <motion.g style={{ y: y1 }}>
          <circle
            cx={width * 0.15}
            cy={height * 0.2}
            r={width * 0.06}
            fill="#FFD580"
            opacity={0.9}
          />

          {/* Sun glow - inside the motion.g so it moves with the sun */}
          <circle
            cx={width * 0.15}
            cy={height * 0.2}
            r={width * 0.12}
            fill="url(#sunGlow)"
          />
          <defs>
            <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="40%" stopColor="#FFD580" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFD580" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Sun rays - inside the same motion.g */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 120,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: `${width * 0.15}px ${height * 0.2}px`,
              opacity: 0.6,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const x1 = width * 0.15 + Math.cos(angle) * width * 0.07;
              const y1 = height * 0.2 + Math.sin(angle) * width * 0.07;
              const x2 = width * 0.15 + Math.cos(angle) * width * 0.1;
              const y2 = height * 0.2 + Math.sin(angle) * width * 0.1;

              return (
                <line
                  key={`ray-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#FFD580"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              );
            })}
          </motion.g>
        </motion.g>

        {/* Clouds */}
        {cloudPositions.map((cloud, i) => {
          const x = (width * cloud.x) / 100;
          const y = (height * cloud.y) / 100;

          // Skip clouds that would overlap the top half of the sun
          if (
            x > width * 0.05 &&
            x < width * 0.25 &&
            y < height * 0.2 &&
            y > height * 0.05
          ) {
            return null;
          }

          return (
            <motion.g
              key={`cloud-${i}`}
              style={{ y: cloud.motion }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [
                  cloud.opacity * 0.9,
                  cloud.opacity,
                  cloud.opacity * 0.95,
                ],
              }}
              transition={{
                opacity: {
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                duration: 1.5,
              }}
            >
              <path
                d={cloudPath}
                fill="#FFFFFF"
                opacity={cloud.opacity}
                transform={`translate(${x}, ${y}) scale(${cloud.size / 100})`}
              />
            </motion.g>
          );
        })}
      </>
    );
  };

  // Night sky with moon and stars for dark mode
  const renderNightSky = () => {
    // Generate stars with fixed positions
    const starPositions = [];
    for (let i = 0; i < 80; i++) {
      starPositions.push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 5,
      });
    }

    return (
      <>
        {/* Moon */}
        <motion.g style={{ y: y1 }}>
          <circle
            cx={width * 0.85}
            cy={height * 0.2}
            r={width * 0.08}
            fill="#ECE1CA"
          />
          <circle
            cx={width * 0.83}
            cy={height * 0.18}
            r={width * 0.02}
            fill="#444"
            opacity={0.1}
          />
          <circle
            cx={width * 0.87}
            cy={height * 0.23}
            r={width * 0.015}
            fill="#444"
            opacity={0.1}
          />
          <circle
            cx={width * 0.85}
            cy={height * 0.25}
            r={width * 0.01}
            fill="#444"
            opacity={0.1}
          />

          {/* Moon glow - inside the motion.g so it moves with the moon */}
          <circle
            cx={width * 0.85}
            cy={height * 0.2}
            r={width * 0.12}
            fill="url(#moonGlow)"
          />
          <defs>
            <radialGradient id="moonGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="40%" stopColor="#ECE1CA" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ECE1CA" stopOpacity="0" />
            </radialGradient>
          </defs>
        </motion.g>

        {/* Stars */}
        {starPositions.map((star, i) => (
          <motion.circle
            key={`star-${i}`}
            cx={star.x}
            cy={star.y}
            r={star.size}
            fill="white"
            initial={{ opacity: star.opacity }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.3, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Star clusters */}
        <motion.g
          style={{ y: y3 }}
          opacity={0.9}
          transform={`translate(${width * 0.2}, ${height * 0.3})`}
        >
          <circle cx="0" cy="0" r="2.5" fill="white" />
          <circle cx="10" cy="5" r="2" fill="white" />
          <circle cx="-5" cy="8" r="2.2" fill="white" />
          <circle cx="15" cy="-3" r="1.8" fill="white" />
          <circle cx="-8" cy="-7" r="2" fill="white" />
        </motion.g>

        <motion.g
          style={{ y: y4 }}
          opacity={0.8}
          transform={`translate(${width * 0.7}, ${height * 0.6})`}
        >
          <circle cx="0" cy="0" r="2.2" fill="white" />
          <circle cx="8" cy="3" r="1.8" fill="white" />
          <circle cx="-7" cy="6" r="1.6" fill="white" />
          <circle cx="12" cy="-5" r="2" fill="white" />
          <circle cx="-10" cy="-8" r="1.5" fill="white" />
        </motion.g>

        <motion.g
          style={{ y: y2 }}
          opacity={0.7}
          transform={`translate(${width * 0.4}, ${height * 0.7})`}
        >
          <circle cx="0" cy="0" r="2" fill="white" />
          <circle cx="6" cy="4" r="1.5" fill="white" />
          <circle cx="-5" cy="5" r="1.7" fill="white" />
          <circle cx="10" cy="-4" r="1.2" fill="white" />
        </motion.g>
      </>
    );
  };

  // Render background based on mode
  const renderBackground = () => {
    if (mode === "light-mode") {
      return renderClouds();
    } else if (mode === "dark-mode") {
      return renderNightSky();
    }

    return null;
  };

  if (mode === "party-mode") {
    return null;
  }

  return (
    <div className="parallax-background">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        {renderBackground()}
      </svg>
    </div>
  );
};

export default ParallaxBackground;

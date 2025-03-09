// src/components/PartyConfetti.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PartyConfetti = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Generate colorful confetti particles
  const createConfetti = () => {
    const colors = [
      'var(--clr-orchid)',
      'var(--clr-magenta)',
      'var(--clr-fuschia)',
      'var(--clr-lemon)',
      'var(--clr-jade)',
      'var(--clr-sky)',
      'var(--clr-royal)'
    ];
    
    const shapes = [
      // Circle
      (key, x, y, size, color) => (
        <motion.circle
          key={`circle-${key}`}
          cx={x}
          cy={0}
          r={size}
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            y: height + 100,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360,
            x: x + Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 3 + 5,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ),
      
      // Square
      (key, x, y, size, color) => (
        <motion.rect
          key={`rect-${key}`}
          x={x}
          y={0}
          width={size * 2}
          height={size * 2}
          fill={color}
          initial={{ opacity: 0 }}
          animate={{
            y: height + 100,
            opacity: [0, 1, 1, 0],
            rotate: Math.random() * 360,
            x: x + Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 3 + 5,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ),
      
      // Triangle
      (key, x, y, size, color) => {
        const s = size * 2;
        return (
          <motion.polygon
            key={`triangle-${key}`}
            points={`${x},${0} ${x - s},${s * 1.5} ${x + s},${s * 1.5}`}
            fill={color}
            initial={{ opacity: 0 }}
            animate={{
              y: height + 100,
              opacity: [0, 1, 1, 0],
              rotate: Math.random() * 360,
              x: x + Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 3 + 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        );
      },
      
      // Star
      (key, x, y, size, color) => {
        // Simple 5-point star
        const outerRadius = size * 2;
        const innerRadius = size;
        const points = [];
        
        for (let i = 0; i < 10; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI * i) / 5;
          const pointX = x + radius * Math.sin(angle);
          const pointY = radius * Math.cos(angle);
          points.push(`${pointX},${pointY}`);
        }
        
        return (
          <motion.polygon
            key={`star-${key}`}
            points={points.join(' ')}
            fill={color}
            initial={{ opacity: 0 }}
            animate={{
              y: height + 100,
              opacity: [0, 1, 1, 0],
              rotate: Math.random() * 360,
              x: x + Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 3 + 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        );
      }
    ];
    
    const confetti = Array.from({ length: 50 }, (_, i) => {
      const x = Math.random() * width;
      const size = Math.random() * 5 + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shapeIndex = Math.floor(Math.random() * shapes.length);
      
      return shapes[shapeIndex](i, x, 0, size, color);
    });
    
    return confetti;
  };
  
  return (
    <div className="party-confetti">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'visible'
        }}
      >
        {createConfetti()}
      </svg>
    </div>
  );
};

export default PartyConfetti;
// src/components/OvalBackground.jsx
import React from 'react';
//eslint-disable-next-line
import { motion } from 'framer-motion';

const OvalBackground = ({ cardClass }) => {
  // Determine color based on card class
  const getColor = () => {
    if (cardClass === 'card-1') return '#83FFE6'; // Mint
    if (cardClass === 'card-2') return '#FF9FD6'; // Pink
    if (cardClass === 'card-3') return '#FFEF99'; // Yellow
    return '#83FFE6'; // Default to mint
  };
  
  // Get asymmetrical blob path based on card class
  const getBlobPath = () => {
    if (cardClass === 'card-1') {
      // Mint - wider horizontally
      return {
        path1: "M50,40 C180,0 350,0 450,70 C550,140 550,220 450,300 C350,380 180,380 50,320 C-50,260 -50,100 50,40",
        path2: "M60,50 C190,10 340,10 440,80 C540,150 540,210 440,290 C340,370 190,370 60,310 C-40,250 -40,110 60,50",
        path3: "M40,30 C170,-10 360,-10 460,60 C560,130 560,230 460,310 C360,390 170,390 40,330 C-60,270 -60,90 40,30"
      };
    } else if (cardClass === 'card-2') {
      // Pink - more rounded with slight asymmetry
      return {
        path1: "M90,20 C200,-20 350,0 450,80 C550,160 530,260 450,320 C370,380 200,400 80,340 C-40,280 -20,60 90,20",
        path2: "M100,30 C210,-10 340,10 440,90 C540,170 520,250 440,310 C360,370 210,390 90,330 C-30,270 -10,70 100,30",
        path3: "M80,10 C190,-30 360,-10 460,70 C560,150 540,270 460,330 C380,390 190,410 70,350 C-50,290 -30,50 80,10"
      };
    } else {
      // Yellow - most asymmetrical
      return {
        path1: "M120,40 C260,-30 380,20 460,100 C540,180 580,260 480,340 C380,420 240,400 100,360 C-40,320 -20,110 120,40",
        path2: "M130,50 C270,-20 370,30 450,110 C530,190 570,250 470,330 C370,410 250,390 110,350 C-30,310 -10,120 130,50",
        path3: "M110,30 C250,-40 390,10 470,90 C550,170 590,270 490,350 C390,430 230,410 90,370 C-50,330 -30,100 110,30"
      };
    }
  };
  
  const { path1, path2, path3 } = getBlobPath();

  return (
    <div
      style={{
        position: 'absolute',
        top: '-100px',
        left: '-150px', // Extended further left
        right: '-150px', // Extended further right
        bottom: '-100px',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'visible'
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 400"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120%', // Make wider to ensure overflow
          height: '100%'
        }}
      >
        <motion.path
          fill={getColor()}
          d={path1}
          animate={{
            d: [path1, path2, path3, path1],
            scale: [1, 1.02, 0.98, 1]
          }}
          transition={{
            d: {
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            },
            scale: {
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }
          }}
        />
      </svg>
    </div>
  );
};

export default OvalBackground;
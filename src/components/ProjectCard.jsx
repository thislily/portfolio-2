/**
 * @name ProjectCard
 * @description This file contains the ProjectCard component.
 * It is a simple component that renders a card with project information.
 * The card is animated using Framer Motion.
 *
 */
import React, { useEffect, useRef } from "react";
//eslint-disable-next-line
import { motion, useInView, useAnimation } from "framer-motion";
import { Link, Github } from "lucide-react";
import { Parallax } from "react-scroll-parallax";
import OvalBackground from "./OvalBackground";

function ProjectCard({
  title,
  description,
  image,
  altText,
  website,
  repo,
  cardClass,
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Check if we're in party mode
  const isPartyMode = document.body.classList.contains("party-mode");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Parallax speed={0}>
      <motion.div
        ref={ref}
        className={`card ${cardClass}`}
        variants={cardVariants}
        initial="hidden"
        animate={controls}
        style={{
          position: "relative",
          overflow: "visible", // Allow overflow for the wobbling blobs
          isolation: "isolate", // Create stacking context
          margin: isPartyMode ? "32px auto" : undefined,
        }}
      >
        {/* Background for party mode */}
        {isPartyMode && <OvalBackground cardClass={cardClass} />}

        {/* Card content */}
        <motion.img
          src={image}
          alt={altText}
          variants={childVariants}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: window.innerWidth < 900 ? "100%" : "400px",
          }}
        />

        <div className="card-text" style={{ position: "relative", zIndex: 2 }}>
          <motion.h3 variants={childVariants}>{title}</motion.h3>
          <motion.p variants={childVariants}>{description}</motion.p>
          <motion.div className="links" variants={childVariants}>
            <motion.a
              href={website}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 },
              }}
            >
              <Link size={32} />
              Visit Website
            </motion.a>
            <motion.a
              href={repo}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.05,
                x: 5,
                transition: { duration: 0.2 },
              }}
            >
              <Github size={32} />
              See Github Repo
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </Parallax>
  );
}

export default ProjectCard;

/**
 * @name Splash
 * @description This file contains the Splash component.
 * It is a simple component that renders the splash section of the portfolio.
 * The splash section contains a greeting, an introduction, and links to the contact and portfolio sections.
 * The component is animated using Framer Motion and React Scroll Parallax.
 *
 */
import React from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function Splash({ profilePicSrc }) {
  return (
    <section className="splash">
      <Parallax speed={-10} translateY={[0, 0]}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi friend, I'm Lily!
        </motion.h1>
      </Parallax>

      <div className="welcome-p">
        <Parallax speed={0}>
          <motion.img
            className="profile-pic"
            src={profilePicSrc}
            alt="cartoon like profile image for Lily"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          />
        </Parallax>

        <Parallax speed={0}>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I'm an Oslo based junior Frontend Developer, with a passion for
            crafting engaging web experiences. My journey is fuelled by
            curiosity and a stubborn desire to know all the answers. Every
            project is a step towards improving my skills and pushing myself to
            be a little better. As I navigate the ever-evolving tech landscape,
            my goal is clear: to grow, innovate, and make an impact. I'm always
            ready to dive into the next challenge, transforming ideas into
            digital realities.
          </motion.p>
        </Parallax>
      </div>

      <Parallax speed={0}>
        <motion.div
          className="directory"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            See My Work
          </motion.a>
        </motion.div>
      </Parallax>
    </section>
  );
}

export default Splash;

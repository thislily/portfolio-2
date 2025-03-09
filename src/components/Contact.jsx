/**
 * @file Contact component
 * renders contact information and links
 * animated with framer-motion and react-scroll-parallax
 */

import React from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="contact" id="contact">
      <Parallax speed={0}>
        <motion.div 
          className="contact-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants}>Where to find me:</motion.h2>
          <motion.p variants={itemVariants}>I live in Oslo, but I'm always open to remote work.</motion.p>
          
          <motion.div variants={itemVariants}>
            <p>Email:</p>
            <motion.a 
              href="mailto:lilywatson.dev@gmail.com"
              whileHover={{ 
                scale: 1.05, 
                color: 'var(--clr-sunset)',
                transition: { duration: 0.2 } 
              }}
            >
              lilywatson.dev@gmail.com
            </motion.a>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p>Github:</p>
            <motion.a
              href="https://github.com/thislily"
              target="_blank"
              rel="noreferrer"
              whileHover={{ 
                scale: 1.05, 
                color: 'var(--clr-sunset)',
                transition: { duration: 0.2 } 
              }}
            >
              https://github.com/thislily
            </motion.a>
          </motion.div>

          <motion.div 
            className="logos flex justify-center flex-wrap"
            variants={itemVariants}
          >
            {[
              "devicon-react-original",
              "devicon-javascript-plain",
              "devicon-html5-plain",
              "devicon-css3-plain",
              "devicon-tailwindcss-plain",
              "devicon-sass-original",
              "devicon-bootstrap-plain",
              "devicon-wordpress-plain",
              "devicon-figma-plain"
            ].map((icon, index) => (
              <motion.i
                key={index}
                className={`${icon} line`}
                style={{ fontSize: "48px" }}
                whileHover={{ 
                  scale: 1.15,
                  transition: { duration: 0.2 } 
                }}
              ></motion.i>
            ))}
          </motion.div>
        </motion.div>
      </Parallax>
    </section>
  );
}

export default Contact;
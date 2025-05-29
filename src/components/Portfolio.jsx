/**
 * @file Portfolio.jsx
 * @description This file contains the Portfolio component.
 * It is a simple component that renders a list of projects using the ProjectCard component.
 */

import React from "react";
//eslint-disable-next-line
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const projects = [
    {
      title: "Pick a Plant",
      description:
        "A quiz that helps you find the perfect plant friend to take home with you!",
      image: "images/pick-a-plant.jpg",
      altText: "a screenshot of the Pick a Plant homepage",
      website: "https://pick-a-plant.netlify.app/",
      repo: "https://github.com/thislily/pick-a-plant-fresh",
      cardClass: "card-2",
    },
    {
      title: "Holidaze",
      description:
        "A pretend venue site, where users can make venues, and book the venues of others. Built using a school provided API.",
      image: "images/holidaze.jpg",
      altText: "a screenshot of the Holidaze homepage",
      website: "https://lil-holidaze.netlify.app",
      repo: "https://github.com/thislily/project-exam-2",
      cardClass: "card-1",
    },
    {
      title: "Bidden",
      description:
        "A pretend auction site where users can create an account, make listings, and bid on items. Built using a school provided API.",
      image: "images/bidden.jpg",
      altText: "a screenshot of the Bidden homepage",
      website: "https://bidden.netlify.app",
      repo: "https://github.com/thislily/Bidden",
      cardClass: "card-3",
    },
    {
      title: "Storesville",
      description: "A school project to demonstrate simple use of react.",
      image: "images/storesville.jpg",
      altText: "a screenshot of the Storesville homepage",
      website: "https://storesville.netlify.app",
      repo: "https://github.com/thislily/js-frameworks",
      cardClass: "card-1",
    },
    {
      title: "Mini Routini!",
      description:
        "A cute web app for kids to track their chores and earn a video as a reward.",
      image: "images/chores.jpg",
      altText: "a screenshot of the Mini Routini homepage",
      website: "http://www.miniroutini.com",
      repo: "https://github.com/thislily/Chores",
      cardClass: "card-2",
    },
    {
      title: "Future Blonde",
      description:
        "A satirical post apocalyptic influencer-style blog, built using Wordpress as a headless CMS.",
      image: "images/future-blonde.jpg",
      altText: "a screenshot of the Future Blonde blog homepage",
      website: "https://futureblonde.netlify.app",
      repo: "https://github.com/Noroff-FEU-Assignments/project-exam-1-thislily",
      cardClass: "card-1",
    },
    {
      title: "Community Science Museum",
      description: "A fictional children's science museum website.",
      image: "images/museum.jpg",
      altText: "a screenshot of the Community Science Museum homepage",
      website: "https://csmuseum-lily.netlify.app",
      repo: "https://github.com/thislily/Community-Science-Museum",
      cardClass: "card-3",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <Parallax speed={0}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Here's some projects I've worked on:
        </motion.h2>
      </Parallax>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          altText={project.altText}
          website={project.website}
          repo={project.repo}
          cardClass={project.cardClass}
        />
      ))}
    </section>
  );
}

export default Portfolio;

// src/components/Portfolio.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const projects = [
    {
      title: "Bidden",
      description: "A pretend auction site where users can create an account, make listings, and bid on items. Built using a school provided API.",
      image: "images/bidden.jpg",
      altText: "a screenshot of the Bidden homepage",
      website: "https://bidden.netlify.app",
      repo: "https://github.com/thislily/Bidden",
      cardClass: "card-3"
    },
    {
      title: "Mini Routini!",
      description: "A cute web app for kids to track their chores and earn a video as a reward. Just a fun little project to practice my skills.",
      image: "images/chores.jpg",
      altText: "a screenshot of the Rainy Days homepage",
      website: "http://www.miniroutini.com",
      repo: "https://github.com/thislily/Chores",
      cardClass: "card-2"
    },
    {
      title: "Future Blonde",
      description: "A satirical post apocalyptic influencer-style blog, built using Wordpress as a headless CMS.",
      image: "images/future-blonde.jpg",
      altText: "a screenshot of the Future Blonde blog homepage",
      website: "https://futureblonde.netlify.app",
      repo: "https://github.com/Noroff-FEU-Assignments/project-exam-1-thislily",
      cardClass: "card-1"
    },
    {
      title: "Rainy Days",
      description: "A fictional jacket company's e-commerce website. Products are hosted via a Wordpress headless CMS.",
      image: "images/rainy-days.jpg",
      altText: "a screenshot of the Rainy Days homepage",
      website: "https://rainydays-lily.netlify.app",
      repo: "https://github.com/thislily/Rainy_Days_v2",
      cardClass: "card-2"
    },
    {
      title: "Community Science Museum",
      description: "A fictional children's science museum website. Completely static site.",
      image: "images/museum.jpg",
      altText: "a screenshot of the Community Science Museum homepage",
      website: "https://csmuseum-lily.netlify.app",
      repo: "https://github.com/thislily/Community-Science-Museum",
      cardClass: "card-3"
    }
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>Here's some projects I've worked on:</h2>

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
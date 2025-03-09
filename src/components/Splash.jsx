// src/components/Splash.jsx
import React from "react";

function Splash({ profilePicSrc }) {
  return (
    <section className="splash">
      <h1>Hi friend, I'm Lily!</h1>
      <div className="welcome-p">
        <img
          className="profile-pic"
          src={profilePicSrc}
          alt="cartoon like profile image for Lily"
        />
        <p>
          I'm an Oslo based junior Frontend Developer, with a passion for
          crafting engaging web experiences. My journey is fuelled by
          curiosity and a stubborn desire to know all the answers. Every
          project is a step towards improving my skills and pushing myself to
          be a little better. As I navigate the ever-evolving tech landscape,
          my goal is clear: to grow, innovate, and make an impact. I'm always
          ready to dive into the next challenge, transforming ideas into
          digital realities.
        </p>
      </div>

      <div className="directory">
        <a href="#contact">Contact Me</a>
        <a href="#portfolio">See My Work</a>
      </div>
    </section>
  );
}

export default Splash;
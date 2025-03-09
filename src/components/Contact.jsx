// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-text">
        <h2>Where to find me:</h2>
        <p>I live in Oslo, but I'm always open to remote work.</p>
        <div>
          <p>Email:</p>
          <a href="mailto:lilywatson.dev@gmail.com">
            lilywatson.dev@gmail.com
          </a>
        </div>
        <div>
          <p>Github:</p>
          <a
            href="https://github.com/thislily"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/thislily
          </a>
        </div>

        <div className="logos flex justify-center flex-wrap">
          <i
            className="devicon-react-original line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-javascript-plain line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-html5-plain line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-css3-plain line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-tailwindcss-plain line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-sass-original line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-bootstrap-plain line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-wordpress-plain line"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="devicon-figma-plain line"
            style={{ fontSize: "48px" }}
          ></i>
        </div>
      </div>
    </section>
  );
}

export default Contact;
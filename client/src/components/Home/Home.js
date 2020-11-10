import React from "react";
import Fade from "react-reveal/Fade";
import TextLoop from "react-text-loop";
import "./Home.scss";

export default function Home() {
  return (
    <main className="main-page">
      <div id="profile-picture">
        <img
          className="pic"
          src={require("../images/profile-pic.png")}
          alt="profile"
        />

        <Fade up>
          <div>
            <span className="name-con"></span>
          </div>
          <p className="home-name">Parth Desai</p>
        </Fade>

        <div className="tag">
          <span>I am a &nbsp;</span>

          <TextLoop fade="true">
            <span className="quality">Passionate Developer.</span>
            <span className="quality">Chelsea FC Fan.</span>
            <span className="quality">Freelancer.</span>
            <span className="quality">Full Stack Developer.</span>
          </TextLoop>
        </div>
      </div>
      <section className="social-media">
        <a
          href="https://github.com/parthjd"
          target="_blank"
          className="social-media-link"
          title="GitHub"
          rel="noopener noreferrer"
        >
          {" "}
          <i class="fab fa-github" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/parth-desai-60663178/"
          target="_blank"
          className="social-media-link"
          title="Linkedin"
          rel="noopener noreferrer"
        >
          {" "}
          <i class="fab fa-linkedin" />
        </a>
      </section>
      <p className="copyright">2020 © Parth Desai. All rights reserved.</p>
    </main>
  );
}

import React from "react";
import Fade from "react-reveal/Fade";

import Typing from "react-typing-animation";
import "./Home.scss";

export default function Home() {
  return (
    <main className="main-page">
      <div id="profile-picture">
        <Fade left>
          <img className="pic" src={require("../images/profile-pic.png")} />
        </Fade>
        <h2 className="home-name">Parth Desai</h2>
        <Typing className="tag" speed={50}>
          <span>I am a </span>
          <span className="quality">Passionate Developer.</span>
          <Typing.Backspace count={21} delay={1500} />
          <span className="quality">Freelancer.</span>
          <Typing.Backspace count={10} delay={1500} />
          <span className="quality">ull Stack Developer.</span>
        </Typing>
      </div>
      <section className="social-media">
        <a
          href="https://github.com/parthjd"
          target="_blank"
          className="social-media-link"
          title="GitHub"
        >
          {" "}
          <i class="fab fa-github" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/parth-desai-60663178/"
          target="_blank"
          className="social-media-link"
          title="Linkedin"
        >
          {" "}
          <i class="fab fa-linkedin" />
        </a>
      </section>
      <p className="copyright">2020 © Parth Desai. All rights reserved.</p>
    </main>
  );
}

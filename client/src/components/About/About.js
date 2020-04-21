import React from "react";
import Fade from "react-reveal/Fade";
import "./About.scss";
export default function About() {
  return (
    <main className="main-page">
      <div className="wrapper">
        <Fade top>
          <h2 className="page-heading">About Me</h2>
        </Fade>
        <section className="about-main">
          <div className="about-content">
            <Fade left>
              <p className="bio">
                I had my first encounter with programming back in high school,
                when I built a Student Information Systems software. Curious to
                know more, I started learning on my own, coding different
                languages from home. Passionate and confident about web
                development, I quit my well-paying job in the travel retail
                industry in order to develop digital experiences that leave a
                positive impact on people, environment and the society.
                <br />
                Three months of a successful coding bootcamp later, I feel proud
                to present myself as a full-stack web developer who specializes
                in fixing front end as well back end issues with ease and
                accuracy. As a web developer, I strive to do more than just
                developing a website. I aim to serve my clients by designing and
                developing websites that have creative designs and powerful
                features backed by quality content and user friendliness. What
                differentiates me from my contemporaries is that instead of
                creating just a website for my clients, I make serious efforts
                to develop properly crafted experiences and web designs for each
                of my clients.
              </p>
            </Fade>
            <Fade bottom>
              <img
                className="signature"
                src={require("../images/signature.png")}
              />
            </Fade>
          </div>
          <div className="about-contact">
            <Fade bottom>
              <h3 className="page-subheading">Personal Information</h3>
            </Fade>
            <ul>
              <Fade right>
                <li>
                  <span class="title">Name: </span>
                  <span class="value">Parth Desai</span>
                </li>
              </Fade>
              <Fade right>
                <li>
                  <span class="title">Residence: </span>
                  <span class="value">Toronto, ON</span>
                </li>
              </Fade>
              <Fade right>
                <li>
                  <span class="title">Email: </span>
                  <span class="value">parthjd.tech@gmail.com</span>
                </li>
              </Fade>
              <Fade right>
                <li>
                  <span class="title">Phone: </span>
                  <span class="value">(+1) 647 - 532 - 0880 </span>
                </li>
              </Fade>
              <Fade right>
                <li>
                  <span class="title">Freelance: </span>
                  <span class="value">Available </span>
                </li>
              </Fade>
            </ul>
            <Fade right>
              <a
                className="download-resume"
                href="https://www.canva.com/design/DAD0-2ZJCaw/zAOF2GCh_uDq_hn2e9Jebw/view?utm_content=DAD0-2ZJCaw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                target="_blank"
              >
                Download Resume
              </a>
            </Fade>
          </div>
        </section>
      </div>
      <p className="copyright">2020 © Parth Desai. All rights reserved.</p>
    </main>
  );
}

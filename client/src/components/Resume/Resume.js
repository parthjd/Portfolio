import React from "react";
import "./Resume.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Resume() {
  return (
    <main className="main-page">
      <div className="wrapper">
        <h2 className="page-heading">Resume</h2>
        <section className="resume-content">
          <div className="experience">
            <h3 className="experience-heading">experience</h3>
            <ul className="experience-content">
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4 className="job-title">Store CO-Manager</h4>
                  <h5 className="company">Guess? Inc. - Mississauga, ON</h5>
                  <p className="job-info">
                    ➜ Supervised up to 25 employees on the team.
                    <br />➜ Updated 2500-square-foot store with completely new
                    floor plan to offer customers more visually pleasing product
                    and customer experience.
                  </p>
                </div>
                <span className="to">2020</span>
                <span className="from">2019</span>
              </li>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4 className="job-title">General Manager</h4>
                  <h5 className="company">Dufry Group - Toronto, ON</h5>
                  <p className="job-info">
                    ➜ Joined the company as a Sales Associate and was promoted
                    to different positions (Marketing Manager, Assistant General
                    Manager) through out my tenure.
                    <br />➜ Achieved EBITDA growth of 12.5% vs budget and 16% vs
                    LY.
                  </p>
                </div>
                <span className="to">2019</span>
                <span className="from">2013</span>
              </li>
            </ul>
          </div>
          <div className="education">
            <h3 className="education-heading">education</h3>
            <ul className="experience-content">
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4 className="job-title">Diploma in Web Development</h4>
                  <h5 className="company">Lighthouse Labs - Toronto, ON</h5>
                </div>
                <span className="to">2020</span>
                <span className="from">2020</span>
              </li>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4 className="job-title">
                    Post Grad. Global Business Management
                  </h4>
                  <h5 className="company">Centennial College - Toronto, ON</h5>
                </div>
                <span className="to">2013</span>
                <span className="from">2011</span>
              </li>
              <li>
                <span className="line-left"></span>
                <div className="content">
                  <h4 className="job-title">
                    Bachelor of Business Administration
                  </h4>
                  <h5 className="company">University of Pune, India</h5>
                </div>
                <span className="to">2011</span>
                <span className="from">2008</span>
              </li>
            </ul>
          </div>
        </section>
        <footer className="skills">
          <h3 className="skills-heading">skills</h3>
          <section className="skills-section">
            <div className="skills-progress">
              <p className="skills-title">HTML</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={95}
                now={95}
              />
              <p className="skills-title">CSS / SASS</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={90}
                now={90}
              />
              <p className="skills-title">JAVASCRIPT</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={85}
                now={85}
              />
              <p className="skills-title">Node.js</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={80}
                now={80}
              />
            </div>
            <div className="skills-progress">
              <p className="skills-title">React</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={75}
                now={75}
              />
              <p className="skills-title">Postgres / SQL</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={80}
                now={80}
              />
              <p className="skills-title">Ruby on Rails</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={75}
                now={75}
              />
              <p className="skills-title">Express</p>
              <ProgressBar
                style={{
                  height: "1.5rem",
                  borderRadius: "2.5rem",
                  backgroundColor: "lightyellow",
                }}
                variant="dark"
                label={70}
                now={70}
              />
            </div>
          </section>
        </footer>
      </div>
      <p className="copyright">2020 © Parth Desai. All rights reserved.</p>
    </main>
  );
}

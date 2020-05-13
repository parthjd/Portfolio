import React from "react";
import "./Portfolio.scss";
import Fade from "react-reveal/Fade";
export default function Portfolio() {
  return (
    <main className="main-page">
      <div className="wrapper">
        <Fade top>
          <h2 className="page-heading">Portfolio</h2>
        </Fade>
        <section className="projects">
          <div className="container">
            <Fade left>
              <div className="ih-item square colored effect15 left_to_right project3">
                <a href="https://customfitness.netlify.app">
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://webstockreview.net/images/fitness-clipart-animated-8.png"
                      alt="img"
                    />
                  </div>
                  <div className="info">
                    <h3>Custom Fitness</h3>
                    <p>
                      {" "}
                      A react app that lets trainer create custom work out plan
                      for students. Trainer and students gets notified when the
                      custom plan is created and when completed.
                    </p>
                  </div>
                </a>
              </div>
            </Fade>
            <Fade bottom>
              <div className="ih-item square colored effect15 left_to_right project2">
                <a href="https://rumours.herokuapp.com/" target="_blank">
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://cdn4.iconfinder.com/data/icons/future-of-shopping-color/64/pre-order-food-mobile-pickup-app-restaurant-512.png"
                      alt="img"
                    />
                  </div>
                  <div className="info">
                    <h3>Rumours</h3>
                    <p>
                      {" "}
                      A food ordering experience for a single restaurant. Hungry
                      clients can visit the website, select one or more dishes
                      and place an order for pick-up. They will receive a
                      notification when their order is ready.
                    </p>
                  </div>
                </a>
              </div>
            </Fade>
            <Fade up>
              <div className="ih-item square colored effect15 left_to_right project4">
                <a
                  href="https://dreamy-bardeen-0b586b.netlify.app/"
                  target="_blank"
                >
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://cdn0.iconfinder.com/data/icons/time-management/512/xxx037-512.png"
                      alt="img"
                    />
                  </div>
                  <div className="info">
                    <h3>Scheduler</h3>
                    <p>
                      {" "}
                      A React application that allows users to book and cancel
                      interviews. I combine a concise API with a WebSocket
                      server to build a realtime experience.
                    </p>
                  </div>
                </a>
              </div>
            </Fade>
            <Fade right>
              <div className="ih-item square colored effect15 left_to_right project1">
                <a href="https://github.com/parthjd/tweeter" target="_blank">
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://webstockreview.net/images/twitter-png-logo-1.png"
                      alt="img"
                    />
                  </div>
                  <div className="info">
                    <h3>Tweeter</h3>
                    <p>
                      {" "}
                      A simplified single-page Twitter clone using HTML, CSS,
                      JS, jQuery and AJAX on the front-end, and Node, Express
                      and MongoDB on the back-end.
                    </p>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </section>
      </div>
      <p className="copyright">2020 © Parth Desai. All rights reserved.</p>
    </main>
  );
}

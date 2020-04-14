import React from "react";
import "./Portfolio.scss";
import ImageContentHover from "react-image-hover";

export default function Portfolio() {
  return (
    <main className="portfolio-main">
      <div className="wrapper">
        <h2 className="portfolio-heading">Portfolio</h2>
        <section className="projects">
          <h3 className="project-heading">My recent works</h3>
          <div className="row">
            <div className="container">
              <div className="ih-item square colored effect15 left_to_right project1">
                <a href="#">
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
              <div className="ih-item square colored effect15 left_to_right project2">
                <a href="#">
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://cdn.dribbble.com/users/1890021/screenshots/8576649/foodbiker-dribbble_thumb.gif"
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
              <div className="ih-item square colored effect15 left_to_right project3">
                <a href="#">
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://www.commusoft.us/wp-content/uploads/2019/08/time-clock-calendar-work-1024x768.jpg"
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
              <div className="ih-item square colored effect15 left_to_right project4">
                <a href="#">
                  <div className="img">
                    <img
                      className="project-image"
                      src="https://techcrunch.com/wp-content/uploads/2014/06/twitter-rise.gif?w=730&crop=1"
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
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

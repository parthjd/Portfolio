import React from "react";
import "./Blog.scss";

export default function Blog() {
  return (
    <main className="main-page">
      <div className="wrapper">
        <h2 className="page-heading">Blogs</h2>
        <section className="blogs">
          <div className="blogs-container">
            <div className="ih-item square colored effect15 left_to_right project2">
              <a
                href="https://medium.com/@parthjd28/pair-programming-a-baby-developers-perspective-cce969e98010"
                target="_blank"
              >
                <div className="img">
                  <img
                    className="blog-image"
                    src={require("../images/pair_1-1.png")}
                    alt="img"
                  />
                </div>
                <div className="info">
                  <h3>Pair Programming</h3>
                  <p> Pair Programming: A Baby Developer's perspective</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
      <p className="copyright">2020 © Parth Desai. All rights reserved.</p>
    </main>
  );
}

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
            <div className="ih-item square colored effect15 left_to_right project3">
              <a href="#">
                <div className="img">
                  <img
                    className="blog-image"
                    src="https://lh3.googleusercontent.com/proxy/AEL04ir77n3yUJ8HS8h7f04p_-r63DZ_gUUKdN0gif0S4WWB2FPzxCm0qzTF6EhI59jWr3RjlkStvEQCsgcr5yKW46Fny3BHuG7L-Ao_PxOyitWRgZtef5TOtWEZyylsfx1R5w"
                    alt="img"
                  />
                </div>
                <div className="info">
                  <h3>Coming Soon</h3>
                  <p> New blog will be posted soon.</p>
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

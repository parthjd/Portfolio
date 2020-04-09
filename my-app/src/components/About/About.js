import React from "react";
import "./About.scss";
export default function About() {
  return (
    <section className="about-page">
      <div className="wrapper">
        <h2 className="about-me"> About Me</h2>
        <main className="about-main">
          <div className="about-content">
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              libero iure dolor cupiditate ab sed nulla autem aliquam veritatis
              aut fugiat voluptas explicabo asperiores in labore possimus
              voluptatibus quas deserunt enim cumque beatae dolore quam
              assumenda corrupti. Magnam explicabo similique aut laboriosam ab
              debitis maiores culpa, eligendi, mollitia deleniti repellendus
              quia.
              <br />
              neque earum, impedit quam molestias mollitia sapiente, aperiam ea!
              Nulla ut unde consequatur, illo quaerat temporibus quidem eos
              voluptatem deleniti harum fugiat. Dolores eveniet rem ducimus
              quaerat voluptatibus inventore odit.Dolores eveniet rem ducimus
              quaerat voluptatibus inventore odit.Dolores eveniet rem ducimus
              quaerat voluptatibus inventore odit.Dolores eveniet rem ducimus
              quaerat voluptatibus inventore odit.
            </p>
            <img
              className="signature"
              src={require("../images/signature.png")}
            />
          </div>
          <div className="about-contact">
            <h3 className="personal-info">Personal Information</h3>
            <ul>
              <li>
                <span class="title">Name: </span>
                <span class="value">Parth Desai</span>
              </li>
              <li>
                <span class="title">Residence: </span>
                <span class="value">Toronto, ON</span>
              </li>
              <li>
                <span class="title">Email: </span>
                <span class="value">parthjd.tech@gmail.com</span>
              </li>
              <li>
                <span class="title">Phone: </span>
                <span class="value">(+1) 647 - 532 - 0880 </span>
              </li>
              <li>
                <span class="title">Freelance: </span>
                <span class="value">Available </span>
              </li>
            </ul>

            <a className="download-resume" href="./Parth-Desai.pdf" download>
              Download Resume
            </a>
          </div>
        </main>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import "./Contact.scss";
import Axios from "axios";

export default function Contact() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = state;

    const form = Axios.post("/api/form", {
      name,
      email,
      message,
    });
  };

  return (
    <main className="main-page">
      <div className="wrapper">
        <h2 className="page-heading">Get in Touch</h2>
        <section className="input-section">
          <form method="POST" className="contact-form" onSubmit={handleSubmit}>
            <div className="name-email">
              <input
                className="client-name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
              <input
                className="client-name"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
              />
            </div>
            <textarea
              for="message"
              name="message"
              className="message"
              placeholder="How can I Help you?"
              onChange={handleChange}
            />
            <button className="form-button" type="button">
              Send Message
            </button>
          </form>
        </section>
        <footer className="contact-footer">
          <div className="contact-social">
            <i class="fas fa-envelope-open" />
            <p className="contact-type">parthjd.tech@gmail.com</p>
          </div>
          <div className="contact-social">
            <i class="fas fa-map-marker-alt" />
            <p className="contact-type">Toronto, Canada</p>
          </div>
          <div className="contact-social">
            <i class="fas fa-phone-alt" />
            <p className="contact-type">(+1) 647 - 532 - 0880 </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

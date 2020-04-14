import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <main className="contact-main">
      <div className="wrapper">
        <h2 className="contact-heading">Contact Me.</h2>
        <form className="contact-form">
          <p className="form-title">Let's Talk</p>
          <section className="input-section">
            <div className="name-email">
              <input
                className="client-name"
                type="text"
                name="client-name"
                placeholder="Name"
              />
              <input
                className="client-name"
                type="email"
                name="client-email"
                placeholder="E-mail"
              />
            </div>
            <textarea
              for="message"
              className="message"
              placeholder="How can I Help you?"
            />
            <button className="form-button" type="button">
              Send Message
            </button>
            <footer className="contact-footer">
              <div className="contact-social">
                <i class="fas fa-envelope-open" />
                <p className="contact-type">parthjd.tech@gmail.com</p>
              </div>
              <div className="contact-social">
                <i class="fas fa-map-marker-alt" />
                <p className="contact-type">1185 The Queensway, Toronto, ON</p>
              </div>
              <div className="contact-social">
                <i class="fas fa-phone-alt" />
                <p className="contact-type">(+1) 647 - 532 - 0880 </p>
              </div>
            </footer>
          </section>
        </form>
      </div>
    </main>
  );
}

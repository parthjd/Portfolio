import React, { Component } from "react";
import "./Contact.scss";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const form = await axios.post("/api/form", {
      name,
      email,
      message,
    });
  }

  render() {
    return (
      <main className="main-page">
        <div className="wrapper">
          <h2 className="page-heading">Get in Touch</h2>
          <section className="input-section">
            <form className="contact-form" onSubmit={this.handleSubmit}>
              <div className="name-email">
                <input
                  className="client-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
                <input
                  className="client-name"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={this.handleChange}
                />
              </div>
              <textarea
                for="message"
                name="message"
                className="message"
                placeholder="How can I Help you?"
                onChange={this.handleChange}
              />
              <button className="form-button" type="submit">
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
}

export default Contact;

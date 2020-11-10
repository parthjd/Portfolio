import React, { Component } from "react";
import Fade from "react-reveal/Fade";

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

    // if (this.state == null) {
    //   console.log("hello");
    const form = await axios.post("/api/form", {
      name,
      email,
      message,
    });
    // alert("Thank you!! Your message has been sent!");
    // } else {
    //   alert("Please fill out the details before sending message.");
    // }
  }
  handleClick = (e) => {
    document.getElementById("button").innerHTML = "Message Sent";
    document.getElementById("button").style.backgroundColor = "#18B59B";
    document.getElementById("button").style.border = "none";
  };

  render() {
    return (
      <main className="main-page">
        <div className="wrapper">
          <Fade top>
            <h2 className="page-heading">Get in Touch</h2>
          </Fade>
          <section className="input-section">
            <form
              name="contact-form"
              className="contact-form"
              onSubmit={this.handleSubmit}
            >
              <div className="name-email">
                <Fade bottom>
                  <input
                    className="client-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                  />
                </Fade>
                <Fade bottom>
                  <input
                    className="client-name"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={this.handleChange}
                  />
                </Fade>
              </div>
              <Fade left>
                <textarea
                  for="message"
                  name="message"
                  className="message"
                  placeholder="How can I Help you?"
                  onChange={this.handleChange}
                />
              </Fade>
              <Fade bottom>
                <button
                  id="button"
                  onClick={this.handleClick}
                  className="form-button"
                  type="submit"
                >
                  Send Message
                </button>
              </Fade>
            </form>
          </section>
          <footer className="contact-footer">
            <Fade top>
              <div className="contact-social">
                <i class="fas fa-envelope-open" />
                <p className="contact-type">parthjd.tech@gmail.com</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="contact-social">
                <i class="fas fa-map-marker-alt" />
                <p className="contact-type">Toronto, Canada</p>
              </div>
            </Fade>
            <Fade top>
              <div className="contact-social">
                <i class="fas fa-phone-alt" />
                <p className="contact-type">(+1) 647 - 532 - 0880 </p>
              </div>
            </Fade>
          </footer>
        </div>
        <p className="copyright">2020 © Parth Desai. All rights reserved.</p>
      </main>
    );
  }
}

export default Contact;

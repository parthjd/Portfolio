import React, { Component } from "react";
import "./Contact.scss";
import axios from "axios";
// import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";

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
    document.getElementById("button").style.backgroundColor = "#1d9e65";
    document.getElementById("button").style.border = "none";
  };

  render() {
    return (
      <main className="main-page">
        <div className="wrapper">
          <h2 className="page-heading">Get in Touch</h2>
          <section className="input-section">
            <form
              name="contact-form"
              className="contact-form"
              onSubmit={this.handleSubmit}
            >
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
              <button
                id="button"
                onClick={this.handleClick}
                className="form-button"
                type="submit"
              >
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

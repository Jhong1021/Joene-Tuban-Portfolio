import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chqsxja",
        "template_w1v2kcx",
        form.current,
        "YdxotD56__QuUGD-c"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Email Sent",
            text: "Your message has been sent successfully!",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Email Failed",
            text: `Failed to send email: ${error.text}`,
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-heading text-center mb-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-6 contact-info">
            <h4>Get in Touch</h4>
            <p>
              If you have any questions or just want to say hello, feel free to
              drop me a message. I'll get back to you as soon as I can!
            </p>
            <ul className="list-unstyled d-flex flex-column">
              <li>
                <i className="bi bi-phone-fill"></i> 0956 027 3240
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i> joenetuban@gmail.com
              </li>
              <li>
                <i className="bi bi-geo-alt-fill"></i> Barangay Culiat, Quezon
                City, Philippines
              </li>
            </ul>
          </div>
          <div className="col-md-6 contact-form">
            <form ref={form} onSubmit={sendEmail} className="glass-effect">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

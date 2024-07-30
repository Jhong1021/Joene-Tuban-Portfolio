import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section bg-dark text-light py-5">
      <div className="container">
        <h2 className="section-heading text-center mb-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-6 contact-info">
            <h4>Get in Touch</h4>
            <p>If you have any questions or just want to say hello, feel free to drop me a message. I'll get back to you as soon as I can!</p>
            <ul className="list-unstyled">
              <li><i className="bi bi-phone-fill"></i> 0956 027 3240</li>
              <li><i className="bi bi-envelope-fill"></i> joenetuban@gmail.com</li>
              <li><i className="bi bi-geo-alt-fill"></i> Barangay Culiat, Quezon City, Philippines</li>
            </ul>
          </div>
          <div className="col-md-6 contact-form">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

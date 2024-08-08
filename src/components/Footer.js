import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About</h5>
              <p>
                Providing cutting-edge solutions for all your web development needs. Learn more about our projects and services.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled d-flex flex-column">
                <li><a href="#home" className="text-dark">Home</a></li>
                <li><a href="#projects" className="text-dark">Projects</a></li>
                <li><a href="#tools" className="text-dark">Tools</a></li>
                <li><a href="#contact" className="text-dark">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <p>
                Email: <a href="mailto:joenetuban@gmail.com" className="text-dark">joenetuban@gmail.com</a><br />
                Cp no: <a href="tel:09560273240" className="text-dark">0956 027 3240</a>
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/joene.tuban?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-dark me-2"><i className="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark me-2"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/joenetuban" target="_blank" rel="noopener noreferrer" className="text-dark me-2"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/Jhong1021" target="_blank" rel="noopener noreferrer" className="text-dark"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          &copy; 2024 Joene Tuban. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 

import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="intro">
              <h2 className="display-4 mb-4">About Me</h2>
              <p className="lead">
                Hello! I'm Joene Tuban, a passionate Front-end Developer with a love for creating engaging and interactive web experiences. With expertise in modern web technologies and a keen eye for design, I strive to build user-centric solutions that not only look great but also provide seamless functionality.
              </p>
              <p>
                My journey in web development began with a fascination for the possibilities of the web and has since evolved into a commitment to continuously learning and growing. Whether it's developing a responsive user interface or optimizing web performance, I'm dedicated to delivering high-quality results.
              </p>
              <a href="#contact" class="btn btn-primary btn-lg" role="button">Contact Me</a>

            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-image text-center">
              <img src="/images/joene.jpg" alt="Joene Tuban" className="img-fluid rounded-circle shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand Logo */}
        <div className="navbar-brand">
          <img src="/images/logo2.png" alt="Joene's Logo" style={{ height: '50px' }} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link btn" href="/images/Joene Tuban Resume.pdf" download="Joene_Tuban_Resume.pdf">
              Download Resume
            </a>
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            <a className="nav-link" href="#projects">Project</a>
            <a className="nav-link" href="#tools">Tools</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

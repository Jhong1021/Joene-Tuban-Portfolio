import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand Logo */}
        <div className="navbar-brand">
          <img
            src="/images/logo2.png"
            alt="Joene's Logo"
            style={{ height: "50px" }}
          />
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
            <a className="nav-link" aria-current="page" href="#">
              <span className="box">Home</span>
            </a>
            <a className="nav-link" href="#projects">
              <span className="box">Projects</span>
            </a>
            <a className="nav-link" href="#about-me">
              <span className="box">About</span>
            </a>
            <a className="nav-link" href="#tools">
              <span className="box">Tools</span>
            </a>
            <a className="nav-link" href="#contact">
              <span className="box">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

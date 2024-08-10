import React from "react";
import "./ProjectPage.css";

const ProjectPage = () => {
  const projects = [
    {
      id: 1,
      title: "Gun Shop Static Website",
      image: "/images/gunshop.png",
      description: "Tools: HTML and CSS",
      demoLink: "https://jhong1021.github.io/App-Building/",
      codeLink: "https://github.com/Jhong1021/App-Building",
    },
    {
      id: 2,
      title: "Shopping Cart Checkout",
      image: "/images/shopping cart.png",
      description: "Tools: HTML, CSS, Javascript and React",
      demoLink:
        "https://shopping-checkout-react-q7hgawa5c-joenetuban-gmailcoms-projects.vercel.app/",
      codeLink: "https://github.com/Jhong1021/Shopping-Checkout-React",
    },
    {
      id: 3,
      title: "Fitness App Fullstack",
      image: "/images/fitnessapp.png",
      description: "Tools: HTML, CSS, Javascript, React, MongoDB and Express ",
      demoLink:
        "https://fitness-client-peg7-lg7aexegm-joenetuban-gmailcoms-projects.vercel.app",
      codeLink: "https://github.com/Jhong1021/fitness-Client",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <div className="container mt-5">
        <h1 className="text-center mb-4">My Projects</h1>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="project-card">
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>
                <div className="project-info p-3">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-buttons">
                    <a
                      href={project.demoLink}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;

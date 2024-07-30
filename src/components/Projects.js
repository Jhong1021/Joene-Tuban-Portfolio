import React from 'react';
import './Projects.css'; 

const projects = [
  {
    id: 1,
    link: "https://jhong1021.github.io/App-Building/",
    imgSrc: "images/gunshop.png",
    altText: "Gun Shop Website Static",
    title: "Gun Shop Website Static",
    description: `Guardian Guns is a static weapon shop website designed to showcase various firearms, including pistols and other weapons. The website provides a visually appealing and user-friendly interface where users can explore different gun models, view their specifications, and find pricing information.`
  },
  {
    id: 2,
    link: "https://movieclient-ja35.onrender.com/",
    imgSrc: "images/movieapp.png",
    altText: "Movie App Full Stack",
    title: "Movie App Full Stack",
    description: `MovieMaster Full Stack App is a comprehensive web application designed to manage and explore movies in a dynamic and interactive way. This full-stack application offers a range of features for users, admins, and guests, ensuring a seamless experience in movie management and exploration.`
  },
  {
    id: 3,
    link: "https://fitness-client-peg7.vercel.app/",
    imgSrc: "images/fitness.png",
    altText: "Project 3",
    title: "Fitness App Fullstack",
    description: `FitTrack Pro Full Stack App is a robust and interactive web application designed for fitness enthusiasts and health-conscious individuals. This full-stack application offers a comprehensive set of features for tracking workouts, managing fitness goals, and maintaining an active lifestyle.`
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <div className="row">
          {projects.map(project => (
            <div key={project.id} className="col-md-4">
              <div className="project-item">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <img src={project.imgSrc} alt={project.altText} className="img-fluid" />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

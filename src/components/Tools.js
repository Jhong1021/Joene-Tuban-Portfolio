import React, { useEffect } from 'react';
import './Tools.css';

const tools = [
  {
    id: 1,
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
    altText: "HTML5",
    title: "HTML5",
    description: "Building the structure of web pages with semantic elements."
  },
  {
    id: 2,
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
    altText: "CSS3",
    title: "CSS3",
    description: "Styling web pages with modern layouts and animations."
  },
  {
    id: 3,
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    altText: "JavaScript",
    title: "JavaScript",
    description: "Adding interactivity and dynamic behavior to web pages."
  },
  {
    id: 4,
    imgSrc: "/images/react.png",
    altText: "React",
    title: "React",
    description: "A library for building user interfaces and single-page applications."
  },
  {
    id: 5,
    imgSrc: "/images/node.png",
    altText: "Node.js",
    title: "Node.js",
    description: "JavaScript runtime for building scalable network applications."
  },
  {
    id: 6,
    imgSrc: "/images/express.png",
    altText: "Express",
    title: "Express.js",
    description: "Lightweight framework for building Node.js APIs and web apps."
  },
  {
    id: 7,
    imgSrc: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
    altText: "MongoDB",
    title: "MongoDB",
    description: "NoSQL database for storing data in a flexible, JSON-like format."
  },
  {
    id: 8,
    imgSrc: "/images/sql.png",
    altText: "SQL",
    title: "SQL",
    description: "Structured Query Language for managing relational databases."
  },
  {
    id: 9,
    imgSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    altText: "GitHub",
    title: "GitHub",
    description: "Version control and collaboration platform for code repositories."
  }
];

const ToolsSection = () => {
  useEffect(() => {
    const toolItems = document.querySelectorAll('.tool-item');

    const observerOptions = {
      root: null, 
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    toolItems.forEach(item => {
      observer.observe(item);
    });
  }, []);

  return (
    <section id="tools" className="tools-section">
      <div className="container">
        <h2 className="section-heading text-center mb-4">Tools & Technologies</h2>
        <div className="row">
          {tools.map(({ id, imgSrc, altText, title, description }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="tool-item text-center">
                <img src={imgSrc} alt={altText} className="img-fluid mb-3" style={{ height: '60px' }} />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

import React from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <IntroSection />
      <ProjectPage />
      <AboutMe />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

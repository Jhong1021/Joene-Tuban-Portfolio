import React from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <IntroSection />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
      {/* Other components or content here */}
    </div>
  );
}

export default App;

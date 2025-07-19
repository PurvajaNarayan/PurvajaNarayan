import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="big-greeting">
        Hello <span className="waving-hand">👋</span> I'm Purvaja 
      </div>
      <div className="intro-banner">
        🏫 Masters in AI @ Northeastern University | 👩🏻‍💻 AI Innovator Intern @ Chewy | 💻 Ex Software Developer @ Mercedes Benz
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;



import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

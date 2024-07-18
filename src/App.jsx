import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';
import './index.css';
import HireMe from './components/HireMe';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <HireMe/>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

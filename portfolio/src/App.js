import React, { useState } from "react";
import './App.css';

// Component Imports
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      </header>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

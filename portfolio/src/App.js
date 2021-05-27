import React from "react";
import './App.css';

// Component Imports
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

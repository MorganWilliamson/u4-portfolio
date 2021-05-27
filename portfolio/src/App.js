import React from "react";
import "./App.css";
import "./stylesheets/Navbar.css";

// Component Imports
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  return (
    <div className="lightMode">
      <section className="navbar">
          <h1>Morgan Williamson</h1>
      </section>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

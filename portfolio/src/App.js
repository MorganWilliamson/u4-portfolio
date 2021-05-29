import React from "react";
import useDarkMode from "./hooks/useDarkMode";

// Stylesheet Imports
import "./App.css";
import "./stylesheets/Navbar.css";

// Component Imports
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const { mode, toggleMode } = useDarkMode();

  return (
    <div className={mode === "dark" ? "darkMode" : "lightMode"}>
      <section className="navbar">
          <h1>Morgan Williamson</h1>
          <button type="button" onClick={toggleMode}>
            Toggle Dark Theme
          </button>
      </section>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;

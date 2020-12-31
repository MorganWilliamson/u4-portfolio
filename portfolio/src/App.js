import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <About />
        {/* <Projects />
        <Contact />
        <Footer /> */}
        <p>Application is rendering.</p>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <p>Application is rendering.</p>
      </header>
    </div>
  );
}

export default App;

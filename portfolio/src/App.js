import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // TO DO (and general thoughts) : 
  // 1) Full routing (React Router) still needs to be set up. 
  // 2) Dark Mode needs to be fully fleshed out, not just work on the button. 
  // - On that note, the dark mode button also needs a better style than the default HTML one. 
  // 3) The contact form needs to DO something beyond generating an alert.
  // - REMEMBER: Nodemailer. You'll need a full back-end to work with it too, though. 
  // 4) The styles for the whole page need some serious polish. No orange. Not the default shade, at least. It's too aggressive.
  // - It looks Halloween themed at the moment. 
  // - That "Contact Me" button should pop, but it shouldn't be flat blue like that. The contrast is too stark, and it clashes with the rest of the page. 
  // 5) The Navbar is a little.. clunky. It needs something that separates it from the rest of the page. 
  // - That AND the footer (if not every section on the page) need clear distinctions as their own sections. 
  // 6) Figure out what you're doing with the social media icons at the bottom. 
  // 7) Once ALL of that is sorted, add breakpoints and knock out responsive design. 

  // It LOOKS like a lot to finish, but it's really not. 1) Routing, 2) Form Functionality, 3) Styling, 4) Reponsive Design. 
  // And really, you could argue that Styling and Responsive Design go hand-in-hand. So, three things to do. 

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

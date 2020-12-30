import React from "react";
import '../stylesheets/Navbar.css';

const Navbar = (props) => {
    const toggleMode = (e) => {
        e.preventDefault();
        props.setDarkMode(!props.darkMode);
    };

    return (
        <div className="navbar">
            <h1>Morgan Williamson</h1>
            <nav>
                <a href="/">ABOUT</a>
                <br/>
                <a href="/">PROJECTS</a>
                <br/>
                <a href="/">CONTACT</a>
            </nav>
            <button onClick={toggleMode} className={props.darkMode ? 'toggleOn' : 'toggleOff'}>Dark Mode</button>
        </div>
    )
}

export default Navbar;

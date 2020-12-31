import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/About.css";

const About = () => {
    return(
        <section className="about">
            <div className="aboutInfo">
                <h2>Hello!</h2>
                <h3>My name is Morgan, I'm a Full-Stack Web Developer based in Arkansas.</h3>
                <p>Click here to get in touch:</p>
                <Link className="aboutLink" to="/contact">Contact Me</Link>
            </div>
            <div className="aboutImage">
                <img src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="grey laptop in a window at night" />
            </div>
        </section>
    )
}

export default About;
import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/About.css";

const About = () => {
    return(
        <section className="about">
            <div className="aboutImage">
                <div className="aboutInfo">
                    <h2>Hello!</h2>
                    <h3>My name is Morgan, I'm a Full-Stack Web Developer based in Arkansas.</h3>
                    <p>I specialize in <strong>JavaScript, React, Node.js,</strong> and <strong>HTML/CSS.</strong></p>
                    <p>I'm <strong>currently looking for work</strong> - local, remote, or otherwise!</p>
                    <p>Please click below if you'd like to get in touch:</p>
                    <Link className="aboutLink" to="/contact">Contact Me</Link>
                </div>
            </div>
        </section>
    )
}

export default About;
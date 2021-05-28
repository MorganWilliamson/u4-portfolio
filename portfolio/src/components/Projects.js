import React from "react";
import "../stylesheets/Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="projectsContainer">
                <a href="https://github.com/Build-Week-TT16FT-African-Marketplace/front-end" rel="noreferrer" target="_blank">
                    <h4>African Marketplace</h4>
                    <p>Mock eCommerce site that's <br/> meant to be used by <br/>small businesses in East Africa.</p>
                    <ul>Tools Used:
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                </a>

                <a href="https://github.com/Lambda-School-Labs/story-squad-fe" rel="noreferrer" target="_blank">
                    <h4>Story Squad</h4>
                    <p>Browser based reading, <br/>writing, and drawing game <br/>meant to spark creativity.</p>
                    <ul>Tools Used:
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Ant Design</li>
                    </ul>
                </a>

                <a href="https://github.com/BW-webft16-CO-MAKE/back-end" rel="noreferrer" target="_blank">
                    <h4>Co-Make</h4>
                    <p>Community driven app for <br/>tracking local issues such<br/> as hazards or vandalism.</p>
                    <ul>Tools Used:
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>Redux</li>
                    </ul>
                </a>
            </div>
        </section>
    )
}

export default Projects;
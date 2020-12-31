import React from "react";
import "../stylesheets/Projects.css";

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="projectsContainer">
                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 1</h4>
                    <p>Project 1 description</p>
                    <ul>Tools Used:
                        <li>React</li>
                        <li>Node</li>
                        <li>SQL</li>
                    </ul>
                </a>

                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 2</h4>
                    <p>Project 2 description</p>
                    <ul>Tools Used:
                        <li>React</li>
                        <li>Node</li>
                        <li>SQL</li>
                    </ul>
                </a>

                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 3</h4>
                    <p>Project 3 description</p>
                    <ul>Tools Used:
                        <li>React</li>
                        <li>Node</li>
                        <li>SQL</li>
                    </ul>
                </a>
            </div>
        </section>
    )
}

export default Projects;
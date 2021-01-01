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
                        <li>React/Redux</li>
                        <li>Svelte</li>
                    </ul>
                </a>

                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 2</h4>
                    <p>Project 2 description</p>
                    <ul>Tools Used:
                        <li>Node</li>
                        <li>Express</li>
                        <li>SQL</li>
                    </ul>
                </a>

                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 3</h4>
                    <p>Project 3 description</p>
                    <ul>Tools Used:
                        <li>Python</li>
                    </ul>
                </a>

                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 4</h4>
                    <p>Project 4 description</p>
                    <ul>Tools Used:
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                    </ul>
                </a>
            </div>
        </section>
    )
}

export default Projects;
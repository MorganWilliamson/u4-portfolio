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
                        <li>React</li>
                        <li>Redux</li>
                        <li>yup</li>
                    </ul>
                </a>

                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 2</h4>
                    <p>Project 2 description</p>
                    <ul>Tools Used:
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                    </ul>
                </a>

                <a href="https://github.com/MorganWilliamson/pokeapi-test" rel="noreferrer" target="_blank">
                    <h4>React PokéDex</h4>
                    <p>A PokéDex web app that <br/>utilizes the PokéAPI.</p>
                    <ul>Tools Used:
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Axios</li>
                    </ul>
                </a>

                <a href="https://www.google.com" rel="noreferrer" target="_blank">
                    <h4>Project Name 4</h4>
                    <p>Project 4 description</p>
                    <ul>Tools Used:
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                        <li>Placeholder</li>
                    </ul>
                </a>
            </div>
        </section>
    )
}

export default Projects;
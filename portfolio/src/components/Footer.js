import React from "react";
import "../stylesheets/Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <h4>Morgan Williamson</h4>
            <a className="repo" href="https://github.com/MorganWilliamson/u4-portfolio" rel="noreferrer" target="_blank" >GitHub Repo</a>

            <div className="footerSM">
                <a href="https://github.com/MorganWilliamson" rel="noreferrer" target="_blank"><img src="https://simpleicons.org/icons/github.svg" alt="github logo" /><p>GitHub</p></a>
                <a href="https://www.linkedin.com/in/morgan-t-williamson/" rel="noreferrer" target="_blank"><img src="https://simpleicons.org/icons/linkedin.svg" alt="linkedin logo"/><p>LinkedIn</p></a>
                <a href="https://twitter.com/MorganW_dev" rel="noreferrer" target="_blank"><img src="https://simpleicons.org/icons/twitter.svg" alt="twitter logo" /><p>Twitter</p></a>
            </div>
        </section>
    )
}

export default Footer;

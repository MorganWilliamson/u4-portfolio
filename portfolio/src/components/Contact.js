import React from "react";
import "../stylesheets/Contact.css";

const Contact = () => {
    return(
        <section className="contact">
            <h2>Contact</h2>

            <p>You can find me at any of the sites below, please feel free to reach out anytime!</p>

            <div className="SMlinks">
                <a href="https://github.com/MorganWilliamson" rel="noreferrer" target="_blank"><img src="https://simpleicons.org/icons/github.svg" alt="github logo" />GitHub</a>
                <a href="https://www.linkedin.com/in/morgan-t-williamson/" rel="noreferrer" target="_blank"><img src="https://simpleicons.org/icons/linkedin.svg" alt="linkedin logo"/>LinkedIn</a>
                <a href="https://twitter.com/MorganW_dev" rel="noreferrer" target="_blank"><img src="https://simpleicons.org/icons/twitter.svg" alt="twitter logo" />Twitter</a>
            </div>
        </section>
    );
};

export default Contact;

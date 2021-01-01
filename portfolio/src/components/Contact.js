import React from "react";
import "../stylesheets/Contact.css";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    handleMessageChange = (e) => {
        this.setState({message: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        alert('Your form has been submitted. Thank you!')
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <section className="contact">
                <h2>Contact</h2>
                
                <form className="contactForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        className="contactFormInput"
                        value={this.state.value}
                        onChange={this.handleNameChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        className="contactFormInput"
                        value={this.state.value}
                        onChange={this.handleEmailChange}
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea 
                        rows="5"
                        className="contactFormInput"
                        value={this.state.value}
                        onChange={this.handleMessageChange}
                    />

                    <button type="submit">Submit</button>
                </form> 
            </section>
        )
    }
}

export default Contact;

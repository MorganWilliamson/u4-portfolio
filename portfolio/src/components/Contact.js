import React from "react";
import axios from "axios";
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

    resetForm = () => {
        this.setState({ name: '', email: '', message: '' })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // Come back and update URL
        axios.post('http://localhost:3000/send')
            .then((res) => {
                if (res.data.status === 'success') {
                    alert("Message sent. Thank you!");
                    this.resetForm()
                } else if (res.data.status === 'fail') {
                    alert("Message could not be sent.");
                    console.log("Failure.")
                }
            })
            .catch((err) => {
                alert("The system encountered an error.")
                console.log(err.message)
            })
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

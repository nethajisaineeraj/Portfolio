import React, { Component } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import './index.css';

const CONTACT = {
    phone: '+91-7416827212',
    email: 'saineerajmahanthi@gmail.com',
    linkedin: 'https://www.linkedin.com/in/netaji-sai-neeraj-mahanthi',
    github: 'https://github.com/nethajisaineeraj',
};

class ContactMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            errors: {},
            sending: false,
            success: ''
        };
    }

    validate = () => {
        const errors = {};
        const { name, email, message } = this.state;

        if (!name.trim()) errors.name = '*Name is required';
        if (!email.trim()) errors.email = '*Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = '*Invalid email address';
        if (!message.trim()) errors.message = '*Message is required';

        return errors;
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errors: { ...this.state.errors, [e.target.name]: '' },
            success: ''
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors, success: '' });

        if (Object.keys(errors).length > 0) return;

        this.setState({ sending: true });

        try {
            await emailjs.send("service_l8p5kxc", "template_h98xa8c", {
                title: "Contact Form Submission",
                name: this.state.name,
                to_name: "Sai Neeraj",
                from_name: this.state.name,
                from_email: this.state.email,
                message: this.state.message,
                email: CONTACT.email,
            }, "CDb6Wh8T61wcf3DBL");
            this.setState({
                success: 'Message sent successfully!',
                name: '',
                email: '',
                message: '',
                sending: false
            });
        } catch (err) {
            this.setState({ success: 'Failed to send message. Please try again later.', sending: false });
        }
    };

    render() {
        const { name, email, message, errors, sending, success } = this.state;

        return (
            <div className="contactme-section" id="contact">
                <div className="contactme-left">
                    <h1 className="contactme-heading">Contact</h1>
                    <div className="contactme-info-row">
                        <FaPhoneAlt className="contactme-icon" />
                        <a href={`tel:${CONTACT.phone}`} className="contactme-link">{CONTACT.phone}</a>
                    </div>
                    <div className="contactme-info-row">
                        <FaEnvelope className="contactme-icon" />
                        <a href={`mailto:${CONTACT.email}`} className="contactme-link">{CONTACT.email}</a>
                    </div>
                    <div className="contactme-info-row" onClick={() => window.open(CONTACT.linkedin, '_blank', 'noopener,noreferrer')}>
                        <FaLinkedin className="contactme-icon" />
                        <span className="contactme-link">LinkedIn</span>
                    </div>
                    <div className="contactme-info-row" onClick={() => window.open(CONTACT.github, '_blank', 'noopener,noreferrer')}>
                        <FaGithub className="contactme-icon" />
                        <span className="contactme-link">GitHub</span>
                    </div>
                </div>

                <div className="contactme-right">
                    <div className="contactme-form-heading">Reach Me Out</div>
                    <form className="contactme-form" onSubmit={this.handleSubmit} noValidate>
                        <div>
                            <label className="contactme-label">Name</label>
                            <input
                                className="contactme-input"
                                type="text"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            {errors.name && <div className="contactme-error">{errors.name}</div>}
                        </div>
                        <div>
                            <label className="contactme-label">Email</label>
                            <input
                                className="contactme-input"
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                autoComplete="off"
                            />
                            {errors.email && <div className="contactme-error">{errors.email}</div>}
                        </div>
                        <div>
                            <label className="contactme-label">Message</label>
                            <textarea
                                className="contactme-textarea"
                                name="message"
                                value={message}
                                onChange={this.handleChange}
                            />
                            {errors.message && <div className="contactme-error">{errors.message}</div>}
                        </div>
                        <button className="contactme-sendbtn" type="submit" disabled={sending}>
                            {sending ? 'Sending...' : 'Send'}
                        </button>
                        {success && (
                            <div className={success.startsWith('Message sent') ? 'contactme-success' : 'contactme-error'}>
                                {success}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactMe;

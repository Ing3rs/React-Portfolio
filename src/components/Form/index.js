import React from 'react';
import './style.css';

function ContactForm() {
    return (
        <form className="contact-form">
            <div className="mb-3">
                <label
                    for="nameInput"
                    className="form-label">
                    Name
                </label>
                <input
                    type="name"
                    className="form-control"
                    id="nameInput" />
            </div>
            <div className="mb-3">
                <label for="emailInput" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    aria-describedby="emailHelp" />
                <div
                    id="emailHelp"
                    className="form-text">
                    I'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label
                    for="detailInput"
                    className="form-label">
                    Tell me about your enquiry
                </label>
                <input
                    type="subject"
                    className="form-control"
                    id="detailInput" />
            </div>
            <button type="submit" className="btn submit-button">Submit</button>
        </form>
    );
  }

export default ContactForm;

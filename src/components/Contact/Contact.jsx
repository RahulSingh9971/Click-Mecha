import React from 'react';
import './Contact.css';
import { FiPhone, FiMail } from 'react-icons/fi'; // Using feather icons for clean look

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="container text-center">
                {/* Headline */}
                <h2 className="contact-headline">
                    Let's Talk <span className="emoji-3d">💬</span> About <br />
                    <span className="highlight-text">Your <span className="emoji-3d">👋</span> Next Project</span>
                </h2>

                {/* Contact Info Grid */}
                <div className="contact-info-wrapper">
                    <div className="contact-item">
                        <div className="icon-circle">
                            <FiPhone className="contact-icon" />
                        </div>
                        <div className="contact-details text-start">
                            <span className="contact-label">Phone Number:</span>
                            <span className="contact-value">+91-99996-73073</span>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon-circle">
                            <FiMail className="contact-icon" />
                        </div>
                        <div className="contact-details text-start">
                            <span className="contact-label">Email:</span>
                            <span className="contact-value">coffee@clickmecha.com</span>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="cta-wrapper position-relative d-inline-block">
                    <span className="free-tag">FREE</span>
                    <button className="btn-book-call">BOOK A 30 MIN CALL</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import mapImage from '../../assets/contact-images/map.png'; // Imported the uploaded map image

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            {/* Hero Section */}
            <section className=" container text-center">
                <div className="contact-hero">
                    <h1 className="contact-hero-title">
                        Let's make something <span className="serif-italic">loud</span>
                    </h1>
                    <p className="contact-hero-desc">
                        Tell us about your project, and we'll respond within 24 hours. <br />
                        No jargon — just ideas that work.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="contact-form-section">
                <div className="container">
                    <div className="row">
                        {/* Left Side - Form */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h2 className="form-title">
                                Send your Query <span className="stars-icon">✨</span>
                            </h2>

                            <form className="query-form">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control custom-input" placeholder="Full Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control custom-input" placeholder="Email Address" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="tel" className="form-control custom-input" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control custom-input" placeholder="Company Name" />
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="services-group mt-4">
                                    <label className="group-label">Services Looking For</label>
                                    <div className="row mt-2">
                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="branding" />
                                                <label className="form-check-label" htmlFor="branding">Branding</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="uiux" />
                                                <label className="form-check-label" htmlFor="uiux">UI/UX Design</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="graphic" />
                                                <label className="form-check-label" htmlFor="graphic">Graphic Design</label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="appdev" />
                                                <label className="form-check-label" htmlFor="appdev">App Development</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="webdev" />
                                                <label className="form-check-label" htmlFor="webdev">Website Development</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="crm" />
                                                <label className="form-check-label" htmlFor="crm">CRM & ERP Development</label>
                                            </div>
                                        </div>

                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="marketing" />
                                                <label className="form-check-label" htmlFor="marketing">Marketing</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="seo" />
                                                <label className="form-check-label" htmlFor="seo">SEO</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="automations" />
                                                <label className="form-check-label" htmlFor="automations">Automations</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-3 mt-2">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control custom-input" placeholder="Budget Approx" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control custom-input" placeholder="Tell us about the project" />
                                    </div>
                                </div>

                                <div className="form-check mt-4">
                                    <input className="form-check-input" type="checkbox" id="consent" />
                                    <label className="form-check-label" htmlFor="consent">I agree to be contacted about my project.</label>
                                </div>

                                <button type="submit" className="btn-submit-query mt-4">SUBMIT QUERY</button>
                            </form>
                        </div>

                        {/* Right Side - Contact Info */}
                        <div className="col-lg-6">
                            <div className="contact-details-card">
                                <h3 className="details-title">Contact Details</h3>

                                <div className="info-item">
                                    <div className="info-icon-circle">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="info-text">
                                        <span className="label">PHONE NUMBER</span>
                                        <p className="value">+91 98765 43210, +91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-circle">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="info-text">
                                        <span className="label">OFFICE ADDRESS</span>
                                        <p className="value">Best Sky Tower, 810, Netaji Subhash Place, Shakurpur, New Delhi, Delhi, 110034</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-icon-circle">
                                        <FaEnvelope />
                                    </div>
                                    <div className="info-text">
                                        <span className="label">EMAIL ADDRESS</span>
                                        <p className="value">coffee@clickmecha.com</p>
                                    </div>
                                </div>

                                {/* Map Image */}
                                <div className="map-container mt-4">
                                    <img
                                        src={mapImage}
                                        alt="Office Location Map"
                                        style={{ width: '100%', height: 'auto', borderRadius: '15px', display: 'block' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

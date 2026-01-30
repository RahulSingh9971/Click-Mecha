import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/clickmecha-logo.png'; // Updated logo

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    {/* Branding Column */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="footer-logo mb-3">
                            {/* Using text for now as per design mockup appearance effectively, or the image with filter if needed */}
                            <div className="logo-container">
                                <Link to="/">
                                    <img src={logo} alt="Clickmecha" className="footer-logo-img" />
                                </Link>
                            </div>
                        </div>
                        <p className="footer-description">
                            We design, build, and market digital solutions that help businesses grow faster.
                        </p>
                        <div className="social-icons d-flex gap-3 mb-4">
                            <a href="https://www.linkedin.com/company/clickmecha" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                            <a href="https://www.facebook.com/theclickmechaa" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebook /></a>
                            <a href="https://www.instagram.com/theclickmechaa" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                        </div>
                        <div className="copyright text-muted">
                            <small>
                                Copyright ©kavya kapoor.<br />
                                All rights reserved
                            </small>
                        </div>
                        <div className="newsletter-section mt-4">
                            <h6 className="text-white mb-2">Subscribe to our newsletter</h6>
                            <form className="d-flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-btn">
                                    →
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Navigation Links and Legal Links */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="d-flex justify-content-between gap-3">
                            <ul className="list-unstyled footer-links">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><Link to="/services">SERVICES</Link></li>
                                <li><Link to="/clientele">CLIENTELE</Link></li>
                                <li><Link to="/career">CAREER</Link></li>
                                <li><Link to="/blog">BLOG</Link></li>
                                <li><Link to="/contact">CONTACT</Link></li>
                            </ul>
                            <ul className="list-unstyled footer-links">
                                <li><a href="#privacy">PRIVACY POLICY</a></li>
                                <li><a href="#terms">TERMS OF SERVICE</a></li>
                                <li><a href="#cookies">COOKIES POLICIES</a></li>
                                <li><Link to="/posh-policy">PoSH POLICY</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact & Map */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="footer-contact">
                            <div className="d-flex align-items-start gap-2 mb-2 text-white-50">
                                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                                <span>Best Sky Tower, 810, Netaji Subhash Place, Shakurpur, New Delhi, Delhi, 110034</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 mb-2 text-white-50">
                                <FaPhoneAlt />
                                <span>+91 99990 08998</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 text-white-50">
                                <FaEnvelope />
                                <span>kavya@clickmecha.com</span>
                            </div>
                        </div>

                        {/* Google Map embedded in 3rd column */}
                        <div className="footer-map-container mt-4" style={{ borderRadius: '15px', overflow: 'hidden', height: '200px' }}>
                            <iframe
                                title="Footer Location Map"
                                src="https://maps.google.com/maps?q=Best%20Sky%20Tower%2C%20810%2C%20Netaji%20Subhash%20Place%2C%20Shakurpur%2C%20New%20Delhi%2C%20Delhi%20110034&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Text */}
            <div className="footer-bg-text">
                CLICKMECHA
            </div>
        </footer>
    );
};

export default Footer;

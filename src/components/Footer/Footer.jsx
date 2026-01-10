import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaTiktok, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import logo from '../../assets/clickmecha-logo.png'; // Updated logo

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    {/* Branding Column */}
                    <div className="col-lg-5 col-md-12 mb-4">
                        <div className="footer-logo mb-3">
                            {/* Using text for now as per design mockup appearance effectively, or the image with filter if needed */}
                            <div className="logo-container">
                                <img src={logo} alt="Clickmecha" className="footer-logo-img" />
                            </div>
                        </div>
                        <p className="footer-description">
                            We design, build, and market digital solutions that help businesses grow faster.
                        </p>
                        <div className="social-icons d-flex gap-3 mb-4">
                            <a href="#" className="social-icon"><FaTiktok /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaXTwitter /></a>
                            <a href="#" className="social-icon"><FaYoutube /></a>
                        </div>
                        <div className="copyright text-muted">
                            <small>
                                Copyright ©kavya kapoor.<br />
                                All rights reserved
                            </small>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/services">SERVICES</Link></li>
                            <li><Link to="/clientele">CLIENTELE</Link></li>
                            <li><Link to="/career">CAREER</Link></li>
                            <li><Link to="/blog">BLOG</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <ul className="list-unstyled footer-links">
                            <li><a href="#privacy">PRIVACY POLICY</a></li>
                            <li><a href="#terms">TERMS OF SERVICE</a></li>
                            <li><a href="#cookies">COOKIES POLICIES</a></li>
                        </ul>
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

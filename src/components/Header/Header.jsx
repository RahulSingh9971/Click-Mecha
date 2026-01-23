import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/clickmecha-logo.png';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <Link to="/">
                        <img src={logo} alt="Clickmecha Logo" className="logo-image" />
                    </Link>
                </div>

                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <div className="close-menu-icon" onClick={toggleMenu}>&times;</div>
                    <Link to="/" onClick={toggleMenu}>HOME</Link>
                    <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
                    <Link to="/services" onClick={toggleMenu}>SERVICES</Link>
                    <Link to="/clientele" onClick={toggleMenu}>CLIENTELE</Link>
                    <Link to="/career" onClick={toggleMenu}>CAREER</Link>
                    <Link to="/blog" onClick={toggleMenu}>BLOG</Link>
                    <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
                    <div className="mobile-cta">
                        <div className="contact-icons-wrapper">
                            <a href="tel:+919999008998" className="contact-icon-link">
                                <FaPhoneAlt />
                            </a>
                            <a href="mailto:kavya@clickmecha.com" className="contact-icon-link">
                                <FaEnvelope />
                            </a>
                        </div>
                        <a href="https://calendly.com/clickmecha/15min" target="_blank" rel="noopener noreferrer">
                            <button className="btn-book">BOOK A FREE CALL</button>
                        </a>
                    </div>
                </nav>

                <div className="header-cta desktop-cta">
                    <a href="https://calendly.com/clickmecha/15min" target="_blank" rel="noopener noreferrer">
                        <button className="btn-book">BOOK A FREE CALL</button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/clickmecha-logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <img src={logo} alt="Clickmecha Logo" className="logo-image" />
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
                        <button className="btn-book" onClick={toggleMenu}>BOOK A FREE CALL</button>
                    </div>
                </nav>

                <div className="header-cta desktop-cta">
                    <button className="btn-book">BOOK A FREE CALL</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

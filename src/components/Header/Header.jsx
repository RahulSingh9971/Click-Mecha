import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

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
                    <a href="/#services" onClick={toggleMenu}>SERVICES</a>
                    <a href="/#case-studies" onClick={toggleMenu}>CASE STUDIES</a>
                    <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
                    <a href="/#blogs" onClick={toggleMenu}>BLOGS</a>
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

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    const handleContactClick = () => {
        closeMenu();
        navigate('/contact');
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Blog', path: '/blog' },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    Thầy <span>Tín</span>
                </NavLink>

                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <Button variant="gradient" onClick={handleContactClick}>
                        Liên hệ
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import { Facebook, Linkedin, Mail, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Thầy Tín</h2>
                        <p className="footer-slogan">
                            Chia sẻ kiến thức, hỗ trợ kỹ thuật và xây dựng giải pháp số hiệu quả.
                        </p>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="social-icon" aria-label="Email">
                            <Mail size={20} />
                        </a>
                        <a href="#" className="social-icon" aria-label="Github">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Thầy Tín. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

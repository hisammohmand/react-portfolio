import React from 'react';
import './Footer.css';
import { socialprofils } from '../content_option';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Mohammad Hisam Mohmand</h3>
                    <p>Principal Data Analyst specializing in Search Trust and Safety</p>
                    <div className="social-links">
                        <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href={socialprofils.twitter} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/#portfolio">Portfolio</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Skills</h4>
                    <ul>
                        <li>Python & SQL</li>
                        <li>Data Visualization</li>
                        <li>Machine Learning</li>
                        <li>Power BI & Tableau</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <p>📍 Seattle, WA</p>
                    <p>📧 m77.hisam@gmail.com</p>
                    <p>📱 (206) 530-8402</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Mohammad Hisam Mohmand. All rights reserved.</p>
                <p>Built with React & ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;

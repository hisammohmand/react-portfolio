import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const TrustSafetyAnalytics = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Trust & Safety Analytics Dashboard</h1>
                    <p className="project-subtitle">
                        Comprehensive dashboard for monitoring and analyzing trust and safety metrics across platforms
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 6 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Machine Learning, Power BI, SQL Server, Azure
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 85% safety incidents reduction
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop"
                            alt="Trust & Safety Analytics Dashboard"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Trust & Safety Analytics Dashboard is a comprehensive platform designed to monitor and analyze platform safety metrics in real-time. 
                                This project leverages advanced machine learning algorithms to detect threats, assess risks, and provide automated incident response 
                                capabilities while ensuring platform security and user trust.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🛡️</span>
                                    <span>Threat Detection</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <span>Real-time Monitoring</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🚨</span>
                                    <span>Automated Alerts</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📊</span>
                                    <span>Risk Assessment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Results */}
                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Safety Score</h4>
                                <div className="result-value">98.5%</div>
                                <p>Overall platform safety rating</p>
                            </div>
                            <div className="result-card">
                                <h4>Response Time</h4>
                                <div className="result-value">2.3 min</div>
                                <p>Average incident response time</p>
                            </div>
                            <div className="result-card">
                                <h4>False Positive Rate</h4>
                                <div className="result-value">1.2%</div>
                                <p>Minimal false alarms</p>
                            </div>
                            <div className="result-card">
                                <h4>Incident Reduction</h4>
                                <div className="result-value">85%</div>
                                <p>Decrease in safety incidents</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="key-features">
                        <h3>🔧 Key Features & Technologies</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Real-time Monitoring</h4>
                                <p>Continuous monitoring of platform safety metrics and user behavior</p>
                            </div>
                            <div className="feature-item">
                                <h4>Threat Detection</h4>
                                <p>Advanced ML algorithms for detecting potential threats and risks</p>
                            </div>
                            <div className="feature-item">
                                <h4>Automated Alerts</h4>
                                <p>Instant notifications for safety incidents and suspicious activities</p>
                            </div>
                            <div className="feature-item">
                                <h4>Risk Assessment</h4>
                                <p>Comprehensive risk scoring and assessment capabilities</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <h3>🚀 Ready to Enhance Your Platform Safety?</h3>
                        <p>This project demonstrates advanced safety monitoring and threat detection capabilities. Let's discuss how we can implement similar solutions for your platform.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="cta-button primary">
                                Get in Touch
                            </Link>
                            <Link to="/portfolio" className="cta-button secondary">
                                View Other Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustSafetyAnalytics;

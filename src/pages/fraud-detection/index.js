import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const FraudDetection = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Financial Fraud Detection Model</h1>
                    <p className="project-subtitle">
                        Machine learning model for detecting fraudulent activities in real-time with high accuracy
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 5 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Scikit-learn, TensorFlow, Apache Spark, Kafka
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 99.2% detection accuracy
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
                            alt="Financial Fraud Detection Model"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Financial Fraud Detection Model is an advanced machine learning system designed to identify and prevent fraudulent activities
                                in real-time financial transactions. This project leverages sophisticated algorithms for pattern recognition, anomaly detection,
                                and predictive modeling to ensure secure financial operations.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🔍</span>
                                    <span>Pattern Recognition</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <span>Real-time Detection</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🛡️</span>
                                    <span>Fraud Prevention</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📊</span>
                                    <span>ML Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Results */}
                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Detection Accuracy</h4>
                                <div className="result-value">99.2%</div>
                                <p>High fraud detection accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Processing Speed</h4>
                                <div className="result-value">50ms</div>
                                <p>Real-time transaction processing</p>
                            </div>
                            <div className="result-card">
                                <h4>False Positive Rate</h4>
                                <div className="result-value">0.8%</div>
                                <p>Minimal false alarms</p>
                            </div>
                            <div className="result-card">
                                <h4>Cost Savings</h4>
                                <div className="result-value">$4.2M</div>
                                <p>Annual fraud prevention savings</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="key-features">
                        <h3>🔧 Key Features & Technologies</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Real-time Detection</h4>
                                <p>Instant fraud detection with 50ms processing time</p>
                            </div>
                            <div className="feature-item">
                                <h4>Pattern Recognition</h4>
                                <p>Advanced ML algorithms for identifying fraud patterns</p>
                            </div>
                            <div className="feature-item">
                                <h4>Anomaly Detection</h4>
                                <p>Sophisticated anomaly detection for suspicious activities</p>
                            </div>
                            <div className="feature-item">
                                <h4>Predictive Modeling</h4>
                                <p>Proactive fraud prevention through predictive analytics</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <h3>🚀 Ready to Secure Your Financial Operations?</h3>
                        <p>This project demonstrates advanced fraud detection capabilities with high accuracy. Let's discuss how we can implement similar solutions for your financial security needs.</p>
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

export default FraudDetection;

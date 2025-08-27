import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SocialMediaSentiment = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Social Media Sentiment Analysis</h1>
                    <p className="project-subtitle">
                        NLP-based sentiment analysis for social media content and brand monitoring
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 3 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, NLTK, TextBlob, Scikit-learn, Flask, MongoDB
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 89.5% sentiment accuracy
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                            alt="Social Media Sentiment Analysis"
                            className="main-image"
                        />
                    </div>

                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Sentiment Accuracy</h4>
                                <div className="result-value">89.5%</div>
                                <p>Overall sentiment classification accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Processing Speed</h4>
                                <div className="result-value">10K</div>
                                <p>Posts analyzed per minute</p>
                            </div>
                            <div className="result-card">
                                <h4>Brand Sentiment</h4>
                                <div className="result-value">85%</div>
                                <p>Positive brand sentiment score</p>
                            </div>
                            <div className="result-card">
                                <h4>Response Time</h4>
                                <div className="result-value">2.5 min</div>
                                <p>Average response time to trends</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h3>🚀 Ready to Monitor Your Brand Sentiment?</h3>
                        <p>This project demonstrates advanced NLP capabilities for social media monitoring. Let's discuss how we can implement similar solutions for your brand.</p>
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

export default SocialMediaSentiment;

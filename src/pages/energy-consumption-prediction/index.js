import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const EnergyConsumption = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Energy Consumption Prediction</h1>
                    <p className="project-subtitle">
                        Time series forecasting for energy consumption patterns and optimization
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 4 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Prophet, ARIMA, Scikit-learn, Plotly, PostgreSQL
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 18% cost reduction
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop"
                            alt="Energy Consumption Prediction"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Energy Consumption Prediction system is an advanced time series forecasting solution designed to optimize energy usage and reduce costs. 
                                This project leverages sophisticated machine learning algorithms to predict energy consumption patterns, enabling proactive energy management 
                                and significant cost savings through data-driven optimization strategies.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <span>Energy Forecasting</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📈</span>
                                    <span>Time Series Analysis</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">💰</span>
                                    <span>Cost Optimization</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🎯</span>
                                    <span>Predictive Modeling</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Forecast Accuracy</h4>
                                <div className="result-value">92.8%</div>
                                <p>Energy consumption prediction accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Cost Savings</h4>
                                <div className="result-value">18%</div>
                                <p>Reduction in energy costs</p>
                            </div>
                            <div className="result-card">
                                <h4>Prediction Horizon</h4>
                                <div className="result-value">30 days</div>
                                <p>Forecast ahead capability</p>
                            </div>
                            <div className="result-card">
                                <h4>Model Performance</h4>
                                <div className="result-value">95%</div>
                                <p>Confidence level</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h3>🚀 Ready to Optimize Your Energy Consumption?</h3>
                        <p>This project demonstrates advanced time series forecasting for energy optimization. Let's discuss how we can implement similar solutions for your energy management needs.</p>
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

export default EnergyConsumption;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ClimateChangeAnalysis = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Climate Change Data Analysis</h1>
                    <p className="project-subtitle">
                        Environmental data analysis for climate change insights and sustainability
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 5 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Pandas, Matplotlib, Scikit-learn, GeoPandas, Jupyter
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 94.2% trend accuracy
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop"
                            alt="Climate Change Data Analysis"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Climate Change Data Analysis project is a comprehensive environmental research platform designed to analyze climate patterns and predict 
                                environmental trends. This project leverages advanced statistical analysis and machine learning to provide insights into climate change, 
                                enabling informed decision-making for sustainability and environmental protection.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🌍</span>
                                    <span>Environmental Analysis</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📊</span>
                                    <span>Statistical Modeling</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🔬</span>
                                    <span>Research Focus</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📈</span>
                                    <span>Trend Prediction</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Data Coverage</h4>
                                <div className="result-value">95%</div>
                                <p>Global coverage of climate data</p>
                            </div>
                            <div className="result-card">
                                <h4>Trend Accuracy</h4>
                                <div className="result-value">94.2%</div>
                                <p>Climate trend prediction accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Prediction Horizon</h4>
                                <div className="result-value">10 years</div>
                                <p>Long-term forecasting capability</p>
                            </div>
                            <div className="result-card">
                                <h4>Research Papers</h4>
                                <div className="result-value">3</div>
                                <p>Published research papers</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h3>🚀 Ready to Analyze Environmental Data?</h3>
                        <p>This project demonstrates advanced environmental data analysis capabilities. Let's discuss how we can implement similar solutions for your environmental research needs.</p>
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

export default ClimateChangeAnalysis;

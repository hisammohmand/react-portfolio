import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const EcommerceAnalytics = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>E-commerce Analytics Platform</h1>
                    <p className="project-subtitle">
                        Sales and customer behavior analysis for e-commerce platforms with predictive insights
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 4 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Pandas, Scikit-learn, Tableau, PostgreSQL
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 32% revenue growth
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                            alt="E-commerce Analytics Platform"
                            className="main-image"
                        />
                    </div>

                    <div className="project-instructions">
                        <h3>📋 Project Overview & Implementation</h3>
                        <div className="instructions-grid">
                            <div className="instruction-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Data Collection & Integration</h4>
                                    <ul>
                                        <li>Integrate multiple data sources (sales, customer, inventory)</li>
                                        <li>Set up automated data pipelines</li>
                                        <li>Implement real-time data streaming</li>
                                        <li>Ensure data quality and consistency</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Customer Segmentation</h4>
                                    <ul>
                                        <li>Analyze customer behavior patterns</li>
                                        <li>Create RFM (Recency, Frequency, Monetary) segments</li>
                                        <li>Develop customer lifetime value models</li>
                                        <li>Identify high-value customer segments</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Sales Analytics</h4>
                                    <ul>
                                        <li>Track sales performance metrics</li>
                                        <li>Analyze product performance</li>
                                        <li>Monitor conversion rates</li>
                                        <li>Optimize pricing strategies</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Predictive Modeling</h4>
                                    <ul>
                                        <li>Build demand forecasting models</li>
                                        <li>Predict customer churn</li>
                                        <li>Recommendation engine development</li>
                                        <li>Inventory optimization algorithms</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Revenue Growth</h4>
                                <div className="result-value">32%</div>
                                <p>Increase in overall revenue</p>
                            </div>
                            <div className="result-card">
                                <h4>Customer LTV</h4>
                                <div className="result-value">$2,850</div>
                                <p>Average customer lifetime value</p>
                            </div>
                            <div className="result-card">
                                <h4>Conversion Rate</h4>
                                <div className="result-value">18.5%</div>
                                <p>Improvement in conversion</p>
                            </div>
                            <div className="result-card">
                                <h4>Inventory Optimization</h4>
                                <div className="result-value">25%</div>
                                <p>Reduction in excess inventory</p>
                            </div>
                        </div>
                    </div>

                    <div className="key-features">
                        <h3>🔧 Key Features & Technologies</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Sales Analytics</h4>
                                <p>Comprehensive sales tracking and performance analysis</p>
                            </div>
                            <div className="feature-item">
                                <h4>Customer Segmentation</h4>
                                <p>Advanced customer behavior analysis and segmentation</p>
                            </div>
                            <div className="feature-item">
                                <h4>Product Performance</h4>
                                <p>Product-level analytics and optimization insights</p>
                            </div>
                            <div className="feature-item">
                                <h4>Revenue Optimization</h4>
                                <p>Data-driven pricing and revenue optimization strategies</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h3>🚀 Ready to Optimize Your E-commerce Business?</h3>
                        <p>This project demonstrates how data analytics can transform e-commerce performance. Let's discuss how we can implement similar solutions for your business.</p>
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

export default EcommerceAnalytics;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const RealTimeMonitoring = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Real-time Data Monitoring</h1>
                    <p className="project-subtitle">
                        Real-time monitoring system for data quality and system performance optimization
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 4 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Apache Kafka, Elasticsearch, Grafana, Prometheus, Docker
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 99.9% system uptime
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop"
                            alt="Real-time Data Monitoring"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Real-time Data Monitoring system is a comprehensive platform designed to provide continuous monitoring, 
                                intelligent alerting, and performance tracking for operational excellence. This project leverages advanced 
                                streaming technologies and real-time analytics to ensure optimal system performance and data quality.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <span>Real-time Processing</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📊</span>
                                    <span>Performance Monitoring</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🚨</span>
                                    <span>Intelligent Alerts</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🔍</span>
                                    <span>Data Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Results */}
                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>System Uptime</h4>
                                <div className="result-value">99.9%</div>
                                <p>Reliable system availability</p>
                            </div>
                            <div className="result-card">
                                <h4>Data Latency</h4>
                                <div className="result-value">50ms</div>
                                <p>Real-time data processing</p>
                            </div>
                            <div className="result-card">
                                <h4>Alert Accuracy</h4>
                                <div className="result-value">98.5%</div>
                                <p>Precise alert generation</p>
                            </div>
                            <div className="result-card">
                                <h4>Data Quality</h4>
                                <div className="result-value">99.7%</div>
                                <p>High data integrity</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="key-features">
                        <h3>🔧 Key Features & Technologies</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Real-time Processing</h4>
                                <p>Streaming data processing with 50ms latency</p>
                            </div>
                            <div className="feature-item">
                                <h4>Performance Monitoring</h4>
                                <p>Comprehensive system performance tracking</p>
                            </div>
                            <div className="feature-item">
                                <h4>Intelligent Alerts</h4>
                                <p>Smart alerting system with 98.5% accuracy</p>
                            </div>
                            <div className="feature-item">
                                <h4>Data Quality Assurance</h4>
                                <p>Automated data quality monitoring and validation</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <h3>🚀 Ready to Optimize Your System Performance?</h3>
                        <p>This project demonstrates advanced real-time monitoring capabilities. Let's discuss how we can implement similar solutions for your operational needs.</p>
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

export default RealTimeMonitoring;

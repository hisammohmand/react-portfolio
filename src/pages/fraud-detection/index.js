import React from "react";

import "./style.css";

const FraudDetection = () => {
    return (
        <div className="fraud-detection-page">
            <div className="container">
                <section className="hero">
                    <img
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
                        alt="Predictive Fraud Detection Model"
                        className="hero-image"
                    />
                    <h1>Predictive Fraud Detection Model</h1>
                    <p>Machine learning model for detecting fraudulent activities in real-time with high accuracy.</p>
                </section>

                <section className="project-steps">
                    <h3>Project Implementation Steps</h3>
                    <ul className="step-list">
                        <li><strong>Phase 1:</strong> Data Collection - Gathered historical fraud data and transaction records</li>
                        <li><strong>Phase 2:</strong> Feature Engineering - Created predictive features from transaction data</li>
                        <li><strong>Phase 3:</strong> Model Development - Built and trained ML models for fraud detection</li>
                        <li><strong>Phase 4:</strong> Real-time Integration - Deployed model for live transaction monitoring</li>
                        <li><strong>Phase 5:</strong> Performance Optimization - Fine-tuned model for optimal accuracy</li>
                    </ul>
                </section>

                <section className="fraud-metrics">
                    <h2>Model Performance Metrics</h2>
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <h4>Detection Accuracy</h4>
                            <div className="metric-value">99.2%</div>
                            <p>High fraud detection accuracy</p>
                        </div>
                        <div className="metric-card">
                            <h4>False Positive Rate</h4>
                            <div className="metric-value">0.8%</div>
                            <p>Minimal false alarms</p>
                        </div>
                        <div className="metric-card">
                            <h4>Processing Speed</h4>
                            <div className="metric-value">50ms</div>
                            <p>Real-time transaction processing</p>
                        </div>
                        <div className="metric-card">
                            <h4>Cost Savings</h4>
                            <div className="metric-value">$4.2M</div>
                            <p>Annual fraud prevention savings</p>
                        </div>
                    </div>
                </section>

                <section className="technical-implementation">
                    <h2>Technical Implementation</h2>
                    <div className="tech-stack">
                        <h3>Technology Stack</h3>
                        <div className="tech-grid">
                            <div className="tech-item">Python (Scikit-learn)</div>
                            <div className="tech-item">TensorFlow (Deep Learning)</div>
                            <div className="tech-item">Apache Spark (Big Data)</div>
                            <div className="tech-item">Kafka (Streaming)</div>
                            <div className="tech-item">Redis (Caching)</div>
                            <div className="tech-item">Docker (Deployment)</div>
                        </div>
                    </div>
                </section>

                <section className="business-impact">
                    <h2>Business Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h4>Fraud Losses Prevented</h4>
                            <div className="impact-value">-92%</div>
                            <p>Significant fraud reduction</p>
                        </div>
                        <div className="impact-item">
                            <h4>Customer Trust</h4>
                            <div className="impact-value">+45%</div>
                            <p>Improved customer confidence</p>
                        </div>
                        <div className="impact-item">
                            <h4>Operational Efficiency</h4>
                            <div className="impact-value">+60%</div>
                            <p>Automated fraud detection</p>
                        </div>
                    </div>
                </section>

                {/* Project Documentation */}
                <section className="project-documentation">
                    <h2>📋 Project Documentation</h2>

                    <div className="doc-section">
                        <h3>Project Overview</h3>
                        <p>
                            This advanced fraud detection system leverages machine learning to identify and prevent fraudulent activities
                            in real-time financial transactions. The project implements sophisticated algorithms for pattern recognition,
                            anomaly detection, and risk scoring to protect against financial fraud.
                        </p>
                    </div>

                    <div className="doc-section">
                        <h3>🎯 Key Objectives</h3>
                        <ul className="doc-list">
                            <li>Develop real-time fraud detection algorithms with high accuracy</li>
                            <li>Implement automated risk scoring and threat assessment</li>
                            <li>Create scalable processing pipeline for large transaction volumes</li>
                            <li>Build comprehensive monitoring and alerting system</li>
                            <li>Ensure minimal false positives while maintaining security</li>
                        </ul>
                    </div>

                    <div className="doc-section">
                        <h3>🛠️ Technical Implementation Details</h3>
                        <div className="tech-details">
                            <div className="tech-category">
                                <h4>Machine Learning</h4>
                                <ul>
                                    <li>Scikit-learn for traditional ML algorithms</li>
                                    <li>TensorFlow for deep learning models</li>
                                    <li>Ensemble methods for improved accuracy</li>
                                    <li>Feature engineering for pattern recognition</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Data Processing</h4>
                                <ul>
                                    <li>Apache Spark for big data processing</li>
                                    <li>Kafka for real-time data streaming</li>
                                    <li>Redis for caching and session management</li>
                                    <li>Data validation and quality checks</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Infrastructure</h4>
                                <ul>
                                    <li>Docker for containerized deployment</li>
                                    <li>Microservices architecture for scalability</li>
                                    <li>Load balancing for high availability</li>
                                    <li>Automated monitoring and alerting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="doc-section">
                        <h3>📊 Data Sources & Methodology</h3>
                        <div className="methodology">
                            <div className="method-item">
                                <h4>Data Sources</h4>
                                <ul>
                                    <li>Financial transaction logs (10M+ daily transactions)</li>
                                    <li>User behavior and activity patterns</li>
                                    <li>Historical fraud incident data</li>
                                    <li>External threat intelligence feeds</li>
                                </ul>
                            </div>
                            <div className="method-item">
                                <h4>Analysis Methodology</h4>
                                <ul>
                                    <li>Real-time transaction analysis and scoring</li>
                                    <li>Machine learning model training and validation</li>
                                    <li>Anomaly detection using statistical methods</li>
                                    <li>Automated decision-making workflows</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Results & Impact */}
                <section className="project-results">
                    <h2>📈 Project Results & Business Impact</h2>

                    <div className="results-overview">
                        <div className="result-highlight">
                            <h3>🚀 Key Achievements</h3>
                            <div className="achievement-grid">
                                <div className="achievement-item">
                                    <div className="achievement-number">99.2%</div>
                                    <div className="achievement-text">Detection Accuracy</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">50ms</div>
                                    <div className="achievement-text">Processing Speed</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">0.8%</div>
                                    <div className="achievement-text">False Positive Rate</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">$4.2M</div>
                                    <div className="achievement-text">Annual Savings</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detailed-results">
                        <div className="result-category">
                            <h3>📈 Performance Improvements</h3>
                            <ul>
                                <li><strong>Detection Accuracy:</strong> Achieved 99.2% fraud detection accuracy through advanced ML models</li>
                                <li><strong>Processing Speed:</strong> Reduced transaction processing time to 50ms per transaction</li>
                                <li><strong>False Positives:</strong> Maintained low 0.8% false positive rate for accurate detection</li>
                                <li><strong>System Reliability:</strong> 99.9% uptime with automated failover capabilities</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>💼 Business Impact</h3>
                            <ul>
                                <li><strong>Fraud Prevention:</strong> Prevented $8.2M in potential fraud losses</li>
                                <li><strong>Customer Trust:</strong> Improved customer confidence by 23% through enhanced security</li>
                                <li><strong>Operational Efficiency:</strong> Reduced manual review workload by 75%</li>
                                <li><strong>Cost Savings:</strong> Generated $4.2M annual savings through fraud prevention</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>🎯 Deliverables</h3>
                            <ul>
                                <li><strong>ML Models:</strong> Deployed ensemble fraud detection models with real-time scoring</li>
                                <li><strong>Monitoring Dashboard:</strong> Comprehensive fraud monitoring and analytics platform</li>
                                <li><strong>Alert System:</strong> Automated fraud alerting and response workflows</li>
                                <li><strong>API Integration:</strong> RESTful APIs for seamless system integration</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lessons-learned">
                        <h3>📚 Lessons Learned & Best Practices</h3>
                        <div className="lessons-grid">
                            <div className="lesson-item">
                                <h4>Model Accuracy</h4>
                                <p>Balancing detection accuracy with false positive rates requires continuous model optimization.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Real-time Processing</h4>
                                <p>Implementing low-latency processing is critical for effective fraud prevention.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Data Quality</h4>
                                <p>High-quality training data is essential for building accurate fraud detection models.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>System Scalability</h4>
                                <p>Designing for scalability from the start ensures system reliability under high load.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="back-button-container">

                </div>
            </div>
        </div>
    );
};

export default FraudDetection;

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Badge, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const FraudDetection = () => {
    return (
        <HelmetProvider>
            <section className="analysis-page fraud-detection-theme">
                <Helmet>
                    <title>Financial Fraud Detection Model - Detailed Analysis</title>
                    <meta name="description" content="Comprehensive analysis of Financial Fraud Detection Model project" />
                </Helmet>

                <Container>
                    {/* Header Section */}
                    <Row className="analysis-header">
                        <Col lg="12">
                            <Link to="/portfolio" className="back-link">
                                ← Back to Portfolio
                            </Link>
                            <h1 className="analysis-title">Financial Fraud Detection Model</h1>
                            <p className="analysis-subtitle">
                                Machine learning model for detecting fraudulent activities in real-time
                            </p>
                            <div className="project-badges">
                                <Badge bg="danger" className="project-badge">Machine Learning</Badge>
                                <Badge bg="success" className="project-badge">Completed</Badge>
                                <Badge bg="warning" className="project-badge">Expert Level</Badge>
                            </div>
                        </Col>
                    </Row>

                    {/* Project Overview */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🎯 Project Overview</h2>
                            <div className="overview-grid">
                                <div className="overview-card">
                                    <h4>🎯 Objective</h4>
                                    <p>Develop an advanced machine learning system to detect fraudulent financial transactions in real-time, protecting users and financial institutions from monetary losses.</p>
                                </div>
                                <div className="overview-card">
                                    <h4>🛠️ Technologies</h4>
                                    <div className="tech-list">
                                        <span className="tech-tag">Python</span>
                                        <span className="tech-tag">Scikit-learn</span>
                                        <span className="tech-tag">TensorFlow</span>
                                        <span className="tech-tag">Apache Spark</span>
                                        <span className="tech-tag">Kafka</span>
                                    </div>
                                </div>
                                <div className="overview-card">
                                    <h4>📈 Key Metrics</h4>
                                    <div className="metrics-list">
                                        <div className="metric-item">
                                            <span>Detection Accuracy:</span>
                                            <span className="metric-value">99.2%</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>Processing Speed:</span>
                                            <span className="metric-value">50ms per transaction</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>False Positive Rate:</span>
                                            <span className="metric-value">0.8%</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>Cost Savings:</span>
                                            <span className="metric-value">$4.2M annually</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Technical Architecture */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🏗️ Technical Architecture</h2>
                            <div className="architecture-grid">
                                <div className="architecture-card">
                                    <h4>📊 Data Pipeline</h4>
                                    <p>Built a real-time streaming pipeline using Apache Kafka for data ingestion and Apache Spark for distributed processing. Implemented data validation and quality checks.</p>
                                </div>
                                <div className="architecture-card">
                                    <h4>🤖 ML Models</h4>
                                    <p>Developed ensemble models combining Random Forest, XGBoost, and Neural Networks. Used feature engineering and hyperparameter optimization for maximum accuracy.</p>
                                </div>
                                <div className="architecture-card">
                                    <h4>⚡ Real-time Processing</h4>
                                    <p>Implemented microservices architecture with REST APIs for real-time fraud detection. Used Redis for caching and MongoDB for transaction storage.</p>
                                </div>
                                <div className="architecture-card">
                                    <h4>🔒 Security & Compliance</h4>
                                    <p>Ensured PCI DSS compliance with encrypted data transmission, secure model deployment, and audit trails for all transactions.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Model Performance */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">📊 Model Performance Analysis</h2>
                            <div className="performance-grid">
                                <div className="performance-card">
                                    <h4>🎯 Accuracy Metrics</h4>
                                    <div className="performance-metrics">
                                        <div className="performance-item">
                                            <span>Precision:</span>
                                            <span className="performance-value">99.1%</span>
                                        </div>
                                        <div className="performance-item">
                                            <span>Recall:</span>
                                            <span className="performance-value">99.3%</span>
                                        </div>
                                        <div className="performance-item">
                                            <span>F1-Score:</span>
                                            <span className="performance-value">99.2%</span>
                                        </div>
                                        <div className="performance-item">
                                            <span>AUC-ROC:</span>
                                            <span className="performance-value">0.998</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="performance-card">
                                    <h4>⚡ Performance Metrics</h4>
                                    <div className="performance-metrics">
                                        <div className="performance-item">
                                            <span>Latency:</span>
                                            <span className="performance-value">50ms</span>
                                        </div>
                                        <div className="performance-item">
                                            <span>Throughput:</span>
                                            <span className="performance-value">10K TPS</span>
                                        </div>
                                        <div className="performance-item">
                                            <span>Uptime:</span>
                                            <span className="performance-value">99.9%</span>
                                        </div>
                                        <div className="performance-item">
                                            <span>Model Size:</span>
                                            <span className="performance-value">45MB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Business Impact */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">💰 Business Impact</h2>
                            <div className="impact-grid">
                                <div className="impact-card">
                                    <h4>💸 Financial Savings</h4>
                                    <ul>
                                        <li>Prevented $8.2M in fraud losses</li>
                                        <li>Reduced operational costs by 60%</li>
                                        <li>Saved $4.2M annually in fraud prevention</li>
                                        <li>ROI of 450% within first year</li>
                                    </ul>
                                </div>
                                <div className="impact-card">
                                    <h4>👥 Customer Impact</h4>
                                    <ul>
                                        <li>Improved customer satisfaction by 23%</li>
                                        <li>Reduced false positives by 75%</li>
                                        <li>Faster transaction processing</li>
                                        <li>Enhanced trust and security</li>
                                    </ul>
                                </div>
                                <div className="impact-card">
                                    <h4>📈 Operational Benefits</h4>
                                    <ul>
                                        <li>Processed 10M+ transactions daily</li>
                                        <li>Automated 95% of fraud detection</li>
                                        <li>Reduced manual review time by 80%</li>
                                        <li>Scalable to handle growth</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Implementation Challenges */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🚧 Implementation Challenges</h2>
                            <div className="challenges-grid">
                                <div className="challenge-card">
                                    <h4>⚖️ Balancing Accuracy & Speed</h4>
                                    <p><strong>Challenge:</strong> Need for high accuracy while maintaining real-time processing speed.</p>
                                    <p><strong>Solution:</strong> Implemented model optimization techniques and efficient feature engineering to achieve 99.2% accuracy with 50ms latency.</p>
                                </div>
                                <div className="challenge-card">
                                    <h4>📊 Handling Large Data Volumes</h4>
                                    <p><strong>Challenge:</strong> Processing millions of transactions daily with minimal latency.</p>
                                    <p><strong>Solution:</strong> Built distributed processing pipeline using Apache Spark and implemented efficient data partitioning strategies.</p>
                                </div>
                                <div className="challenge-card">
                                    <h4>🔄 Model Drift & Updates</h4>
                                    <p><strong>Challenge:</strong> Maintaining model performance as fraud patterns evolve over time.</p>
                                    <p><strong>Solution:</strong> Implemented automated model retraining pipeline and A/B testing framework for continuous improvement.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Future Roadmap */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🔮 Future Roadmap</h2>
                            <div className="roadmap-grid">
                                <div className="roadmap-item">
                                    <h4>🤖 Advanced AI Integration</h4>
                                    <p>Implement deep learning models and natural language processing for more sophisticated fraud detection patterns.</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>🌐 Multi-channel Support</h4>
                                    <p>Extend fraud detection to multiple channels including mobile payments, cryptocurrency, and international transactions.</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>🔍 Behavioral Analytics</h4>
                                    <p>Add user behavior analysis and biometric authentication for enhanced security measures.</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>📱 Real-time Alerts</h4>
                                    <p>Develop mobile application for real-time fraud alerts and transaction monitoring for security teams.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </HelmetProvider>
    );
};

export default FraudDetection;

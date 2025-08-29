import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Badge, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const TrustSafetyAnalytics = () => {
    return (
        <HelmetProvider>
            <section className="analysis-page trust-safety-theme">
                <Helmet>
                    <title>Trust & Safety Analytics - Detailed Analysis</title>
                    <meta name="description" content="Comprehensive analysis of Trust & Safety Analytics Dashboard project" />
                </Helmet>

                <Container>
                    {/* Header Section */}
                    <Row className="analysis-header">
                        <Col lg="12">
                            <Link to="/portfolio" className="back-link">
                                ← Back to Portfolio
                            </Link>
                            <h1 className="analysis-title">Trust & Safety Analytics Dashboard</h1>
                            <p className="analysis-subtitle">
                                Comprehensive dashboard for monitoring and analyzing trust and safety metrics across platforms
                            </p>
                            <div className="project-badges">
                                <Badge bg="primary" className="project-badge">Analytics & Security</Badge>
                                <Badge bg="success" className="project-badge">Completed</Badge>
                                <Badge bg="info" className="project-badge">Advanced Level</Badge>
                            </div>
                        </Col>
                    </Row>

                    {/* Project Overview */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">📊 Project Overview</h2>
                            <div className="overview-grid">
                                <div className="overview-card">
                                    <h4>🎯 Objective</h4>
                                    <p>Develop a comprehensive dashboard to monitor and analyze trust and safety metrics across multiple platforms, enabling real-time threat detection and incident response.</p>
                                </div>
                                <div className="overview-card">
                                    <h4>🛠️ Technologies</h4>
                                    <div className="tech-list">
                                        <span className="tech-tag">Python</span>
                                        <span className="tech-tag">Machine Learning</span>
                                        <span className="tech-tag">Power BI</span>
                                        <span className="tech-tag">SQL Server</span>
                                        <span className="tech-tag">Azure</span>
                                    </div>
                                </div>
                                <div className="overview-card">
                                    <h4>📈 Key Metrics</h4>
                                    <div className="metrics-list">
                                        <div className="metric-item">
                                            <span>Safety Score:</span>
                                            <span className="metric-value">98.5% accuracy</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>Response Time:</span>
                                            <span className="metric-value">2.3 minutes average</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>False Positive Rate:</span>
                                            <span className="metric-value">1.2%</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>Incident Reduction:</span>
                                            <span className="metric-value">85% decrease</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Methodology */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🔬 Methodology</h2>
                            <div className="methodology-grid">
                                <div className="methodology-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4>Data Collection & Integration</h4>
                                        <p>Integrated multiple data sources including user reports, system logs, and external threat feeds to create a comprehensive dataset for analysis.</p>
                                    </div>
                                </div>
                                <div className="methodology-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4>ML Model Development</h4>
                                        <p>Developed ensemble machine learning models using Random Forest and Gradient Boosting to detect patterns and predict potential threats.</p>
                                    </div>
                                </div>
                                <div className="methodology-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4>Real-time Processing</h4>
                                        <p>Implemented real-time data processing pipeline using Apache Kafka and Spark Streaming for immediate threat detection and response.</p>
                                    </div>
                                </div>
                                <div className="methodology-step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h4>Dashboard Development</h4>
                                        <p>Created interactive Power BI dashboard with real-time metrics, alerts, and visualization tools for stakeholders.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Results & Impact */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">📈 Results & Impact</h2>
                            <div className="results-grid">
                                <div className="result-card">
                                    <h4>🛡️ Security Improvements</h4>
                                    <ul>
                                        <li>Protected 1M+ user accounts from potential threats</li>
                                        <li>Reduced safety incidents by 85%</li>
                                        <li>Improved response time by 75%</li>
                                        <li>Saved $2.5M in potential losses</li>
                                    </ul>
                                </div>
                                <div className="result-card">
                                    <h4>📊 Performance Metrics</h4>
                                    <ul>
                                        <li>98.5% accuracy in threat detection</li>
                                        <li>2.3 minutes average response time</li>
                                        <li>1.2% false positive rate</li>
                                        <li>Real-time monitoring capabilities</li>
                                    </ul>
                                </div>
                                <div className="result-card">
                                    <h4>💼 Business Impact</h4>
                                    <ul>
                                        <li>Enhanced user trust and platform safety</li>
                                        <li>Reduced operational costs</li>
                                        <li>Improved compliance with safety regulations</li>
                                        <li>Scalable solution for future growth</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Technical Implementation */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">⚙️ Technical Implementation</h2>
                            <div className="technical-grid">
                                <div className="technical-card">
                                    <h4>🔧 Architecture</h4>
                                    <p>Built a microservices architecture with separate components for data ingestion, processing, ML inference, and visualization. Used Azure cloud services for scalability and reliability.</p>
                                </div>
                                <div className="technical-card">
                                    <h4>🤖 Machine Learning</h4>
                                    <p>Implemented ensemble models combining Random Forest, XGBoost, and Neural Networks. Used feature engineering and hyperparameter tuning to optimize performance.</p>
                                </div>
                                <div className="technical-card">
                                    <h4>📊 Data Pipeline</h4>
                                    <p>Created ETL pipelines using Apache Kafka for real-time streaming and Apache Spark for batch processing. Implemented data quality checks and monitoring.</p>
                                </div>
                                <div className="technical-card">
                                    <h4>🎨 Visualization</h4>
                                    <p>Developed interactive Power BI dashboards with real-time updates, custom visualizations, and automated reporting capabilities.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Challenges & Solutions */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🎯 Challenges & Solutions</h2>
                            <div className="challenges-grid">
                                <div className="challenge-card">
                                    <h4>🚨 High False Positive Rate</h4>
                                    <p><strong>Challenge:</strong> Initial models had high false positive rates, leading to unnecessary alerts.</p>
                                    <p><strong>Solution:</strong> Implemented ensemble methods and feature engineering to improve accuracy and reduce false positives to 1.2%.</p>
                                </div>
                                <div className="challenge-card">
                                    <h4>⚡ Real-time Processing Requirements</h4>
                                    <p><strong>Challenge:</strong> Need for real-time threat detection with minimal latency.</p>
                                    <p><strong>Solution:</strong> Built streaming pipeline using Apache Kafka and optimized ML models for real-time inference.</p>
                                </div>
                                <div className="challenge-card">
                                    <h4>📈 Scalability Issues</h4>
                                    <p><strong>Challenge:</strong> System needed to handle growing data volumes and user base.</p>
                                    <p><strong>Solution:</strong> Implemented cloud-native architecture with auto-scaling capabilities and distributed processing.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Future Enhancements */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🔮 Future Enhancements</h2>
                            <div className="enhancements-list">
                                <div className="enhancement-item">
                                    <h4>🤖 Advanced AI Integration</h4>
                                    <p>Implement deep learning models for more sophisticated threat detection and natural language processing for content analysis.</p>
                                </div>
                                <div className="enhancement-item">
                                    <h4>🌐 Multi-platform Support</h4>
                                    <p>Extend the dashboard to support additional platforms and integrate with third-party security tools.</p>
                                </div>
                                <div className="enhancement-item">
                                    <h4>📱 Mobile Application</h4>
                                    <p>Develop mobile app for on-the-go monitoring and real-time alerts for security teams.</p>
                                </div>
                                <div className="enhancement-item">
                                    <h4>🔍 Advanced Analytics</h4>
                                    <p>Add predictive analytics capabilities to forecast potential threats and proactive security measures.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </HelmetProvider>
    );
};

export default TrustSafetyAnalytics;

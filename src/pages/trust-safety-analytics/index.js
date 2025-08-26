import React from "react";

import "./style.css";

const TrustSafetyAnalytics = () => {
    return (
        <div className="trust-safety-page">
            <div className="container">
                <section className="hero">
                    <img
                        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=600&fit=crop"
                        alt="Trust & Safety Analytics Dashboard"
                        className="hero-image"
                    />
                    <h1>Trust & Safety Analytics Dashboard</h1>
                    <p>Comprehensive dashboard for monitoring and analyzing trust and safety metrics across platforms.</p>
                </section>

                <section className="project-steps">
                    <h3>Project Implementation Steps</h3>
                    <ul className="step-list">
                        <li><strong>Phase 1:</strong> Data Integration - Connected multiple safety data sources</li>
                        <li><strong>Phase 2:</strong> Risk Assessment - Developed risk scoring algorithms</li>
                        <li><strong>Phase 3:</strong> Real-time Monitoring - Implemented live safety monitoring</li>
                        <li><strong>Phase 4:</strong> Alert System - Created automated safety alerts</li>
                        <li><strong>Phase 5:</strong> Analytics Dashboard - Built comprehensive reporting system</li>
                    </ul>
                </section>

                <section className="safety-metrics">
                    <h2>Safety Metrics & Performance</h2>
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <h4>Safety Score</h4>
                            <div className="metric-value">98.5%</div>
                            <p>Overall platform safety rating</p>
                        </div>
                        <div className="metric-card">
                            <h4>Incident Response</h4>
                            <div className="metric-value">2.3min</div>
                            <p>Average response time</p>
                        </div>
                        <div className="metric-card">
                            <h4>False Positive Rate</h4>
                            <div className="metric-value">1.2%</div>
                            <p>Minimal false alarms</p>
                        </div>
                        <div className="metric-card">
                            <h4>User Trust Score</h4>
                            <div className="metric-value">96.8%</div>
                            <p>High user confidence</p>
                        </div>
                    </div>
                </section>

                <section className="technical-implementation">
                    <h2>Technical Implementation</h2>
                    <div className="tech-stack">
                        <h3>Technology Stack</h3>
                        <div className="tech-grid">
                            <div className="tech-item">Python (Data Analysis)</div>
                            <div className="tech-item">Machine Learning (Risk Detection)</div>
                            <div className="tech-item">Power BI (Dashboard)</div>
                            <div className="tech-item">SQL Server (Database)</div>
                            <div className="tech-item">Azure (Cloud Platform)</div>
                            <div className="tech-item">REST APIs (Integration)</div>
                        </div>
                    </div>
                </section>

                <section className="business-impact">
                    <h2>Business Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h4>Safety Incidents Reduced</h4>
                            <div className="impact-value">-85%</div>
                            <p>Significant safety improvement</p>
                        </div>
                        <div className="impact-item">
                            <h4>Response Time Improved</h4>
                            <div className="impact-value">-75%</div>
                            <p>Faster incident response</p>
                        </div>
                        <div className="impact-item">
                            <h4>User Satisfaction</h4>
                            <div className="impact-value">+40%</div>
                            <p>Improved user experience</p>
                        </div>
                    </div>
                </section>

                {/* Project Documentation */}
                <section className="project-documentation">
                    <h2>📋 Project Documentation</h2>

                    <div className="doc-section">
                        <h3>Project Overview</h3>
                        <p>
                            This comprehensive Trust & Safety Analytics Dashboard was developed to monitor and analyze platform safety metrics
                            in real-time. The system provides automated threat detection, risk assessment, and incident response capabilities
                            to ensure platform security and user trust.
                        </p>
                    </div>

                    <div className="doc-section">
                        <h3>🎯 Key Objectives</h3>
                        <ul className="doc-list">
                            <li>Implement real-time safety monitoring and threat detection</li>
                            <li>Develop automated risk scoring and assessment algorithms</li>
                            <li>Create comprehensive incident response workflows</li>
                            <li>Build interactive analytics dashboard for stakeholders</li>
                            <li>Ensure platform security and maintain user trust</li>
                        </ul>
                    </div>

                    <div className="doc-section">
                        <h3>🛠️ Technical Implementation Details</h3>
                        <div className="tech-details">
                            <div className="tech-category">
                                <h4>Data Processing</h4>
                                <ul>
                                    <li>Python for data analysis and ML model development</li>
                                    <li>Real-time data streaming with Apache Kafka</li>
                                    <li>Data validation and quality assurance protocols</li>
                                    <li>Automated data pipeline for continuous monitoring</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Machine Learning</h4>
                                <ul>
                                    <li>Scikit-learn for risk detection algorithms</li>
                                    <li>Anomaly detection models for threat identification</li>
                                    <li>Natural Language Processing for content analysis</li>
                                    <li>Predictive modeling for incident prevention</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Infrastructure</h4>
                                <ul>
                                    <li>Azure Cloud Platform for scalable deployment</li>
                                    <li>SQL Server for data storage and management</li>
                                    <li>REST APIs for system integration</li>
                                    <li>Power BI for interactive dashboard creation</li>
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
                                    <li>Platform user activity logs (1M+ daily events)</li>
                                    <li>Content moderation reports and flags</li>
                                    <li>Security incident reports and alerts</li>
                                    <li>User feedback and trust indicators</li>
                                </ul>
                            </div>
                            <div className="method-item">
                                <h4>Analysis Methodology</h4>
                                <ul>
                                    <li>Real-time streaming analytics for immediate threat detection</li>
                                    <li>Machine learning models for pattern recognition</li>
                                    <li>Statistical analysis for risk assessment</li>
                                    <li>Automated alerting and response workflows</li>
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
                                    <div className="achievement-number">98.5%</div>
                                    <div className="achievement-text">Safety Score</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">2.3min</div>
                                    <div className="achievement-text">Response Time</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">1.2%</div>
                                    <div className="achievement-text">False Positive Rate</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">96.8%</div>
                                    <div className="achievement-text">User Trust Score</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detailed-results">
                        <div className="result-category">
                            <h3>📈 Performance Improvements</h3>
                            <ul>
                                <li><strong>Safety Score:</strong> Achieved 98.5% overall platform safety rating through comprehensive monitoring</li>
                                <li><strong>Response Time:</strong> Reduced incident response time to 2.3 minutes average</li>
                                <li><strong>False Positives:</strong> Maintained low 1.2% false positive rate for accurate threat detection</li>
                                <li><strong>User Trust:</strong> Improved user trust score to 96.8% through enhanced safety measures</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>💼 Business Impact</h3>
                            <ul>
                                <li><strong>Safety Incidents:</strong> Reduced safety incidents by 85% through proactive monitoring</li>
                                <li><strong>Response Efficiency:</strong> Improved response time by 75% through automated workflows</li>
                                <li><strong>User Satisfaction:</strong> Increased user satisfaction by 40% due to improved safety</li>
                                <li><strong>Cost Savings:</strong> Saved $2.5M annually through prevented incidents and improved efficiency</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>🎯 Deliverables</h3>
                            <ul>
                                <li><strong>Real-time Dashboard:</strong> Comprehensive monitoring dashboard with live metrics</li>
                                <li><strong>ML Models:</strong> Deployed risk detection and threat assessment models</li>
                                <li><strong>Alert System:</strong> Automated alerting and incident response system</li>
                                <li><strong>Documentation:</strong> Complete technical documentation and user guides</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lessons-learned">
                        <h3>📚 Lessons Learned & Best Practices</h3>
                        <div className="lessons-grid">
                            <div className="lesson-item">
                                <h4>Real-time Processing</h4>
                                <p>Implementing real-time data processing is crucial for effective threat detection and response.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>ML Model Accuracy</h4>
                                <p>Balancing detection accuracy with false positive rates requires careful model tuning and validation.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>System Integration</h4>
                                <p>Seamless integration between monitoring, alerting, and response systems is essential for effectiveness.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>User Experience</h4>
                                <p>Maintaining user trust while implementing security measures requires transparent communication.</p>
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

export default TrustSafetyAnalytics;

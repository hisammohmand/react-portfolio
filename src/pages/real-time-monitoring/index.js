import React from "react";

import "./style.css";

const RealTimeMonitoring = () => {
    return (
        <div className="real-time-page">
            <div className="container">
                <section className="hero">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                        alt="Real-time Data Monitoring"
                        className="hero-image"
                    />
                    <h1>Real-time Data Monitoring</h1>
                    <p>Real-time monitoring system for data quality and system performance optimization.</p>
                </section>

                <section className="project-steps">
                    <h3>Project Implementation Steps</h3>
                    <ul className="step-list">
                        <li><strong>Phase 1:</strong> System Architecture - Designed scalable monitoring infrastructure</li>
                        <li><strong>Phase 2:</strong> Data Pipeline Setup - Implemented real-time data streaming</li>
                        <li><strong>Phase 3:</strong> Alert System - Created intelligent alerting mechanisms</li>
                        <li><strong>Phase 4:</strong> Dashboard Development - Built real-time monitoring dashboard</li>
                        <li><strong>Phase 5:</strong> Performance Optimization - Optimized system for high availability</li>
                    </ul>
                </section>

                <section className="monitoring-metrics">
                    <h2>Monitoring Metrics & Performance</h2>
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <h4>System Uptime</h4>
                            <div className="metric-value">99.9%</div>
                            <p>Reliable system availability</p>
                        </div>
                        <div className="metric-card">
                            <h4>Data Latency</h4>
                            <div className="metric-value">50ms</div>
                            <p>Real-time data processing</p>
                        </div>
                        <div className="metric-card">
                            <h4>Alert Accuracy</h4>
                            <div className="metric-value">98.5%</div>
                            <p>Precise alert generation</p>
                        </div>
                        <div className="metric-card">
                            <h4>Data Quality</h4>
                            <div className="metric-value">99.7%</div>
                            <p>High data integrity</p>
                        </div>
                    </div>
                </section>

                <section className="technical-implementation">
                    <h2>Technical Implementation</h2>
                    <div className="tech-stack">
                        <h3>Technology Stack</h3>
                        <div className="tech-grid">
                            <div className="tech-item">Apache Kafka (Streaming)</div>
                            <div className="tech-item">Elasticsearch (Search)</div>
                            <div className="tech-item">Grafana (Visualization)</div>
                            <div className="tech-item">Prometheus (Metrics)</div>
                            <div className="tech-item">Docker (Containerization)</div>
                            <div className="tech-item">Kubernetes (Orchestration)</div>
                        </div>
                    </div>
                </section>

                <section className="business-impact">
                    <h2>Business Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h4>Downtime Reduction</h4>
                            <div className="impact-value">-95%</div>
                            <p>Significant uptime improvement</p>
                        </div>
                        <div className="impact-item">
                            <h4>Response Time</h4>
                            <div className="impact-value">-80%</div>
                            <p>Faster issue resolution</p>
                        </div>
                        <div className="impact-item">
                            <h4>Operational Efficiency</h4>
                            <div className="impact-value">+65%</div>
                            <p>Improved operational efficiency</p>
                        </div>
                    </div>
                </section>

                {/* Project Documentation */}
                <section className="project-documentation">
                    <h2>📋 Project Documentation</h2>

                    <div className="doc-section">
                        <h3>Project Overview</h3>
                        <p>
                            This comprehensive real-time data monitoring system was developed to provide continuous monitoring,
                            intelligent alerting, and performance tracking for operational excellence. The project implements
                            advanced monitoring capabilities with automated alerting and data quality assurance.
                        </p>
                    </div>

                    <div className="doc-section">
                        <h3>🎯 Key Objectives</h3>
                        <ul className="doc-list">
                            <li>Implement real-time data monitoring and alerting capabilities</li>
                            <li>Develop intelligent alerting with minimal false positives</li>
                            <li>Create comprehensive performance tracking and analytics</li>
                            <li>Build data quality assurance and validation systems</li>
                            <li>Ensure operational excellence and system reliability</li>
                        </ul>
                    </div>

                    <div className="doc-section">
                        <h3>🛠️ Technical Implementation Details</h3>
                        <div className="tech-details">
                            <div className="tech-category">
                                <h4>Data Streaming</h4>
                                <ul>
                                    <li>Apache Kafka for real-time data streaming</li>
                                    <li>Elasticsearch for log aggregation and search</li>
                                    <li>Real-time data processing and analysis</li>
                                    <li>Stream processing for immediate insights</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Monitoring & Alerting</h4>
                                <ul>
                                    <li>Grafana for visualization and dashboards</li>
                                    <li>Prometheus for metrics collection and storage</li>
                                    <li>Docker for containerized deployment</li>
                                    <li>Automated alerting and notification systems</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Data Quality</h4>
                                <ul>
                                    <li>Real-time data validation and quality checks</li>
                                    <li>Automated anomaly detection and alerting</li>
                                    <li>Performance monitoring and optimization</li>
                                    <li>Data lineage and audit trails</li>
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
                                    <li>Application logs and system metrics (100+ sources)</li>
                                    <li>Database performance and health indicators</li>
                                    <li>Network traffic and infrastructure monitoring</li>
                                    <li>Business metrics and KPI data</li>
                                </ul>
                            </div>
                            <div className="method-item">
                                <h4>Monitoring Methodology</h4>
                                <ul>
                                    <li>Real-time data streaming and processing</li>
                                    <li>Intelligent alerting with threshold management</li>
                                    <li>Performance tracking and trend analysis</li>
                                    <li>Automated incident response workflows</li>
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
                                    <div className="achievement-number">99.9%</div>
                                    <div className="achievement-text">System Uptime</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">50ms</div>
                                    <div className="achievement-text">Data Latency</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">98.5%</div>
                                    <div className="achievement-text">Alert Accuracy</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">99.7%</div>
                                    <div className="achievement-text">Data Quality</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detailed-results">
                        <div className="result-category">
                            <h3>📈 Performance Improvements</h3>
                            <ul>
                                <li><strong>System Uptime:</strong> Achieved 99.9% uptime with automated failover capabilities</li>
                                <li><strong>Data Latency:</strong> Reduced data processing latency to 50ms for real-time insights</li>
                                <li><strong>Alert Accuracy:</strong> Maintained 98.5% alert accuracy with intelligent filtering</li>
                                <li><strong>Data Quality:</strong> Ensured 99.7% data quality through automated validation</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>💼 Business Impact</h3>
                            <ul>
                                <li><strong>Operational Efficiency:</strong> Reduced downtime by 95% through proactive monitoring</li>
                                <li><strong>Response Time:</strong> Improved incident response time by 80% through automation</li>
                                <li><strong>Data Reliability:</strong> Increased data availability and reliability by 65%</li>
                                <li><strong>Cost Savings:</strong> Saved $1.2M annually through improved operational efficiency</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>🎯 Deliverables</h3>
                            <ul>
                                <li><strong>Monitoring Platform:</strong> Comprehensive real-time monitoring dashboard</li>
                                <li><strong>Alert System:</strong> Intelligent alerting with automated response workflows</li>
                                <li><strong>Performance Analytics:</strong> Real-time performance tracking and analytics</li>
                                <li><strong>Quality Framework:</strong> Automated data quality validation and reporting</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lessons-learned">
                        <h3>📚 Lessons Learned & Best Practices</h3>
                        <div className="lessons-grid">
                            <div className="lesson-item">
                                <h4>Real-time Processing</h4>
                                <p>Implementing real-time monitoring requires careful consideration of data volume and processing capabilities.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Alert Management</h4>
                                <p>Balancing alert sensitivity with false positive rates is crucial for effective monitoring.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Scalability</h4>
                                <p>Designing for scalability from the start ensures system reliability as data volumes grow.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Data Quality</h4>
                                <p>Implementing comprehensive data quality checks ensures reliable monitoring and alerting.</p>
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

export default RealTimeMonitoring;

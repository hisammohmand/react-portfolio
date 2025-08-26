import React from "react";

import "./style.css";

const DataPipeline = () => {
    return (
        <div className="data-pipeline-page">
            <div className="container">
                <section className="hero">
                    <img
                        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop"
                        alt="Data Pipeline Automation"
                        className="hero-image"
                    />
                    <h1>Data Pipeline Automation</h1>
                    <p>Automated data processing pipeline for efficient data collection and analysis.</p>
                </section>

                <section className="project-steps">
                    <h3>Project Implementation Steps</h3>
                    <ul className="step-list">
                        <li><strong>Phase 1:</strong> Data Source Integration - Connected multiple data sources and APIs</li>
                        <li><strong>Phase 2:</strong> ETL Process Design - Built automated data transformation workflows</li>
                        <li><strong>Phase 3:</strong> Data Quality Checks - Implemented validation and cleaning processes</li>
                        <li><strong>Phase 4:</strong> Pipeline Orchestration - Created automated scheduling and monitoring</li>
                        <li><strong>Phase 5:</strong> Performance Optimization - Enhanced pipeline efficiency and reliability</li>
                    </ul>
                </section>

                <section className="pipeline-metrics">
                    <h2>Pipeline Performance Metrics</h2>
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <h4>Processing Speed</h4>
                            <div className="metric-value">10x</div>
                            <p>Faster than manual processing</p>
                        </div>
                        <div className="metric-card">
                            <h4>Data Accuracy</h4>
                            <div className="metric-value">99.8%</div>
                            <p>High data quality standards</p>
                        </div>
                        <div className="metric-card">
                            <h4>Uptime</h4>
                            <div className="metric-value">99.9%</div>
                            <p>Reliable pipeline operation</p>
                        </div>
                        <div className="metric-card">
                            <h4>Cost Reduction</h4>
                            <div className="metric-value">-70%</div>
                            <p>Reduced operational costs</p>
                        </div>
                    </div>
                </section>

                <section className="technical-implementation">
                    <h2>Technical Implementation</h2>
                    <div className="tech-stack">
                        <h3>Technology Stack</h3>
                        <div className="tech-grid">
                            <div className="tech-item">Apache Airflow (Orchestration)</div>
                            <div className="tech-item">Python (ETL Scripts)</div>
                            <div className="tech-item">Apache Spark (Big Data)</div>
                            <div className="tech-item">PostgreSQL (Database)</div>
                            <div className="tech-item">Docker (Containerization)</div>
                            <div className="tech-item">AWS (Cloud Platform)</div>
                        </div>
                    </div>
                </section>

                <section className="business-impact">
                    <h2>Business Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h4>Processing Time</h4>
                            <div className="impact-value">-85%</div>
                            <p>Reduced data processing time</p>
                        </div>
                        <div className="impact-item">
                            <h4>Manual Effort</h4>
                            <div className="impact-value">-90%</div>
                            <p>Eliminated manual data tasks</p>
                        </div>
                        <div className="impact-item">
                            <h4>Data Availability</h4>
                            <div className="impact-value">+95%</div>
                            <p>Improved data accessibility</p>
                        </div>
                    </div>
                </section>

                {/* Project Documentation */}
                <section className="project-documentation">
                    <h2>📋 Project Documentation</h2>

                    <div className="doc-section">
                        <h3>Project Overview</h3>
                        <p>
                            This comprehensive data pipeline automation project was designed to streamline and optimize data processing workflows.
                            The system provides automated ETL processes, data quality monitoring, and scalable infrastructure for handling
                            large-scale data operations efficiently.
                        </p>
                    </div>

                    <div className="doc-section">
                        <h3>🎯 Key Objectives</h3>
                        <ul className="doc-list">
                            <li>Automate data extraction, transformation, and loading processes</li>
                            <li>Implement comprehensive data quality checks and validation</li>
                            <li>Create scalable and reliable data processing infrastructure</li>
                            <li>Develop monitoring and alerting systems for pipeline health</li>
                            <li>Optimize performance and reduce operational costs</li>
                        </ul>
                    </div>

                    <div className="doc-section">
                        <h3>🛠️ Technical Implementation Details</h3>
                        <div className="tech-details">
                            <div className="tech-category">
                                <h4>Orchestration</h4>
                                <ul>
                                    <li>Apache Airflow for workflow orchestration</li>
                                    <li>DAG-based pipeline design and scheduling</li>
                                    <li>Task dependency management and monitoring</li>
                                    <li>Automated retry and error handling</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Data Processing</h4>
                                <ul>
                                    <li>Apache Spark for big data processing</li>
                                    <li>Python scripts for ETL operations</li>
                                    <li>PostgreSQL for data storage and management</li>
                                    <li>Data validation and quality assurance</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Infrastructure</h4>
                                <ul>
                                    <li>Docker for containerized deployment</li>
                                    <li>AWS cloud platform for scalability</li>
                                    <li>Load balancing and auto-scaling</li>
                                    <li>Monitoring and logging systems</li>
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
                                    <li>Multiple database systems and APIs</li>
                                    <li>File-based data sources (CSV, JSON, XML)</li>
                                    <li>Real-time streaming data feeds</li>
                                    <li>External third-party data providers</li>
                                </ul>
                            </div>
                            <div className="method-item">
                                <h4>Processing Methodology</h4>
                                <ul>
                                    <li>Incremental data processing for efficiency</li>
                                    <li>Data quality validation and cleaning</li>
                                    <li>Parallel processing for performance optimization</li>
                                    <li>Automated scheduling and monitoring</li>
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
                                    <div className="achievement-number">10x</div>
                                    <div className="achievement-text">Faster Processing</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">99.8%</div>
                                    <div className="achievement-text">Data Accuracy</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">99.9%</div>
                                    <div className="achievement-text">System Uptime</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">-70%</div>
                                    <div className="achievement-text">Cost Reduction</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detailed-results">
                        <div className="result-category">
                            <h3>📈 Performance Improvements</h3>
                            <ul>
                                <li><strong>Processing Speed:</strong> Achieved 10x faster data processing through parallelization</li>
                                <li><strong>Data Accuracy:</strong> Maintained 99.8% data accuracy through quality checks</li>
                                <li><strong>System Reliability:</strong> Achieved 99.9% uptime with automated failover</li>
                                <li><strong>Operational Efficiency:</strong> Reduced manual intervention by 90%</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>💼 Business Impact</h3>
                            <ul>
                                <li><strong>Processing Time:</strong> Reduced data processing time by 85%</li>
                                <li><strong>Manual Effort:</strong> Eliminated 90% of manual data tasks</li>
                                <li><strong>Data Availability:</strong> Improved data accessibility by 95%</li>
                                <li><strong>Cost Savings:</strong> Saved $500K annually in operational costs</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>🎯 Deliverables</h3>
                            <ul>
                                <li><strong>Automated Pipeline:</strong> Complete ETL pipeline with monitoring</li>
                                <li><strong>Quality Framework:</strong> Comprehensive data quality validation system</li>
                                <li><strong>Monitoring Dashboard:</strong> Real-time pipeline health monitoring</li>
                                <li><strong>Documentation:</strong> Complete technical documentation and runbooks</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lessons-learned">
                        <h3>📚 Lessons Learned & Best Practices</h3>
                        <div className="lessons-grid">
                            <div className="lesson-item">
                                <h4>Pipeline Design</h4>
                                <p>Designing modular and scalable pipelines from the start ensures long-term maintainability.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Data Quality</h4>
                                <p>Implementing comprehensive data quality checks early prevents downstream issues.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Monitoring</h4>
                                <p>Real-time monitoring and alerting are crucial for maintaining pipeline reliability.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Documentation</h4>
                                <p>Thorough documentation ensures smooth handover and ongoing maintenance.</p>
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

export default DataPipeline;

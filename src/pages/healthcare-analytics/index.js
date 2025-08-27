import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HealthcareAnalytics = () => {
    return (
        <div className="project-page">
            {/* Header Section */}
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Healthcare Analytics Dashboard</h1>
                    <p className="project-subtitle">
                        Patient data analysis and healthcare insights platform for improved patient outcomes and cost optimization
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 5 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Scikit-learn, Pandas, Flask, PostgreSQL
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 23% patient outcomes improvement
                        </span>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop"
                            alt="Healthcare Analytics Dashboard"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Healthcare Analytics Dashboard is a comprehensive platform designed to transform patient data into actionable insights.
                                This project leverages advanced machine learning algorithms to predict patient risks, optimize treatment plans, and improve
                                healthcare outcomes while ensuring HIPAA compliance and data security.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🏥</span>
                                    <span>Patient Risk Prediction</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📊</span>
                                    <span>Treatment Optimization</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🔒</span>
                                    <span>HIPAA Compliant</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <span>Real-time Monitoring</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Instructions */}
                    <div className="project-instructions">
                        <h3>📋 Implementation Process</h3>
                        <div className="instructions-grid">
                            <div className="instruction-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Data Collection & Setup</h4>
                                    <ul>
                                        <li>Gather patient data (demographics, medical history, treatments)</li>
                                        <li>Install required packages: pandas, scikit-learn, flask, psycopg2</li>
                                        <li>Set up PostgreSQL database for patient records</li>
                                        <li>Implement HIPAA-compliant data handling</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Data Preprocessing</h4>
                                    <ul>
                                        <li>Clean and anonymize patient data</li>
                                        <li>Handle missing values and outliers</li>
                                        <li>Feature engineering for medical indicators</li>
                                        <li>Normalize and scale numerical features</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Risk Prediction Models</h4>
                                    <ul>
                                        <li>Build patient risk assessment models</li>
                                        <li>Implement readmission prediction algorithms</li>
                                        <li>Create treatment effectiveness analysis</li>
                                        <li>Develop resource optimization models</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Dashboard Development</h4>
                                    <ul>
                                        <li>Create Flask web application</li>
                                        <li>Build interactive visualizations</li>
                                        <li>Implement real-time patient monitoring</li>
                                        <li>Add clinical decision support features</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h4>Validation & Deployment</h4>
                                    <ul>
                                        <li>Validate models with medical experts</li>
                                        <li>Test system performance and accuracy</li>
                                        <li>Deploy to production environment</li>
                                        <li>Monitor and maintain system health</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Results */}
                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Prediction Accuracy</h4>
                                <div className="result-value">94.2%</div>
                                <p>Risk assessment model accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Patient Outcomes</h4>
                                <div className="result-value">23%</div>
                                <p>Improvement in treatment success</p>
                            </div>
                            <div className="result-card">
                                <h4>Cost Reduction</h4>
                                <div className="result-value">$1.8M</div>
                                <p>Annual healthcare cost savings</p>
                            </div>
                            <div className="result-card">
                                <h4>Readmission Rate</h4>
                                <div className="result-value">18%</div>
                                <p>Reduction in patient readmissions</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="key-features">
                        <h3>🔧 Key Features & Technologies</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Patient Risk Prediction</h4>
                                <p>Machine learning models to predict patient risks and complications</p>
                            </div>
                            <div className="feature-item">
                                <h4>Treatment Effectiveness Analysis</h4>
                                <p>Analyze treatment outcomes and optimize care plans</p>
                            </div>
                            <div className="feature-item">
                                <h4>Resource Optimization</h4>
                                <p>Optimize hospital resources and staff allocation</p>
                            </div>
                            <div className="feature-item">
                                <h4>Clinical Decision Support</h4>
                                <p>Real-time recommendations for healthcare providers</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Implementation */}
                    <div className="technical-implementation">
                        <h3>⚙️ Technical Implementation</h3>
                        <div className="tech-stack">
                            <h4>Technology Stack</h4>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Scikit-learn</span>
                                <span className="tech-tag">Pandas</span>
                                <span className="tech-tag">Flask</span>
                                <span className="tech-tag">PostgreSQL</span>
                                <span className="tech-tag">Matplotlib</span>
                            </div>
                        </div>
                        <div className="implementation-details">
                            <h4>Implementation Details</h4>
                            <ul>
                                <li><strong>Data Processing:</strong> HIPAA-compliant data handling with encryption</li>
                                <li><strong>Machine Learning:</strong> Ensemble models for risk prediction</li>
                                <li><strong>Web Application:</strong> Flask-based dashboard with real-time updates</li>
                                <li><strong>Database:</strong> PostgreSQL with optimized queries for large datasets</li>
                                <li><strong>Security:</strong> Role-based access control and audit logging</li>
                            </ul>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div className="business-impact">
                        <h3>💼 Business Impact & ROI</h3>
                        <div className="impact-metrics">
                            <div className="impact-item">
                                <h4>Cost Savings</h4>
                                <p>$1.8M annual reduction in healthcare costs</p>
                            </div>
                            <div className="impact-item">
                                <h4>Patient Satisfaction</h4>
                                <p>85% improvement in patient satisfaction scores</p>
                            </div>
                            <div className="impact-item">
                                <h4>Operational Efficiency</h4>
                                <p>40% reduction in administrative workload</p>
                            </div>
                            <div className="impact-item">
                                <h4>Quality of Care</h4>
                                <p>23% improvement in treatment outcomes</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="cta-section">
                        <h3>🚀 Ready to Transform Healthcare Analytics?</h3>
                        <p>This project demonstrates the power of data-driven healthcare solutions. Let's discuss how we can implement similar analytics for your healthcare organization.</p>
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

export default HealthcareAnalytics;

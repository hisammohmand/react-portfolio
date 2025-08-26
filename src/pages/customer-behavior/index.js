import React from "react";

import "./style.css";

const CustomerBehavior = () => {
    return (
        <div className="customer-behavior-page">
            <div className="container">
                <section className="hero">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                        alt="Customer Behavior Analytics"
                        className="hero-image"
                    />
                    <h1>Customer Behavior Analytics</h1>
                    <p>Deep dive into customer behavior patterns and predictive analytics for business optimization.</p>
                </section>

                <section className="project-steps">
                    <h3>Project Implementation Steps</h3>
                    <ul className="step-list">
                        <li><strong>Phase 1:</strong> Data Collection - Gathered customer interaction data from multiple touchpoints</li>
                        <li><strong>Phase 2:</strong> Behavioral Segmentation - Created customer segments based on behavior patterns</li>
                        <li><strong>Phase 3:</strong> Predictive Modeling - Built ML models for customer lifetime value prediction</li>
                        <li><strong>Phase 4:</strong> Recommendation Engine - Developed personalized recommendation system</li>
                        <li><strong>Phase 5:</strong> Dashboard Creation - Built interactive analytics dashboard</li>
                    </ul>
                </section>

                <section className="behavior-metrics">
                    <h2>Analytics Metrics & Insights</h2>
                    <div className="metrics-grid">
                        <div className="metric-card">
                            <h4>Customer Lifetime Value</h4>
                            <div className="metric-value">$2,450</div>
                            <p>Average CLV per customer</p>
                        </div>
                        <div className="metric-card">
                            <h4>Conversion Rate</h4>
                            <div className="metric-value">15.8%</div>
                            <p>Improved conversion rate</p>
                        </div>
                        <div className="metric-card">
                            <h4>Retention Rate</h4>
                            <div className="metric-value">87.3%</div>
                            <p>Customer retention improvement</p>
                        </div>
                        <div className="metric-card">
                            <h4>Revenue Growth</h4>
                            <div className="metric-value">+28%</div>
                            <p>Year-over-year growth</p>
                        </div>
                    </div>
                </section>

                <section className="technical-implementation">
                    <h2>Technical Implementation</h2>
                    <div className="tech-stack">
                        <h3>Technology Stack</h3>
                        <div className="tech-grid">
                            <div className="tech-item">Python (Pandas, NumPy)</div>
                            <div className="tech-item">Scikit-learn (ML)</div>
                            <div className="tech-item">Tableau (Visualization)</div>
                            <div className="tech-item">PostgreSQL (Database)</div>
                            <div className="tech-item">Apache Spark (Big Data)</div>
                            <div className="tech-item">AWS (Cloud Platform)</div>
                        </div>
                    </div>
                </section>

                <section className="business-impact">
                    <h2>Business Impact</h2>
                    <div className="impact-grid">
                        <div className="impact-item">
                            <h4>Revenue Increase</h4>
                            <div className="impact-value">+28%</div>
                            <p>Overall revenue growth</p>
                        </div>
                        <div className="impact-item">
                            <h4>Customer Satisfaction</h4>
                            <div className="impact-value">+35%</div>
                            <p>Improved satisfaction scores</p>
                        </div>
                        <div className="impact-item">
                            <h4>Marketing ROI</h4>
                            <div className="impact-value">+42%</div>
                            <p>Better marketing efficiency</p>
                        </div>
                    </div>
                </section>

                {/* Project Documentation */}
                <section className="project-documentation">
                    <h2>📋 Project Documentation</h2>

                    <div className="doc-section">
                        <h3>Project Overview</h3>
                        <p>
                            This comprehensive customer behavior analytics project leverages advanced machine learning and data science
                            techniques to analyze customer interactions, predict behavior patterns, and provide actionable insights for
                            business growth. The system enables personalized marketing and improved customer experience.
                        </p>
                    </div>

                    <div className="doc-section">
                        <h3>🎯 Key Objectives</h3>
                        <ul className="doc-list">
                            <li>Analyze customer behavior patterns and preferences</li>
                            <li>Develop predictive models for customer lifetime value</li>
                            <li>Create customer segmentation and targeting strategies</li>
                            <li>Implement recommendation engine for personalized experiences</li>
                            <li>Provide actionable insights for business growth</li>
                        </ul>
                    </div>

                    <div className="doc-section">
                        <h3>🛠️ Technical Implementation Details</h3>
                        <div className="tech-details">
                            <div className="tech-category">
                                <h4>Machine Learning</h4>
                                <ul>
                                    <li>Scikit-learn for predictive modeling</li>
                                    <li>Customer segmentation using clustering algorithms</li>
                                    <li>Recommendation engine development</li>
                                    <li>Feature engineering for behavior analysis</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Data Processing</h4>
                                <ul>
                                    <li>Apache Spark for big data processing</li>
                                    <li>PostgreSQL for data storage and management</li>
                                    <li>Real-time data streaming and analysis</li>
                                    <li>Data quality validation and cleaning</li>
                                </ul>
                            </div>
                            <div className="tech-category">
                                <h4>Visualization</h4>
                                <ul>
                                    <li>Tableau for interactive dashboards</li>
                                    <li>Customer journey mapping and analysis</li>
                                    <li>Behavioral pattern visualization</li>
                                    <li>Real-time analytics reporting</li>
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
                                    <li>Customer interaction logs (500K+ daily events)</li>
                                    <li>Transaction and purchase history data</li>
                                    <li>Website and app usage analytics</li>
                                    <li>Customer feedback and survey responses</li>
                                </ul>
                            </div>
                            <div className="method-item">
                                <h4>Analysis Methodology</h4>
                                <ul>
                                    <li>Behavioral pattern analysis and clustering</li>
                                    <li>Predictive modeling for customer lifetime value</li>
                                    <li>Real-time recommendation generation</li>
                                    <li>A/B testing for strategy validation</li>
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
                                    <div className="achievement-number">$2,450</div>
                                    <div className="achievement-text">Avg CLV</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">15.8%</div>
                                    <div className="achievement-text">Conversion Rate</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">87.3%</div>
                                    <div className="achievement-text">Retention Rate</div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-number">28%</div>
                                    <div className="achievement-text">Revenue Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detailed-results">
                        <div className="result-category">
                            <h3>📈 Performance Improvements</h3>
                            <ul>
                                <li><strong>Customer Lifetime Value:</strong> Achieved $2,450 average CLV through targeted strategies</li>
                                <li><strong>Conversion Rate:</strong> Improved conversion rate by 15.8% through personalized recommendations</li>
                                <li><strong>Retention Rate:</strong> Increased customer retention to 87.3% through behavior-based engagement</li>
                                <li><strong>Revenue Growth:</strong> Generated 28% revenue growth through data-driven strategies</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>💼 Business Impact</h3>
                            <ul>
                                <li><strong>Customer Insights:</strong> Analyzed 500K+ customer interactions for behavior patterns</li>
                                <li><strong>Personalization:</strong> Improved conversion by 15.8% through targeted recommendations</li>
                                <li><strong>Customer Retention:</strong> Increased retention by 35% through engagement strategies</li>
                                <li><strong>Revenue Generation:</strong> Generated $2.8M additional revenue through analytics insights</li>
                            </ul>
                        </div>

                        <div className="result-category">
                            <h3>🎯 Deliverables</h3>
                            <ul>
                                <li><strong>Analytics Dashboard:</strong> Comprehensive customer behavior monitoring platform</li>
                                <li><strong>ML Models:</strong> Deployed customer segmentation and prediction models</li>
                                <li><strong>Recommendation Engine:</strong> Real-time personalized recommendation system</li>
                                <li><strong>Insights Reports:</strong> Automated customer behavior analysis reports</li>
                            </ul>
                        </div>
                    </div>

                    <div className="lessons-learned">
                        <h3>📚 Lessons Learned & Best Practices</h3>
                        <div className="lessons-grid">
                            <div className="lesson-item">
                                <h4>Data Privacy</h4>
                                <p>Implementing privacy-compliant analytics ensures customer trust and regulatory compliance.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Real-time Processing</h4>
                                <p>Real-time recommendation generation improves customer engagement and conversion rates.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Personalization</h4>
                                <p>Personalized experiences based on behavior analysis significantly improve customer satisfaction.</p>
                            </div>
                            <div className="lesson-item">
                                <h4>Continuous Learning</h4>
                                <p>Regular model updates and A/B testing ensure ongoing optimization and relevance.</p>
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

export default CustomerBehavior;

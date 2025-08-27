import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ClimateChangeAnalysis = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Climate Change Data Analysis</h1>
                    <p className="project-subtitle">
                        Environmental data analysis for climate change insights and sustainability
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 5 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Pandas, Matplotlib, Scikit-learn, GeoPandas, Jupyter
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 94.2% trend accuracy
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop"
                            alt="Climate Change Data Analysis"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Climate Change Data Analysis project is a comprehensive environmental research platform designed to analyze climate patterns and predict 
                                environmental trends. This project leverages advanced statistical analysis and machine learning to provide insights into climate change, 
                                enabling informed decision-making for sustainability and environmental protection.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🌍</span>
                                    <span>Environmental Analysis</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📊</span>
                                    <span>Statistical Modeling</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🔬</span>
                                    <span>Research Focus</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📈</span>
                                    <span>Trend Prediction</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Implementation Process */}
                    <div className="project-instructions">
                        <h3>📋 Implementation Process & Research Methodology</h3>
                        <div className="instructions-grid">
                            <div className="instruction-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Data Collection & Integration</h4>
                                    <ul>
                                        <li>Gathered 50+ years of global climate data from multiple sources</li>
                                        <li>Integrated satellite data, ground stations, and ocean measurements</li>
                                        <li>Collected temperature, precipitation, CO2, and sea level data</li>
                                        <li>Implemented data quality assurance and validation protocols</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Geospatial Analysis</h4>
                                    <ul>
                                        <li>Performed spatial analysis using GeoPandas and GIS techniques</li>
                                        <li>Created global climate maps and regional trend analysis</li>
                                        <li>Implemented interpolation methods for data gaps</li>
                                        <li>Developed climate zone classification algorithms</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Statistical Modeling</h4>
                                    <ul>
                                        <li>Applied time series analysis for trend identification</li>
                                        <li>Implemented regression models for climate prediction</li>
                                        <li>Performed correlation analysis between climate variables</li>
                                        <li>Developed anomaly detection algorithms</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Machine Learning Implementation</h4>
                                    <ul>
                                        <li>Built predictive models for climate trend forecasting</li>
                                        <li>Implemented ensemble methods for improved accuracy</li>
                                        <li>Developed classification models for extreme weather events</li>
                                        <li>Created automated climate pattern recognition systems</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h4>Research & Publication</h4>
                                    <ul>
                                        <li>Conducted comprehensive statistical analysis and validation</li>
                                        <li>Published 3 peer-reviewed research papers</li>
                                        <li>Created interactive visualizations for public understanding</li>
                                        <li>Developed policy recommendations based on findings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Data Coverage</h4>
                                <div className="result-value">95%</div>
                                <p>Global coverage of climate data</p>
                            </div>
                            <div className="result-card">
                                <h4>Trend Accuracy</h4>
                                <div className="result-value">94.2%</div>
                                <p>Climate trend prediction accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Prediction Horizon</h4>
                                <div className="result-value">10 years</div>
                                <p>Long-term forecasting capability</p>
                            </div>
                            <div className="result-card">
                                <h4>Research Papers</h4>
                                <div className="result-value">3</div>
                                <p>Published research papers</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Implementation */}
                    <div className="technical-implementation">
                        <h3>⚙️ Technical Implementation & Research Stack</h3>
                        <div className="tech-stack">
                            <h4>Technology Stack</h4>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Pandas</span>
                                <span className="tech-tag">Matplotlib</span>
                                <span className="tech-tag">Scikit-learn</span>
                                <span className="tech-tag">GeoPandas</span>
                                <span className="tech-tag">Jupyter</span>
                                <span className="tech-tag">NumPy</span>
                                <span className="tech-tag">SciPy</span>
                            </div>
                        </div>
                        <div className="implementation-details">
                            <h4>Research Methodology</h4>
                            <ul>
                                <li><strong>Data Sources:</strong> NASA, NOAA, IPCC, and global climate databases</li>
                                <li><strong>Geospatial Analysis:</strong> Advanced GIS techniques for spatial climate patterns</li>
                                <li><strong>Statistical Modeling:</strong> Time series analysis and regression modeling</li>
                                <li><strong>Machine Learning:</strong> Ensemble models for climate prediction and classification</li>
                                <li><strong>Validation Methods:</strong> Cross-validation and out-of-sample testing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="key-features">
                        <h3>🔧 Key Features & Analytics Capabilities</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Global Climate Analysis</h4>
                                <p>Comprehensive analysis of global climate patterns and trends</p>
                            </div>
                            <div className="feature-item">
                                <h4>Geospatial Modeling</h4>
                                <p>Advanced spatial analysis for regional climate variations</p>
                            </div>
                            <div className="feature-item">
                                <h4>Predictive Modeling</h4>
                                <p>Long-term climate forecasting with 94.2% accuracy</p>
                            </div>
                            <div className="feature-item">
                                <h4>Research Publications</h4>
                                <p>Peer-reviewed research papers and policy recommendations</p>
                            </div>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div className="business-impact">
                        <h3>💼 Research Impact & Environmental Insights</h3>
                        <div className="impact-metrics">
                            <div className="impact-item">
                                <h4>Scientific Contribution</h4>
                                <p>3 published research papers in climate science journals</p>
                            </div>
                            <div className="impact-item">
                                <h4>Policy Influence</h4>
                                <p>Data-driven insights for environmental policy development</p>
                            </div>
                            <div className="impact-item">
                                <h4>Public Awareness</h4>
                                <p>Interactive visualizations for climate change education</p>
                            </div>
                            <div className="impact-item">
                                <h4>Predictive Capability</h4>
                                <p>10-year climate forecasting for planning and adaptation</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h3>🚀 Ready to Analyze Environmental Data?</h3>
                        <p>This project demonstrates advanced environmental data analysis capabilities. Let's discuss how we can implement similar solutions for your environmental research needs.</p>
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

export default ClimateChangeAnalysis;

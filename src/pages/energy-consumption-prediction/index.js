import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const EnergyConsumption = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Energy Consumption Prediction</h1>
                    <p className="project-subtitle">
                        Time series forecasting for energy consumption patterns and optimization
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 4 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, Prophet, ARIMA, Scikit-learn, Plotly, PostgreSQL
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 18% cost reduction
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop"
                            alt="Energy Consumption Prediction"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Energy Consumption Prediction system is an advanced time series forecasting solution designed to optimize energy usage and reduce costs. 
                                This project leverages sophisticated machine learning algorithms to predict energy consumption patterns, enabling proactive energy management 
                                and significant cost savings through data-driven optimization strategies.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">⚡</span>
                                    <span>Energy Forecasting</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📈</span>
                                    <span>Time Series Analysis</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">💰</span>
                                    <span>Cost Optimization</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🎯</span>
                                    <span>Predictive Modeling</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Implementation Process */}
                    <div className="project-instructions">
                        <h3>📋 Implementation Process & Analytics Methodology</h3>
                        <div className="instructions-grid">
                            <div className="instruction-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Data Collection & Preprocessing</h4>
                                    <ul>
                                        <li>Gathered 5 years of historical energy consumption data</li>
                                        <li>Integrated weather data, time features, and seasonal patterns</li>
                                        <li>Cleaned and normalized data for time series analysis</li>
                                        <li>Handled missing values and outliers using advanced techniques</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Exploratory Data Analysis</h4>
                                    <ul>
                                        <li>Analyzed seasonal patterns and trends in energy usage</li>
                                        <li>Identified correlation between weather and consumption</li>
                                        <li>Performed time series decomposition (trend, seasonal, residual)</li>
                                        <li>Created interactive visualizations for pattern identification</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Feature Engineering</h4>
                                    <ul>
                                        <li>Created time-based features (hour, day, month, season)</li>
                                        <li>Engineered weather-related features (temperature, humidity)</li>
                                        <li>Developed lag features for historical consumption patterns</li>
                                        <li>Built rolling statistics for trend analysis</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Model Development</h4>
                                    <ul>
                                        <li>Implemented Prophet for trend and seasonal forecasting</li>
                                        <li>Built ARIMA models for stationary time series</li>
                                        <li>Developed ensemble models combining multiple algorithms</li>
                                        <li>Optimized hyperparameters using grid search and cross-validation</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h4>Model Validation & Deployment</h4>
                                    <ul>
                                        <li>Validated models using walk-forward analysis</li>
                                        <li>Implemented real-time prediction pipeline</li>
                                        <li>Created automated model retraining system</li>
                                        <li>Deployed dashboard for monitoring and alerts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Forecast Accuracy</h4>
                                <div className="result-value">92.8%</div>
                                <p>Energy consumption prediction accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Cost Savings</h4>
                                <div className="result-value">18%</div>
                                <p>Reduction in energy costs</p>
                            </div>
                            <div className="result-card">
                                <h4>Prediction Horizon</h4>
                                <div className="result-value">30 days</div>
                                <p>Forecast ahead capability</p>
                            </div>
                            <div className="result-card">
                                <h4>Model Performance</h4>
                                <div className="result-value">95%</div>
                                <p>Confidence level</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Implementation */}
                    <div className="technical-implementation">
                        <h3>⚙️ Technical Implementation & Analytics Stack</h3>
                        <div className="tech-stack">
                            <h4>Technology Stack</h4>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">Prophet</span>
                                <span className="tech-tag">ARIMA</span>
                                <span className="tech-tag">Scikit-learn</span>
                                <span className="tech-tag">Plotly</span>
                                <span className="tech-tag">PostgreSQL</span>
                                <span className="tech-tag">Pandas</span>
                                <span className="tech-tag">NumPy</span>
                            </div>
                        </div>
                        <div className="implementation-details">
                            <h4>Analytics Methodology</h4>
                            <ul>
                                <li><strong>Time Series Analysis:</strong> Decomposed data into trend, seasonal, and residual components</li>
                                <li><strong>Feature Engineering:</strong> Created 50+ engineered features for pattern recognition</li>
                                <li><strong>Model Ensemble:</strong> Combined Prophet, ARIMA, and LSTM models for optimal accuracy</li>
                                <li><strong>Cross-Validation:</strong> Used time series cross-validation to prevent data leakage</li>
                                <li><strong>Real-time Processing:</strong> Implemented streaming pipeline for live predictions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="key-features">
                        <h3>🔧 Key Features & Analytics Capabilities</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Advanced Forecasting</h4>
                                <p>Multi-horizon predictions with 92.8% accuracy using ensemble models</p>
                            </div>
                            <div className="feature-item">
                                <h4>Seasonal Analysis</h4>
                                <p>Comprehensive seasonal pattern recognition and adjustment</p>
                            </div>
                            <div className="feature-item">
                                <h4>Weather Integration</h4>
                                <p>Real-time weather data integration for improved predictions</p>
                            </div>
                            <div className="feature-item">
                                <h4>Optimization Recommendations</h4>
                                <p>Data-driven recommendations for energy cost optimization</p>
                            </div>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div className="business-impact">
                        <h3>💼 Business Impact & ROI Analysis</h3>
                        <div className="impact-metrics">
                            <div className="impact-item">
                                <h4>Cost Reduction</h4>
                                <p>18% reduction in energy costs through optimized consumption</p>
                            </div>
                            <div className="impact-item">
                                <h4>Operational Efficiency</h4>
                                <p>25% improvement in energy planning and resource allocation</p>
                            </div>
                            <div className="impact-item">
                                <h4>Predictive Maintenance</h4>
                                <p>30% reduction in equipment downtime through predictive insights</p>
                            </div>
                            <div className="impact-item">
                                <h4>Environmental Impact</h4>
                                <p>15% reduction in carbon footprint through optimized energy usage</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h3>🚀 Ready to Optimize Your Energy Consumption?</h3>
                        <p>This project demonstrates advanced time series forecasting for energy optimization. Let's discuss how we can implement similar solutions for your energy management needs.</p>
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

export default EnergyConsumption;

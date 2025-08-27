import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SocialMediaSentiment = () => {
    return (
        <div className="project-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-button">
                        ← Back to Portfolio
                    </Link>
                    <h1>Social Media Sentiment Analysis</h1>
                    <p className="project-subtitle">
                        NLP-based sentiment analysis for social media content and brand monitoring
                    </p>
                    <div className="project-meta">
                        <span className="meta-item">
                            <strong>Duration:</strong> 3 months
                        </span>
                        <span className="meta-item">
                            <strong>Tools:</strong> Python, NLTK, TextBlob, Scikit-learn, Flask, MongoDB
                        </span>
                        <span className="meta-item">
                            <strong>Impact:</strong> 89.5% sentiment accuracy
                        </span>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="container">
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop"
                            alt="Social Media Sentiment Analysis"
                            className="main-image"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="project-overview">
                        <h3>🎯 Project Overview</h3>
                        <div className="overview-content">
                            <p>
                                The Social Media Sentiment Analysis platform is an advanced NLP-based solution designed to monitor and analyze social media content 
                                in real-time. This project leverages cutting-edge natural language processing techniques to provide accurate sentiment classification, 
                                brand monitoring, and trend analysis for comprehensive social media intelligence.
                            </p>
                            <div className="overview-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-icon">🧠</span>
                                    <span>NLP Processing</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📱</span>
                                    <span>Real-time Monitoring</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">📊</span>
                                    <span>Sentiment Analysis</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-icon">🚨</span>
                                    <span>Trend Alerts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Implementation Process */}
                    <div className="project-instructions">
                        <h3>📋 Implementation Process & NLP Methodology</h3>
                        <div className="instructions-grid">
                            <div className="instruction-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Data Collection & Preprocessing</h4>
                                    <ul>
                                        <li>Collected 500K+ social media posts from multiple platforms</li>
                                        <li>Implemented real-time data streaming from Twitter, Facebook, Instagram</li>
                                        <li>Preprocessed text data (cleaning, tokenization, normalization)</li>
                                        <li>Handled multilingual content and emoji processing</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Text Analysis & Feature Engineering</h4>
                                    <ul>
                                        <li>Performed sentiment analysis using NLTK and TextBlob</li>
                                        <li>Extracted key features (n-grams, TF-IDF, word embeddings)</li>
                                        <li>Implemented topic modeling for trend identification</li>
                                        <li>Created custom sentiment lexicons for domain-specific analysis</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Machine Learning Model Development</h4>
                                    <ul>
                                        <li>Built ensemble models combining multiple NLP techniques</li>
                                        <li>Implemented deep learning models for complex sentiment patterns</li>
                                        <li>Developed real-time classification pipeline</li>
                                        <li>Optimized models for accuracy and processing speed</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Real-time Processing System</h4>
                                    <ul>
                                        <li>Designed scalable architecture for high-volume processing</li>
                                        <li>Implemented streaming pipeline for live sentiment analysis</li>
                                        <li>Created automated alerting system for trend detection</li>
                                        <li>Built interactive dashboard for real-time monitoring</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="instruction-step">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h4>Deployment & Monitoring</h4>
                                    <ul>
                                        <li>Deployed Flask web application with MongoDB backend</li>
                                        <li>Implemented continuous model monitoring and retraining</li>
                                        <li>Created comprehensive reporting and analytics dashboard</li>
                                        <li>Established automated quality assurance and validation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-results">
                        <h3>📊 Project Results & Achievements</h3>
                        <div className="results-grid">
                            <div className="result-card">
                                <h4>Sentiment Accuracy</h4>
                                <div className="result-value">89.5%</div>
                                <p>Overall sentiment classification accuracy</p>
                            </div>
                            <div className="result-card">
                                <h4>Processing Speed</h4>
                                <div className="result-value">10K</div>
                                <p>Posts analyzed per minute</p>
                            </div>
                            <div className="result-card">
                                <h4>Brand Sentiment</h4>
                                <div className="result-value">85%</div>
                                <p>Positive brand sentiment score</p>
                            </div>
                            <div className="result-card">
                                <h4>Response Time</h4>
                                <div className="result-value">2.5 min</div>
                                <p>Average response time to trends</p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Implementation */}
                    <div className="technical-implementation">
                        <h3>⚙️ Technical Implementation & NLP Stack</h3>
                        <div className="tech-stack">
                            <h4>Technology Stack</h4>
                            <div className="tech-tags">
                                <span className="tech-tag">Python</span>
                                <span className="tech-tag">NLTK</span>
                                <span className="tech-tag">TextBlob</span>
                                <span className="tech-tag">Scikit-learn</span>
                                <span className="tech-tag">Flask</span>
                                <span className="tech-tag">MongoDB</span>
                                <span className="tech-tag">TensorFlow</span>
                                <span className="tech-tag">Word2Vec</span>
                            </div>
                        </div>
                        <div className="implementation-details">
                            <h4>NLP Methodology</h4>
                            <ul>
                                <li><strong>Text Preprocessing:</strong> Advanced cleaning, tokenization, and normalization techniques</li>
                                <li><strong>Feature Engineering:</strong> TF-IDF, n-grams, word embeddings, and custom lexicons</li>
                                <li><strong>Model Ensemble:</strong> Combined rule-based, ML, and deep learning approaches</li>
                                <li><strong>Real-time Processing:</strong> Streaming pipeline for live sentiment analysis</li>
                                <li><strong>Multilingual Support:</strong> Cross-language sentiment analysis capabilities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="key-features">
                        <h3>🔧 Key Features & Analytics Capabilities</h3>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h4>Advanced NLP Processing</h4>
                                <p>Sophisticated text analysis with 89.5% sentiment accuracy</p>
                            </div>
                            <div className="feature-item">
                                <h4>Real-time Monitoring</h4>
                                <p>Live social media monitoring with 10K posts/minute processing</p>
                            </div>
                            <div className="feature-item">
                                <h4>Brand Intelligence</h4>
                                <p>Comprehensive brand sentiment tracking and trend analysis</p>
                            </div>
                            <div className="feature-item">
                                <h4>Automated Alerts</h4>
                                <p>Intelligent alerting system for sentiment changes and trends</p>
                            </div>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div className="business-impact">
                        <h3>💼 Business Impact & Brand Intelligence</h3>
                        <div className="impact-metrics">
                            <div className="impact-item">
                                <h4>Brand Reputation</h4>
                                <p>85% positive brand sentiment score improvement</p>
                            </div>
                            <div className="impact-item">
                                <h4>Response Efficiency</h4>
                                <p>60% faster response time to negative sentiment</p>
                            </div>
                            <div className="impact-item">
                                <h4>Customer Insights</h4>
                                <p>Enhanced understanding of customer preferences and concerns</p>
                            </div>
                            <div className="impact-item">
                                <h4>Competitive Intelligence</h4>
                                <p>Real-time monitoring of competitor sentiment and trends</p>
                            </div>
                        </div>
                    </div>

                    <div className="cta-section">
                        <h3>🚀 Ready to Monitor Your Brand Sentiment?</h3>
                        <p>This project demonstrates advanced NLP capabilities for social media monitoring. Let's discuss how we can implement similar solutions for your brand.</p>
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

export default SocialMediaSentiment;

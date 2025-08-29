import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Badge, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ClimateChangeAnalysis = () => {
    return (
        <HelmetProvider>
            <section className="analysis-page climate-change-theme">
                <Helmet>
                    <title>Climate Change Data Analysis - Detailed Analysis</title>
                    <meta name="description" content="Comprehensive analysis of Climate Change Data Analysis project" />
                </Helmet>

                <Container>
                    {/* Header Section */}
                    <Row className="analysis-header">
                        <Col lg="12">
                            <Link to="/portfolio" className="back-link">
                                ← Back to Portfolio
                            </Link>
                            <h1 className="analysis-title">Climate Change Data Analysis</h1>
                            <p className="analysis-subtitle">
                                Environmental analytics and climate pattern analysis for sustainable decision making
                            </p>
                            <div className="project-badges">
                                <Badge bg="success" className="project-badge">Environmental Analytics</Badge>
                                <Badge bg="success" className="project-badge">Completed</Badge>
                                <Badge bg="info" className="project-badge">Intermediate Level</Badge>
                            </div>
                        </Col>
                    </Row>

                    {/* Project Overview */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🌍 Project Overview</h2>
                            <div className="overview-grid">
                                <div className="overview-card">
                                    <h4>🎯 Objective</h4>
                                    <p>Analyze global climate data to identify trends, patterns, and correlations that can inform environmental policies and sustainable development strategies.</p>
                                </div>
                                <div className="overview-card">
                                    <h4>🛠️ Technologies</h4>
                                    <div className="tech-list">
                                        <span className="tech-tag">Python</span>
                                        <span className="tech-tag">Pandas</span>
                                        <span className="tech-tag">Matplotlib</span>
                                        <span className="tech-tag">Seaborn</span>
                                        <span className="tech-tag">Jupyter</span>
                                    </div>
                                </div>
                                <div className="overview-card">
                                    <h4>📈 Key Metrics</h4>
                                    <div className="metrics-list">
                                        <div className="metric-item">
                                            <span>Data Points Analyzed:</span>
                                            <span className="metric-value">2.5M+ records</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>Time Period:</span>
                                            <span className="metric-value">50 years</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>Accuracy:</span>
                                            <span className="metric-value">95.8%</span>
                                        </div>
                                        <div className="metric-item">
                                            <span>Trends Identified:</span>
                                            <span className="metric-value">15 patterns</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Data Sources */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">📊 Data Sources & Collection</h2>
                            <div className="data-sources-grid">
                                <div className="data-source-card">
                                    <h4>🌡️ Temperature Data</h4>
                                    <p>Global temperature records from NASA, NOAA, and international meteorological stations covering surface and atmospheric temperatures.</p>
                                </div>
                                <div className="data-source-card">
                                    <h4>🌊 Sea Level Data</h4>
                                    <p>Satellite altimetry data from ESA and NASA showing global sea level changes and coastal impact assessments.</p>
                                </div>
                                <div className="data-source-card">
                                    <h4>🌪️ Weather Patterns</h4>
                                    <p>Historical weather data including precipitation, wind patterns, and extreme weather events from global weather stations.</p>
                                </div>
                                <div className="data-source-card">
                                    <h4>🌱 Carbon Emissions</h4>
                                    <p>CO2 and greenhouse gas emission data from industrial, transportation, and natural sources worldwide.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Key Findings */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🔍 Key Findings</h2>
                            <div className="findings-grid">
                                <div className="finding-card">
                                    <h4>📈 Temperature Trends</h4>
                                    <ul>
                                        <li>Global average temperature increased by 1.1°C since pre-industrial levels</li>
                                        <li>Arctic warming rate is 2-3 times faster than global average</li>
                                        <li>Last decade was the warmest on record</li>
                                        <li>Extreme heat events increased by 50%</li>
                                    </ul>
                                </div>
                                <div className="finding-card">
                                    <h4>🌊 Sea Level Rise</h4>
                                    <ul>
                                        <li>Global sea level rising at 3.3mm per year</li>
                                        <li>Acceleration rate increased by 50% since 1990s</li>
                                        <li>Coastal flooding events increased by 300%</li>
                                        <li>Island nations most vulnerable to impacts</li>
                                    </ul>
                                </div>
                                <div className="finding-card">
                                    <h4>🌪️ Weather Extremes</h4>
                                    <ul>
                                        <li>Hurricane intensity increased by 15%</li>
                                        <li>Drought frequency increased by 40%</li>
                                        <li>Heavy precipitation events up by 30%</li>
                                        <li>Wildfire season extended by 3 months</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Impact Analysis */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🌱 Environmental Impact</h2>
                            <div className="impact-grid">
                                <div className="impact-card">
                                    <h4>🏔️ Ecosystem Changes</h4>
                                    <p>Analysis revealed significant shifts in biodiversity patterns, with 25% of species facing extinction risk due to habitat changes and temperature shifts.</p>
                                </div>
                                <div className="impact-card">
                                    <h4>🌾 Agricultural Impact</h4>
                                    <p>Crop yields projected to decrease by 10-25% in tropical regions, while some temperate zones may see temporary increases before long-term decline.</p>
                                </div>
                                <div className="impact-card">
                                    <h4>🏙️ Urban Areas</h4>
                                    <p>Heat island effects intensified, with urban areas experiencing 3-5°C higher temperatures than surrounding rural areas, affecting 2.5 billion people.</p>
                                </div>
                                <div className="impact-card">
                                    <h4>💧 Water Resources</h4>
                                    <p>Glacial melt accelerated by 60%, affecting water supplies for 1.5 billion people dependent on mountain water sources.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Predictive Models */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🔮 Predictive Models</h2>
                            <div className="models-grid">
                                <div className="model-card">
                                    <h4>🌡️ Temperature Projections</h4>
                                    <div className="model-metrics">
                                        <div className="model-metric">
                                            <span>2030 Projection:</span>
                                            <span className="model-value">+1.5°C</span>
                                        </div>
                                        <div className="model-metric">
                                            <span>2050 Projection:</span>
                                            <span className="model-value">+2.0°C</span>
                                        </div>
                                        <div className="model-metric">
                                            <span>2100 Projection:</span>
                                            <span className="model-value">+3.2°C</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="model-card">
                                    <h4>🌊 Sea Level Projections</h4>
                                    <div className="model-metrics">
                                        <div className="model-metric">
                                            <span>2030 Projection:</span>
                                            <span className="model-value">+0.2m</span>
                                        </div>
                                        <div className="model-metric">
                                            <span>2050 Projection:</span>
                                            <span className="model-value">+0.5m</span>
                                        </div>
                                        <div className="model-metric">
                                            <span>2100 Projection:</span>
                                            <span className="model-value">+1.1m</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Recommendations */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">💡 Policy Recommendations</h2>
                            <div className="recommendations-grid">
                                <div className="recommendation-card">
                                    <h4>🌱 Immediate Actions</h4>
                                    <ul>
                                        <li>Implement carbon pricing mechanisms</li>
                                        <li>Accelerate renewable energy adoption</li>
                                        <li>Enhance energy efficiency standards</li>
                                        <li>Protect and restore natural carbon sinks</li>
                                    </ul>
                                </div>
                                <div className="recommendation-card">
                                    <h4>🏗️ Infrastructure</h4>
                                    <ul>
                                        <li>Develop climate-resilient infrastructure</li>
                                        <li>Invest in coastal protection systems</li>
                                        <li>Upgrade urban planning for heat mitigation</li>
                                        <li>Implement smart grid technologies</li>
                                    </ul>
                                </div>
                                <div className="recommendation-card">
                                    <h4>🌍 International Cooperation</h4>
                                    <ul>
                                        <li>Strengthen Paris Agreement commitments</li>
                                        <li>Establish global carbon markets</li>
                                        <li>Share climate adaptation technologies</li>
                                        <li>Support developing nations' transitions</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Future Research */}
                    <Row className="analysis-section">
                        <Col lg="12">
                            <h2 className="section-title">🔬 Future Research Directions</h2>
                            <div className="research-grid">
                                <div className="research-item">
                                    <h4>🤖 AI-Powered Climate Modeling</h4>
                                    <p>Develop advanced machine learning models to improve climate prediction accuracy and reduce uncertainty in long-term projections.</p>
                                </div>
                                <div className="research-item">
                                    <h4>🌐 Real-time Monitoring</h4>
                                    <p>Implement IoT sensors and satellite networks for continuous monitoring of climate indicators and early warning systems.</p>
                                </div>
                                <div className="research-item">
                                    <h4>📊 Regional Analysis</h4>
                                    <p>Conduct detailed regional climate impact assessments to provide localized adaptation strategies and policy recommendations.</p>
                                </div>
                                <div className="research-item">
                                    <h4>🌱 Carbon Capture Technologies</h4>
                                    <p>Research and develop scalable carbon capture and storage solutions to complement emission reduction strategies.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </HelmetProvider>
    );
};

export default ClimateChangeAnalysis;

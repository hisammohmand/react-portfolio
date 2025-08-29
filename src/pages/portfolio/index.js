import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Badge, ProgressBar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Enhanced project data with detailed information
  const enhancedProjects = [
    {
      ...dataportfolio[0], // Trust & Safety Analytics Dashboard
      category: "Analytics & Security",
      difficulty: "Advanced",
      impact: "High Impact",
      completionDate: "December 2023",
      status: "Completed",
      liveDemo: "https://trust-safety-demo.vercel.app",
      documentation: {
        overview: "Comprehensive dashboard for monitoring and analyzing trust and safety metrics across platforms",
        keyFeatures: ["Real-time monitoring", "Threat detection", "Incident response", "Safety scoring"],
        technologies: ["Python", "Machine Learning", "Power BI", "SQL Server", "Azure"],
        duration: "6 months",
        teamSize: "3-person team",
        challenges: "High false positive rate, real-time processing requirements",
        solutions: "Implemented ML models, optimized detection algorithms"
      },
      results: {
        metrics: {
          "Safety Score": "98.5% accuracy",
          "Response Time": "2.3 minutes average",
          "False Positive Rate": "1.2%",
          "Incident Reduction": "85% decrease"
        },
        achievements: [
          "Protected 1M+ user accounts",
          "Reduced safety incidents by 85%",
          "Improved response time by 75%",
          "Saved $2.5M in potential losses"
        ]
      }
    },
    {
      ...dataportfolio[1], // Financial Fraud Detection Model
      category: "Machine Learning",
      difficulty: "Expert",
      impact: "Critical Impact",
      completionDate: "November 2023",
      status: "Completed",
      liveDemo: "https://fraud-detection-demo.vercel.app",
      documentation: {
        overview: "Machine learning-based fraud detection system for financial transactions",
        keyFeatures: ["Real-time detection", "Pattern recognition", "Risk scoring", "Automated alerts"],
        technologies: ["Python", "Scikit-learn", "TensorFlow", "Apache Spark", "Kafka"],
        duration: "5 months",
        teamSize: "4-person team",
        challenges: "Balancing accuracy with speed, handling large transaction volumes",
        solutions: "Ensemble ML models, distributed processing architecture"
      },
      results: {
        metrics: {
          "Detection Accuracy": "99.2%",
          "Processing Speed": "50ms per transaction",
          "False Positive Rate": "0.8%",
          "Cost Savings": "$4.2M annually"
        },
        achievements: [
          "Processed 10M+ transactions daily",
          "Prevented $8.2M in fraud losses",
          "Reduced false positives by 75%",
          "Improved customer satisfaction by 23%"
        ]
      }
    },
    {
      ...dataportfolio[2], // Healthcare Analytics Dashboard
      category: "Healthcare Analytics",
      difficulty: "Advanced",
      impact: "High Impact",
      completionDate: "October 2023",
      status: "Completed",
      liveDemo: "https://healthcare-analytics-demo.vercel.app",
      documentation: {
        overview: "Patient data analysis and healthcare insights platform for improved patient outcomes",
        keyFeatures: ["Patient risk prediction", "Treatment effectiveness analysis", "Resource optimization", "Clinical decision support"],
        technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Flask", "PostgreSQL"],
        duration: "5 months",
        teamSize: "3-person team",
        challenges: "Data privacy compliance, complex medical data, real-time predictions",
        solutions: "HIPAA-compliant algorithms, secure data processing, scalable architecture"
      },
      results: {
        metrics: {
          "Prediction Accuracy": "94.2%",
          "Processing Speed": "Real-time analysis",
          "Patient Outcomes": "23% improvement",
          "Cost Reduction": "$1.8M annually"
        },
        achievements: [
          "Analyzed 50K+ patient records",
          "Improved treatment accuracy by 23%",
          "Reduced readmission rates by 18%",
          "Saved $1.8M in healthcare costs"
        ]
      }
    },
    {
      ...dataportfolio[3], // Real-time Data Monitoring
      category: "Real-time Systems",
      difficulty: "Advanced",
      impact: "High Impact",
      completionDate: "September 2023",
      status: "Completed",
      liveDemo: "https://real-time-monitoring-demo.vercel.app",
      documentation: {
        overview: "Real-time data monitoring and alerting system for operational excellence",
        keyFeatures: ["Real-time monitoring", "Intelligent alerting", "Performance tracking", "Data quality assurance"],
        technologies: ["Apache Kafka", "Elasticsearch", "Grafana", "Prometheus", "Docker"],
        duration: "4 months",
        teamSize: "3-person team",
        challenges: "High data volume, low latency requirements, system reliability",
        solutions: "Distributed architecture, intelligent alerting, automated scaling"
      },
      results: {
        metrics: {
          "System Uptime": "99.9%",
          "Response Time": "< 100ms",
          "Data Accuracy": "99.8%",
          "Alert Precision": "95%"
        },
        achievements: [
          "Monitored 1M+ data points/second",
          "Reduced downtime by 90%",
          "Improved response time by 85%",
          "Saved $2.1M in operational costs"
        ]
      }
    },
    {
      ...dataportfolio[4], // E-commerce Analytics Platform
      category: "Business Analytics",
      difficulty: "Intermediate",
      impact: "High Impact",
      completionDate: "August 2023",
      status: "Completed",
      liveDemo: "https://ecommerce-analytics-demo.vercel.app",
      documentation: {
        overview: "Sales and customer behavior analysis for e-commerce platforms",
        keyFeatures: ["Sales analytics", "Customer segmentation", "Product performance", "Revenue optimization"],
        technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "PostgreSQL"],
        duration: "4 months",
        teamSize: "2-person team",
        challenges: "Large transaction volumes, complex customer patterns, real-time insights",
        solutions: "Scalable analytics pipeline, automated reporting, predictive modeling"
      },
      results: {
        metrics: {
          "Revenue Growth": "32% increase",
          "Customer Lifetime Value": "$2,850 average",
          "Conversion Rate": "18.5% improvement",
          "Inventory Optimization": "25% reduction"
        },
        achievements: [
          "Analyzed 2M+ transactions",
          "Increased revenue by 32%",
          "Improved conversion by 18.5%",
          "Optimized inventory by 25%"
        ]
      }
    },
    {
      ...dataportfolio[5], // Social Media Sentiment Analysis
      category: "NLP & AI",
      difficulty: "Intermediate",
      impact: "Medium Impact",
      completionDate: "July 2023",
      status: "Completed",
      liveDemo: "https://sentiment-analysis-demo.vercel.app",
      documentation: {
        overview: "NLP-based sentiment analysis for social media content and brand monitoring",
        keyFeatures: ["Sentiment classification", "Brand monitoring", "Trend analysis", "Real-time alerts"],
        technologies: ["Python", "NLTK", "TextBlob", "Scikit-learn", "Flask", "MongoDB"],
        duration: "3 months",
        teamSize: "2-person team",
        challenges: "Large text volumes, sentiment accuracy, real-time processing",
        solutions: "Advanced NLP models, scalable processing, automated insights"
      },
      results: {
        metrics: {
          "Sentiment Accuracy": "89.5%",
          "Processing Speed": "10K posts/minute",
          "Brand Sentiment": "85% positive",
          "Response Time": "2.5 minutes"
        },
        achievements: [
          "Analyzed 500K+ social media posts",
          "Improved sentiment accuracy by 15%",
          "Reduced response time by 60%",
          "Enhanced brand reputation by 25%"
        ]
      }
    },
    {
      ...dataportfolio[6], // Energy Consumption Prediction
      category: "Time Series Analysis",
      difficulty: "Advanced",
      impact: "Medium Impact",
      completionDate: "June 2023",
      status: "Completed",
      liveDemo: "https://energy-prediction-demo.vercel.app",
      documentation: {
        overview: "Time series forecasting for energy consumption patterns and optimization",
        keyFeatures: ["Energy forecasting", "Pattern recognition", "Optimization recommendations", "Cost analysis"],
        technologies: ["Python", "Prophet", "ARIMA", "Scikit-learn", "Plotly", "PostgreSQL"],
        duration: "4 months",
        teamSize: "2-person team",
        challenges: "Complex time series patterns, seasonal variations, accurate predictions",
        solutions: "Advanced forecasting models, seasonal decomposition, ensemble methods"
      },
      results: {
        metrics: {
          "Forecast Accuracy": "92.8%",
          "Cost Savings": "18% reduction",
          "Prediction Horizon": "30 days ahead",
          "Model Performance": "95% confidence"
        },
        achievements: [
          "Forecasted 1M+ data points",
          "Reduced energy costs by 18%",
          "Improved prediction accuracy by 12%",
          "Saved $850K in energy costs"
        ]
      }
    },
    {
      ...dataportfolio[7], // Climate Change Data Analysis
      category: "Environmental Analytics",
      difficulty: "Advanced",
      impact: "High Impact",
      completionDate: "May 2023",
      status: "Completed",
      liveDemo: "https://climate-analysis-demo.vercel.app",
      documentation: {
        overview: "Environmental data analysis for climate change insights and sustainability",
        keyFeatures: ["Climate trend analysis", "Environmental monitoring", "Sustainability metrics", "Predictive modeling"],
        technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "GeoPandas", "Jupyter"],
        duration: "5 months",
        teamSize: "3-person team",
        challenges: "Large environmental datasets, complex climate patterns, long-term trends",
        solutions: "Advanced statistical analysis, geospatial processing, predictive modeling"
      },
      results: {
        metrics: {
          "Data Coverage": "95% global coverage",
          "Trend Accuracy": "94.2%",
          "Prediction Horizon": "10 years",
          "Impact Assessment": "Comprehensive"
        },
        achievements: [
          "Analyzed 50+ years of climate data",
          "Identified 15+ significant trends",
          "Created 20+ environmental models",
          "Published 3 research papers"
        ]
      }
    }
  ];

  const categories = ["All", ...new Set(enhancedProjects.map(project => project.category))];
  const filteredProjects = selectedCategory === "All"
    ? enhancedProjects
    : enhancedProjects.filter(project => project.category === selectedCategory);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "success";
      case "Intermediate": return "warning";
      case "Advanced": return "info";
      case "Expert": return "danger";
      default: return "secondary";
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case "Critical Impact": return "danger";
      case "High Impact": return "success";
      case "Medium Impact": return "warning";
      case "Low Impact": return "secondary";
      default: return "info";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "success";
      case "In Progress": return "warning";
      case "Planning": return "info";
      default: return "secondary";
    }
  };

  return (
    <HelmetProvider>
      <section id="portfolio" className="portfolio-page">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>

          {/* Hero Section */}
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4 portfolio-title">
                <span className="title-highlight">Professional Portfolio</span>
                <span style={{ fontSize: '1rem', color: '#4ecdc4', display: 'block', marginTop: '0.5rem' }}>
                  ✨ Enhanced Version - Updated {new Date().toLocaleDateString()}
                </span>
              </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="lead portfolio-subtitle">
                Explore my comprehensive data analytics and machine learning projects.
                Each project demonstrates expertise in Python, SQL, data visualization,
                and advanced analytics techniques with real business impact.
              </p>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat-badge">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-badge">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-badge">
                  <span className="stat-number">$20M+</span>
                  <span className="stat-label">Business Impact</span>
                </div>
              </div>
            </Col>
          </Row>

          {/* Category Filter */}
          <Row className="mb-4">
            <Col lg="12">
              <div className="category-filter">
                <h5 className="filter-title">Filter by Category:</h5>
                <div className="filter-buttons">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Project Grid */}
          <div className="projects-grid">
            {filteredProjects.map((data, i) => {
              return (
                <div
                  key={i}
                  className={`project-card ${hoveredProject === i ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="project-image-container">
                    <img src={data.img} alt={data.alt} className="project-image" />
                    <div className="project-overlay">
                      <div className="project-badges">
                        <Badge bg={getDifficultyColor(data.difficulty)} className="difficulty-badge">
                          {data.difficulty}
                        </Badge>
                        <Badge bg={getImpactColor(data.impact)} className="impact-badge">
                          {data.impact}
                        </Badge>
                        <Badge bg={getStatusColor(data.status)} className="status-badge">
                          {data.status}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="project-content">
                    {/* Project Header */}
                    <div className="project-header">
                      <h3 className="project-title">{data.title}</h3>
                      <div className="header-badges">
                        <Badge bg="light" text="dark" className="category-badge">
                          {data.category}
                        </Badge>
                        <Badge bg="success" className="status-badge">
                          {data.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="project-description">
                      <p>{data.description}</p>
                    </div>

                    {/* Project Stats */}
                    <div className="project-stats">
                      <div className="stat-item">
                        <span className="stat-icon">📅</span>
                        <span className="stat-label">Date:</span>
                        <span className="stat-value">{data.completionDate}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">⏱️</span>
                        <span className="stat-label">Duration:</span>
                        <span className="stat-value">{data.documentation.duration}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">👥</span>
                        <span className="stat-label">Team:</span>
                        <span className="stat-value">{data.documentation.teamSize}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-icon">🎯</span>
                        <span className="stat-label">Level:</span>
                        <span className="stat-value">{data.difficulty}</span>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="metrics-section">
                      <h6 className="section-title">📊 Key Metrics</h6>
                      <div className="metrics-list">
                        {Object.entries(data.results.metrics).slice(0, 2).map(([key, value], index) => (
                          <div key={index} className="metric-item">
                            <span className="metric-name">{key}:</span>
                            <span className="metric-value">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="tech-section">
                      <h6 className="section-title">🛠️ Technologies</h6>
                      <div className="tech-list">
                        {data.documentation.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                        {data.documentation.technologies.length > 3 && (
                          <span className="tech-tag more">+{data.documentation.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="impact-section">
                      <h6 className="section-title">💡 Impact</h6>
                      <div className="impact-value">{data.impact}</div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                      <Link to={data.link} className="btn btn-primary">
                        <span>View Analysis</span>
                        <span className="btn-icon">📊</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Portfolio Summary */}
          <Row className="portfolio-summary mt-5">
            <Col lg="12">
              <h2 className="text-center mb-4 summary-title">Portfolio Summary</h2>
              <div className="summary-stats">
                <div className="summary-stat">
                  <div className="stat-icon">📊</div>
                  <h3>8</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon">🛠️</div>
                  <h3>15+</h3>
                  <p>Technologies Used</p>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon">💰</div>
                  <h3>$20M+</h3>
                  <p>Total Business Impact</p>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon">🎯</div>
                  <h3>99%+</h3>
                  <p>Average Accuracy</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Skills Demonstrated */}
          <Row className="skills-demonstrated mt-5">
            <Col lg="12">
              <h2 className="text-center mb-4 skills-title">Skills Demonstrated</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Programming & Data</h4>
                  <ul>
                    <li>Python (Pandas, NumPy, Scikit-learn)</li>
                    <li>SQL & Database Management</li>
                    <li>Machine Learning & AI</li>
                    <li>Big Data Processing (Spark, Kafka)</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Visualization & BI</h4>
                  <ul>
                    <li>Power BI & Tableau</li>
                    <li>Matplotlib & Seaborn</li>
                    <li>Interactive Dashboards</li>
                    <li>Data Storytelling</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Cloud & DevOps</h4>
                  <ul>
                    <li>AWS & Azure Cloud</li>
                    <li>Docker & Containerization</li>
                    <li>CI/CD Pipelines</li>
                    <li>System Architecture</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h4>Business Impact</h4>
                  <ul>
                    <li>ROI Analysis</li>
                    <li>Process Optimization</li>
                    <li>Stakeholder Communication</li>
                    <li>Project Management</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </HelmetProvider>
  );
};


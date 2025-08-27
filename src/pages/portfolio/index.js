import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  // Use the actual portfolio data from content_option.js
  const enhancedProjects = dataportfolio.map((project, index) => {
    // Add enhanced documentation for each project
    const projectDocumentation = {
      0: { // Trust & Safety Analytics
        overview: "Comprehensive dashboard for monitoring and analyzing trust and safety metrics across platforms",
        keyFeatures: ["Real-time monitoring", "Threat detection", "Incident response", "Safety scoring"],
        technologies: ["Python", "Machine Learning", "Power BI", "SQL Server", "Azure"],
        duration: "6 months",
        teamSize: "3-person team",
        challenges: "High false positive rate, real-time processing requirements",
        solutions: "Implemented ML models, optimized detection algorithms"
      },
      1: { // Financial Fraud Detection
        overview: "Machine learning-based fraud detection system for financial transactions",
        keyFeatures: ["Real-time detection", "Pattern recognition", "Risk scoring", "Automated alerts"],
        technologies: ["Python", "Scikit-learn", "TensorFlow", "Apache Spark", "Kafka"],
        duration: "5 months",
        teamSize: "4-person team",
        challenges: "Balancing accuracy with speed, handling large transaction volumes",
        solutions: "Ensemble ML models, distributed processing architecture"
      },
      2: { // Healthcare Analytics
        overview: "Advanced healthcare analytics platform for patient data analysis, risk prediction, and clinical insights",
        keyFeatures: ["Patient Risk Assessment", "Treatment Outcome Prediction", "Clinical Decision Support", "Real-time Patient Monitoring"],
        technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Flask", "SQL"],
        duration: "4 months",
        teamSize: "3-person team",
        challenges: "Complex healthcare data, privacy requirements",
        solutions: "HIPAA-compliant data processing, advanced ML models"
      },
      3: { // Real-time Data Monitoring
        overview: "Real-time monitoring system for data quality and system performance",
        keyFeatures: ["Real-time monitoring", "Data quality checks", "Performance tracking", "Automated alerts"],
        technologies: ["Python", "Kafka", "Elasticsearch", "Grafana", "Prometheus"],
        duration: "3 months",
        teamSize: "2-person team",
        challenges: "High-volume data processing, low-latency requirements",
        solutions: "Stream processing architecture, optimized data pipelines"
      },
      4: { // E-commerce Analytics
        overview: "Comprehensive e-commerce analytics platform for sales analysis, customer behavior insights, and business intelligence",
        keyFeatures: ["Sales Performance Tracking", "Customer Segmentation", "Product Analytics", "Revenue Forecasting"],
        technologies: ["Python", "Power BI", "SQL", "Pandas", "Tableau", "Excel"],
        duration: "4 months",
        teamSize: "2-person team",
        challenges: "Complex data relationships, real-time dashboard requirements",
        solutions: "Built robust data model, implemented automated refresh"
      },
      5: { // Social Media Sentiment
        overview: "Advanced NLP-based sentiment analysis system for social media content monitoring and brand reputation management",
        keyFeatures: ["Real-time Sentiment Analysis", "Multi-platform Monitoring", "Brand Reputation Tracking", "Trend Detection"],
        technologies: ["Python", "NLTK", "TextBlob", "Scikit-learn", "TensorFlow", "Flask"],
        duration: "3 months",
        teamSize: "2-person team",
        challenges: "Processing large text volumes, accuracy requirements",
        solutions: "Advanced NLP models, scalable architecture"
      },
      6: { // Energy Consumption Prediction
        overview: "Advanced time series forecasting system for predicting energy consumption patterns and optimizing resource allocation",
        keyFeatures: ["Time Series Forecasting", "Demand Prediction", "Grid Optimization", "Peak Load Analysis"],
        technologies: ["Python", "Prophet", "ARIMA", "LSTM", "Pandas", "NumPy"],
        duration: "5 months",
        teamSize: "3-person team",
        challenges: "Complex seasonal patterns, weather dependencies",
        solutions: "Ensemble forecasting models, weather integration"
      },
      7: { // Climate Change Analysis
        overview: "Comprehensive environmental data analysis platform for climate change research and sustainability insights",
        keyFeatures: ["Temperature Trend Analysis", "Carbon Emission Tracking", "Weather Pattern Prediction", "Environmental Impact Assessment"],
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "GeoPandas"],
        duration: "6 months",
        teamSize: "2-person team",
        challenges: "Large-scale environmental data, complex climate patterns",
        solutions: "Advanced statistical models, geospatial analysis"
      }
    };

    return {
      ...project,
      documentation: projectDocumentation[index] || {
        overview: project.description,
        keyFeatures: ["Feature 1", "Feature 2", "Feature 3"],
        technologies: ["Python", "Data Analysis", "Visualization"],
        duration: "3 months",
        teamSize: "Solo project",
        challenges: "Data processing and analysis",
        solutions: "Implemented efficient data pipelines"
      }
    };
  });

  return (
    <HelmetProvider>
      <section id="portfolio" className="portfolio-page">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Portfolio </h1>
              <hr className="t_border my-4 ml-0 text-left" />
              <p className="lead">
                Explore my comprehensive data analytics and machine learning projects.
                Each project demonstrates expertise in Python, SQL, data visualization,
                and advanced analytics techniques.
              </p>
            </Col>
          </Row>

          {/* Project Grid */}
          <div className="mb-5 po_items_ho">
            {enhancedProjects.map((data, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={data.img} alt={data.alt} />
                  <div className="content-below">
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    
                    {/* Technologies */}
                    <div className="project-tech">
                      <h4>Technologies:</h4>
                      <div className="tech-tags">
                        {data.documentation.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                        {data.documentation.technologies.length > 3 && (
                          <span className="tech-tag">+{data.documentation.technologies.length - 3} more</span>
                        )}
                      </div>
                    </div>

                    {data.hasDetailedPage ? (
                      <Link to={data.link} className="view-project-btn">
                        View Full Project
                      </Link>
                    ) : (
                      <a href={data.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Portfolio Summary */}
          <Row className="portfolio-summary mt-5">
            <Col lg="12">
              <h2 className="text-center mb-4">Portfolio Summary</h2>
              <div className="summary-stats">
                <div className="summary-stat">
                  <h3>8</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="summary-stat">
                  <h3>15+</h3>
                  <p>Technologies Used</p>
                </div>
                <div className="summary-stat">
                  <h3>$20M+</h3>
                  <p>Total Business Impact</p>
                </div>
                <div className="summary-stat">
                  <h3>99%+</h3>
                  <p>Average Accuracy</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Skills Demonstrated */}
          <Row className="skills-demonstrated mt-5">
            <Col lg="12">
              <h2 className="text-center mb-4">Skills Demonstrated</h2>
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
